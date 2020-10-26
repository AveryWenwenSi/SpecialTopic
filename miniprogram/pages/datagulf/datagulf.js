// pages/datagulf/datagulf.js
Page({
 
  /**
  * 页面的初始数据
  */
  data: {
    clouds:[
      "/images/cloud1.jpg",
      "/images/cloud2.gif",
      "/images/cloud3.jpg",
    ],
  },
  
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      currentIndex: 0
    })
  },
  
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    var interval = setInterval(() => {
      if (this.data.currentIndex < this.data.clouds.length - 1) {
        this.setData({
          currentIndex : this.data.currentIndex + 1
        })
      } else {
       // clearInterval(interval);
       this.setData({
        currentIndex: 0
       })
      }
      }, 3000)
  },
  
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
  
  },
 })
 
 