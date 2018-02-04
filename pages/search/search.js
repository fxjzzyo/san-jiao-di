// pages/search/search.js
var WxSearch = require('../../wxSearch/wxSearch.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  /**
   * 点击搜索按钮
   */
  wxSearchFn: function (e) {
    console.log('wxSearchFn');
    var that = this;
    WxSearch.wxSearchAddHisKey(that);
  },
  /**
   * 输入框输入内容
   */
  wxSearchInput: function (e) {
    console.log('wxSearchInput');
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  /**
   * 输入框获得焦点
   */
  wxSerchFocus: function (e) {
    console.log('wxSerchFocus');
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
   /**
   * 输入框失去焦点
   */
  wxSearchBlur: function (e) {
    console.log('wxSearchBlur');
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    console.log('wxSearchKeyTap');
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  /**
   * 删除一条搜索记录
   */
  wxSearchDeleteKey: function (e) {
    console.log('wxSearchDeleteKey');
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  /**
   * 清空搜索记录
   */
  wxSearchDeleteAll: function (e) {
    console.log('wxSearchDeleteAll');
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  /**
   * 搜索面板收起
   */
  wxSearchTap: function (e) {
    console.log('wxSearchTap');
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  /**
   * 清空输入框
   */
  clearInput: function (e) {
    console.log('清除');
    var key = "wxSearchData.value";
    this.setData({
      [key]:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //初始化的时候渲染wxSearchdata 第二个为你的search框高度
    WxSearch.init(that, 60, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
    WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
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