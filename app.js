// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const { height, right, bottom } = wx.getMenuButtonBoundingClientRect();
    const { screenWidth, windowHeight } = wx.getSystemInfoSync();
    wx.setStorageSync('windowHeight', windowHeight); // 内容区域高度
    wx.setStorageSync('screenWidth', screenWidth); // 可视区域宽度
    wx.setStorageSync('navInnerHeight', height); // 顶部导航内部高度
    wx.setStorageSync('navHeight', (screenWidth - right) + bottom); // 顶部导航总高度
    

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
