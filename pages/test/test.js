// pages/test/test.js
var fake_data = require("fake_datas.js");

//获取应用实例
const $vm = getApp()

const cache = Object.create(null)

const { decodeHtml, parseNews } = $vm.utils

Page({
  _isLoading: false,
  data_url:'user/home',//请求数据的url
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: fake_data.swiperList,//轮播图
    articles:fake_data.articles,//文章
    categoryTabs: [],//所有tab类别
    otherTabs: [],//用于生成其他tab页内容的占位数组，就是categoryTabs去掉第一个元素
    isLogin: false,//记录是否登录
    loginStatus: 'hello pickuer~',
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    tabContentHeight: '',//tab内容的高度
    topSlogin: '文艺娱乐，广交朋友~',
    //筛选框的参数们
    shownavindex: '',
    filter: '发布时间',
    px: ['发布时间', '截止时间', '热度'],
    pxopen: false,
    pxshow: false,
    content: ''
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  changeCategory: function (e) {
    var chid = e.target.dataset.id;
    if (this.data.currentTab == chid) { return false; }
    else {
      this.setData({
        currentTab: chid
      })
    }
    // this.getNewsList(chid, 0)
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  /**
   * 点击筛选条件下拉菜单
   */
  listpx: function (e) {
    console.log('点击下拉菜单开关');
    if (this.data.pxopen) {
      this.setData({
        pxopen: false,
        pxshow: true,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.px,
        pxopen: true,
        pxshow: false,
        shownavindex: e.currentTarget.dataset.nav
      })
    };
    console.log(e);
  },
  /**
   * 点击筛选条件的条目
   */
  selectFilter: function (e) {
    console.log('选择了');
    this.setData({
      filter: e.currentTarget.dataset.item,
      pxopen: false,
      pxshow: false,
      shownavindex: 0
    })

  },
  /**
   * 搜索输入框获得焦点
   */
  searchInputFocus: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          tabContentHeight: calc,
        });
      }
    });
    

  },

  onPageScroll: function () {
    console.log('页面滚动事件')
  },
  scrolltolower: function (e) {
    console.log('加载更多吧')
  },
  login: function (e) {
    wx.navigateTo({
      url: '../me/me',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getNewsList()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if ($vm.globalData.categoryChanged) {
      console.log('changed');
      $vm.utils.getCategorys().then(res =>
      {
        console.log('res:'+res);
        //根据是否选中category，重新按顺序编号,为了与下面的tabcontent页一致
        var reIndex = 0;
        res.map((category) => {
          if(category.selected){
            category.lanmu_order=reIndex;
            reIndex++;
          }
        });
        this.setData({
          categoryTabs: res,
          otherTabs: res.slice(1)
        })
      }
      
      )
      $vm.globalData.categoryChanged = false
    }
    //检测是否登录
    //同步方式获取本地是否登录标识数据
    var isLogin = wx.getStorageSync('isLogin');
    console.log(isLogin);
    if (isLogin) {
      this.setData({
        isLogin: true,
        loginStatus: 'hello pkuer~'
      });
    } else {
      this.setData({
        isLogin: false,
        loginStatus: '未登录'
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('页面下拉刷新执行的事件')
    // 刷新页面，清空当前的缓存，重新获取
    var chid = this.data.currentTab
    // 命中缓存
    if (cache[chid]) {
      cache[chid] = { slides: [], news: [], page: 0, time: Date.now() }
    }
    // this.getNewsList(chid)
  },
  refresh: function (event) {
    console.log('刷新')
   
  },
  /**
   * 跳转到详情页
   */
  navigateToDetail: function (e) {
    var article_id = e.currentTarget.dataset.id; 
    console.log('id:---' + article_id)
    //TODO跳转到详情页，需要传递参数文章id
    wx.navigateTo({
      url: '../detail/detail?id='+article_id,
    })
  },
  /**
   * 跳转到定制tab页
   */
  navigateToCustomize:function(e){
    //TODO跳转到详情页，需要传递参数
    wx.navigateTo({
      url: '../customize/customize',
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '三角地',
      desc: '在这里，不再错过每一条消息!',
    }
  },
  /**
   * 获取数据
   */
  getNewsList(chid = 0, page = 0) {

    if (!cache[chid]) {
      // 新内容
      cache[chid] = { slides: [], news: [], page: 0, time: Date.now() }
    }
    var infos = cache[chid]
    // 获取下一页数据
    if (page) {
      // 加载中。无法触发
      if (this._isLoading) {
        return false;
      }
      infos.page += 1
    } else {
      // 直接从缓存中取出
      if (infos.news.length) {
        this.setData({
          swiperList: infos.slides,
          articles: infos.news
        })
        return false
      }
    }
    this._isLoading = true
    console.log('chid:--------'+chid)
    $vm.utils.get(this.data_url, { chid: chid, page: infos.page }).then(res => {
      this._isLoading = false
     
      var { code, newsList, newsBanner } = res
      console.log('response:--code:' + code+'newslist:--'+newsList+'banners:--'+newsBanner);
      if (code === 0) {// 请求成功
        // 新文章管理
        if (newsList && newsList.length) {
          // infos.news = []
          var datas = parseNews(newsList);
          console.log('datas:--'+datas);
          infos.news.push(...datas)
        }
        // 轮播管理
        if (newsBanner && newsBanner.length) {
          // infos.slides = []
          var banners = newsBanner.map(news => {
            return {
              id: news.id,
              title: news.title,
              image: news.image,
              deadLine:news.deadLine,
              hotNum:news.hotNum
            }
          })
          infos.slides.push(...banners)
        }
        this.setData({
          swiperList: infos.slides,
          articles: infos.news
        })
      }

    }).catch(err => console.log(err))

  },
})