// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    userPassword: '',

  },
  /**
   * 登录
   */
  loginClick:function(e){

  },
  /**
   * 提交表单
   */
  formSubmit: function (e) {
    console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}

    //获得表单数据
    var objData = e.detail.value;
    //TODO网络请求，登录到后端服务器

    if (objData.account && objData.password) {
      // 同步方式存储表单数据
      wx.setStorageSync('account', objData.account);
      wx.setStorageSync('password', objData.password);
      wx.setStorageSync('isLogin', true);
      // 异步方式存储表单数据
      // wx.setStorage({
      //   key: 'account',
      //   data: objData.account
      // });
      // wx.setStorage({
      //   key: 'password',
      //   data: objData.password
      // });
     
      // 跳转到成功页面
      wx.reLaunch({
        url: '../test/test',
      });
      wx.showToast({
        title: '登录成功！',
        icon: 'success',
        duration: 2000
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取本地数据，实现记住用户名密码
    var account = wx.getStorageSync('account');
    var password = wx.getStorageSync('password');

    console.log(account);
    console.log(password);
    if (account) {
      this.setData({ account: account });
    }
    if (password) {
      this.setData({ password: password });
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