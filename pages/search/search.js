// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,
    hotTopic: [
      { id: 1, title: '拼多多回应砍价争议' },
      { id: 2, title: '鬼灭之刃第二季更新' },
      { id: 3, title: '拼多多回应砍价争议拼多多回应砍价争议' },
      { id: 4, title: '拼多多回应砍价争议' },
      { id: 5, title: '拼多多回应砍价争议' },
      { id: 6, title: '拼多多回应砍价争议' },
      { id: 7, title: '拼多多回应砍价争议' },
      { id: 8, title: '拼多多回应砍价争议' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navHeight: wx.getStorageSync('navInnerHeight')
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