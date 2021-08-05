// getApp()获取App()产生的实例对象
// const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
// const name = app.globalData.name
// const age = app.globalData.age

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  data: {
    name: 'liutaoDALAO',
    age: 21,
    counter: 0,
    students: [
      {id: 110, name: "kobe", age: 30},
      {id: 111, name: "Jamse", age: 20},
      {id: 112, name: "Curry", age: 10},
      {id: 113, name: "Liutao", age: 20}
    ],
    message: '哈哈哈',
    list: []
  },
  handleBtnClick() {
    // 1. 错误做法：界面是不会刷新的
    // this.data.counter += 1;
    // console.log(this.data.counter);

    // 2. this.setdata()
    this.setData({
      counter: this.data.counter+1,
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter-1,
    })
  },


  // --------- 1.监听页面的生命周期函数  -------------
  onLoad() {
    // 页面被加载出来
    console.log('onLoad');
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
      // 如果这里的success要写成 success: function() {}
      // 的形式，那么在this就不对了，因为箭头函数的this是回退一层一层的找对象
      // 这里应该在wx.request的上面写上const _this = this，这个this对象才是所要的this对象
    })
  },
  onReady() {
    // 页面初次渲染完成
    console.log('onReady');
  },
  onShow() {
    // 页面显示时
    console.log('onShow');
  },
  onHide() {
    // 当页面隐藏起来时
    console.log('onHide');
  },
  onUnload() {
    // 页面跳转之后，返回本页面的时候，现在的页面要销毁，这个页面销毁的时候执行
    console.log('onUnload');
  },

  // -----------2. 监听wxml中相关事件----------
  handelGetUserInfo(event) {
    console.log(event);
  },
  handleViewClick() {
    console.log('view发生了点击')
  },

// -------------3. 监听其他事件 -------------
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  // 监听下拉刷新事件
  onPullDownRefresh() {
    console.log('下拉刷新事件')
  }


})





// 编程范式：
// 命令式变成：原生操作DOM
// 声明式编程：Vue/React/Angular