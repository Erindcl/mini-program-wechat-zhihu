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
    ],
    navHeight: 0,
    visible: false,
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
    this.setData({
      navHeight: wx.getStorageSync('navInnerHeight')
    })
  },
  handleOpen: function () {
    this.setData({
      visible: true
    })
  },
  handleClose: function () {
    this.setData({
      visible: false
    })
  },
})