// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleScroll(event) {
    console.log('正在滚动', event)
  },
  handleToUpper(){
    console.log('滚动到顶部')
  },
  handleToLower(){
    console.log('滚动到底部')
  }
})