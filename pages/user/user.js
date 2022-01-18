// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userProfileConfig: [
      { text: '创作', key: 'articlesCount' },
      { text: '赞同', key: 'followCount' },
      { text: '喜欢', key: 'likeCount' },
      { text: '收藏', key: 'collectionCount' },
    ]
  },

  getUserInfo: function () {
    this.setData({
      userInfo: {
        id: 1,
        name: 'Erin',
        avatarUrl: 'https://pic4.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg',
        articlesCount: 2,
        followCount: 7,
        likeCount: 1,
        collectionCount: 6,
      }
    })
  },

  handleBack: function () {
    this.pageRouter.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
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