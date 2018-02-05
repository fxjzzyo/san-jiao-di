// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    loginStatus: '点击登录',
    showLogoutBtn: false
  },
  checkHistory:function(e){
    console.log('浏览记录');
    if(!this.data.isLogin){
      wx.showToast({
        title: '请先登录！',
        icon: 'success',
        duration: 2000
      });
      return;
    };
    wx.navigateTo({
      url: '../history/history',
    })
  },
  feedback: function (e) {
    console.log('意见反馈');
    
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  aboutUs: function (e) {
    console.log('关于我们');
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },
  /**
   * 用户登录
   */
  userLogin: function (e) {
    if (this.data.isLogin) {
      return;
    }
    wx.navigateTo({
      url: '../login/login',
    })

  },
  /**
   * 退出登录
   */
  logout: function (e) {
    console.log('退出登录');
    //清除记录登录的缓存
    wx.removeStorageSync('isLogin');
    this.setData({
      isLogin:false,
      loginStatus: '点击登录',
      showLogoutBtn: false
    });
    wx.showToast({
      title:'已退出登录！',
      icon:'success',
      duration:2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //检测是否登录
    //同步方式获取本地是否登录标识数据
    var isLogin = wx.getStorageSync('isLogin');
    console.log(isLogin);
    if (isLogin) {
      this.setData({
        isLogin: true,
        showLogoutBtn: true,
        //TODO
        //此处应获取用户的姓名，显示到loginStatus
        loginStatus: 'hello pkuer~'
      });
    } else {
      this.setData({
        isLogin: false,
        showLogoutBtn: false,
        loginStatus: '点击登录'
      });
    }
   
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})