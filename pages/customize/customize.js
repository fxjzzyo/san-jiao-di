// pages/customize/customize.js
/**
 * 用户自定义需要显示的分类
 */

const app = getApp()
const util = app.utils
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: '设置关注分类' })
    // 本地数据
    this._getCategorys()
  },
  deleteCategory(event) {
    this._setCategorySelected(event, false)
  },

  addCategory(event) {
    this._setCategorySelected(event, true)
  },
  selectAll() {
    wx.setStorageSync('USER_COLLECT', [])
    app.globalData.categoryChanged = true
    this._getCategorys()
  },
  returnIndex() {
    wx.navigateBack()
  },
  _getCategorys() {
    util.getCategorys().then(res => this.setData({
      categorys: res
    }))
  },
  _setCategorySelected(event, isSelect) {
    var key = event.target.dataset.key
    var idx = `categorys[${key}].selected`

    // 其中校精选，悦青春，闯未来为必选项
    if (parseInt(key, 10) === 0) {
      wx.showToast({ title: '校精选不可删除', duration: 2000 })
      return false
    }
    if (parseInt(key, 10) === 1) {
      wx.showToast({ title: '悦青春不可删除', duration: 2000 })
      return false
    }
    if (parseInt(key, 10) === 2) {
      wx.showToast({ title: '闯未来不可删除', duration: 2000 })
      return false
    }

    this.setData({ [idx]: isSelect })
    // 保存我的喜欢
    var likedArr = []
    this.data.categorys.forEach(function (category) {
      if (category.selected) {
        likedArr.push({
          id: category.lanmu_id,
          sort: 0
        })
      }
    })
    app.globalData.categoryChanged = true
    wx.setStorageSync('USER_COLLECT', likedArr)
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