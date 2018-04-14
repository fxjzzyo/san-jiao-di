// pages/detail/detail.js
const $vm = getApp()

const { post } = $vm.utils

// const HtmlToJson = require('../../utils/wxParse/html2json.js').html2json;
// const strDiscode = require('../../utils/wxParse/wxDiscode.js').strDiscode

const WxParse = require('../../utils/wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
   console.log('article id:-----'+id)
    this.getArticleDetail(options)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getArticleDetail(opt) {
    $vm.utils.get('hello', { }).then(res=>{
        console.log(res);
        var { article_title: title, article_date: date, article_source: source,article_detail:detail } = res
        // 专题页面
          this.setData({
            article: { title, date, source}
          })

          WxParse.wxParse('html', detail, this);//文章内容
          // WxParse.wxParse('html', res, this);

    }).catch(err=>console.log(err))
  }
})