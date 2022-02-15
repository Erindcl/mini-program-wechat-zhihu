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
    ],
    isSearching: true,
    searchVal: '',
    relationList: ['冲突', '冲突世界', '冲突人民', '冲突管理', '冲突营销'],
    resultList: [
      { id: 1, title: '冲突世界', support: 30, remark: 41, time: '4月前', content: '拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议' },
      { id: 2, title: '冲突世界', support: 30, remark: 41, time: '4月前', content: '拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议拼多多回应砍价争议' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navHeight: wx.getStorageSync('navInnerHeight')
    })
  },
  onInputChange: function (e) {
    this.setData({
      searchVal: e.detail.value,
      isSearching: true,
    })
  },
  onViewResult: function (e) {
    let currSearchVal = this.data.searchVal
    if (e.currentTarget.dataset && e.currentTarget.dataset.value) {
      currSearchVal = e.currentTarget.dataset.value
    }
    this.setData({
      isSearching: false,
      searchVal: currSearchVal
    })
  },
  redirectToHome: function() {
    this.pageRouter.switchTab({
      url: '../index/index'
    })
  },
  redirectToBack: function() {
    this.pageRouter.navigateBack()
  }
})