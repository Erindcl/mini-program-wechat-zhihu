// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarStyles: '',
    navHeight: 0,
    currentPage: '',
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.setStyle();
      this.setData({
        currentPage: getCurrentPages()[0]?.route
      })
    },
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setStyle: function() {
      const {
        screenWidth,
      } = wx.getSystemInfoSync();
      const {
        top, height, width, right, bottom
      } = wx.getMenuButtonBoundingClientRect();
      console.log(wx.getSystemInfoSync()) // 系统信息
      console.log(wx.getMenuButtonBoundingClientRect()) // 胶囊按钮的布局位置信息
      const padding = screenWidth - right; // 宽度
      this.setData({
        navBarStyles: [
          `padding-top: ${top}px`,
          `padding-left: ${padding}px`,
          `padding-right: ${padding + width}px`,
          `padding-bottom: ${padding}px`,
          `height: ${bottom + padding}px`,
        ].join(';'),
        navHeight: height
      });
    }
  }
})
