const BASE_URL = ''

const intercept = (res, resolve, reject) => {
  if (res.statusCode === 200) {
    resolve(res.data);
    // 可根据实际情况选择是否需要做拦截统一处理
    // if (res.data.code === 1) {
    //   resolve(res.data);
    // } else if (res.data.code === 2) {
    //   // code 为 2 表示未登录 跳转至登录页
    //   wx.navigateTo({
    //     url: '/pages/login/index',
    //   })
    // } else {
    //   // 提示错误
    //   wx.showToast({
    //     title: res.data.msg,
    //     icon: 'none',
    //     duration: 800
    //   })
    // }
  } else {
      wx.showToast({
          title: '[' + res.code + '] 服务器出错,请重试',
          icon: 'none',
          duration: 800
      });
      reject();
  }
}

/**
 * Request请求方法
 * @param  {String} url    链接
 * @param  {Object} params 参数
 * @param  {String} method 请求方法
 * @param  {Boolean} isToken  是否携带token
 * @return {Promise}       包含抓取任务的Promise
 */
const getApi = (url, params, method = 'POST', isToken = true) => {
  let token = 'tempToken' // 一般通过 wx.getStorageSync('token') 获取
  if (isToken && !token) {
    return new Promise((resolve, reject) => {
      wx.showToast({
          title: '状态失效，请关闭小程序后，重新打开',
          icon: 'none'
      })
    })
  }
  return new Promise((resolve, reject) => {
    if (isToken) {
      params = Object.assign({ sessionId: token }, params)
    }
    wx.request({
      url: BASE_URL + url,
      data: params,
      method: method,
      header: {
        'content-type': 'application/json',
      },
      success (res) {
        console.log('response: ', res)
        intercept(res, resolve, reject) // 状态拦截 统一处理
      },
      fail: (err) => {
        wx.showToast({
            title: '网络错误',
            icon: 'none',
            duration: 800
        });
        reject();
      },
    })
  })
}

module.exports = {
  getApi,
  url: BASE_URL
}