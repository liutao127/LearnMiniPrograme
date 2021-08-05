// 注册一个小程序
App({
  // 小程序初始化完成会执行的生命周期函数
  onLaunch: function (options) {
    // console.log('小程序初始化完成：onlaunch');
    // wx.request({
    //   url: '',
    // }),
    // console.log(options)

    // 获取用户信息
    // wx.getUserInfo({
      // success: function(res){
        // console.log(res)
      // }
    // })

    // setTimeout(function () {
    //   const err = new Error();
    //   throw err;
    // }, 3000);
    // setTimeout(() => {
    //   const err = new Error();
    //   throw err;
    // }, 3000);

  },
  // 小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    // 1.  判断小程序进入场景
    // console.log(options);
    switch(options.scene){
      case 1001: 
        break;
      case 1005:
        break;
    }
    // console.log('界面显示出来， onshow')

    // 2. 获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器


  },
  onHide: function () {
    // console.log('界面被隐藏时执行，onhide')
  },
  onError: function (msg) {
    // console.log('当小程序发生错误的时候执行 onerror')
  },
  globalData: {
    name: 'liutao',
    age: 21,
  }
})
