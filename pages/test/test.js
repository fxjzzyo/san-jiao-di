// pages/test/test.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,//记录是否登录
    loginStatus:'hello pickuer~',
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    schoolSelectionData:{
      indicatorDots: true,
      interval: 4000,
      durdation: 1000,
      showRefresh: false,
      images: [
        '../../images/jay1.jpg',
        '../../images/jay2.jpg',
        '../../images/jay3.jpg',
        '../../images/jay4.jpg',
      ],
      listDatas:[
        {
          id:'0',
          title:'第九届校园十佳歌手比赛',
          deadLine:'截止日期：2018-1-23',
          group:'软微研究生会',
          date:'2017-12-1',
          hotNum:'300'
        },
        {
          id: '1',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        },
        {
          id: '2',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        },
        {
          id: '3',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        },
        {
          id: '4',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        },
        {
          id: '5',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        },
        {
          id: '6',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        },
        {
          id: '7',
          title: '第九届校园十佳歌手比赛',
          deadLine: '截止日期：2018-1-23',
          group: '软微研究生会',
          date: '2017-12-1',
          hotNum: '300'
        }
      ]
      
    },
    listOtherDatas: [
      {
        id: '0',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '1',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '2',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '3',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '4',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '5',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '6',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      },
      {
        id: '7',
        title: '人工智能系列讲座|百度李彦宏对话AI未来',
        deadLine: '截止日期：2018-1-23',
        group: '软微研究生会',
        date: '2017-12-1',
        hotNum: '300'
      }
    ],
    topSlogin:'文艺娱乐，广交朋友~',
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
  swichNav: function (e) {
    console.log('qiehuan');
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
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
  searchInputFocus:function(e){
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
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
    //检测是否登录
    //同步方式获取本地是否登录标识数据
    var isLogin = wx.getStorageSync('isLogin');
    console.log(isLogin);
    if (isLogin) {
      this.setData({
         isLogin: true ,
         loginStatus:'hello pkuer~'
      });
    }else{
      this.setData({
        isLogin: false,
        loginStatus: '未登录'
      });
    }

  },
  
  onPageScroll: function () {
    console.log('页面滚动事件')
  },
  scrolltolower:function(e){
    console.log(e);
    console.log('加载更多吧')
  },
  login:function(e){
    wx.navigateTo({
      url: '../me/me',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  },
refresh:function(event){
  console.log('刷新')
  var that = this;
  that.setData({
    showRefresh:true
  });
  setTimeout(function () {
    that.setData({
      showRefresh: true
    })
  }, 3000);
},
/**
 * 跳转到详情页
 */
  navigateToDetail:function(e){
    //TODO跳转到详情页，需要传递参数
    wx.navigateTo({
      url: '../detail/detail',
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
  }
})