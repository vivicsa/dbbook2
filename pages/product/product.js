// pages/product/product.js
const request = require("../../utils/requests");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (id) {
  //   var id = options.id;
  //   // console.log(id);
  // },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({ isbn: options.isbn13 });
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    request.getBookByISBN(that.data.isbn13, function (res) {

      var types = res.data;
      var rating = types.rating;
      rating.block = star.get_star(rating.average);

      res.data = types;
      console.log(res.data);

      that.setData({ bookInfo: res.data });
    });
  },
})