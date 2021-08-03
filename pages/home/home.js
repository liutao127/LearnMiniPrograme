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
    ]
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
  }
})

// 编程范式：
// 命令式变成：原生操作DOM
// 声明式编程：Vue/React/Angular