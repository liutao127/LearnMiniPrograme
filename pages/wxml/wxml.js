// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstName:  'kobe',
    lastName: 'bryant',
    age: 21,
    nowTime: new Date().toLocaleString(),
    isActive: true
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive,
    })
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  }
})