// pages/studyDetails/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: '',
    id: ''
  },
  getDetails (id) {
    if(wx.getStorageSync('registType') !== 1) {
      app.getCommonNewsDetails({
        dynamic_id: id
      }).then(res => {
        let details = res.data
        details.create_at = details.create_at.slice(0, 10)
        this.setData({
          details: details
        })
      })
    } else {
      app.getNewsDetails({
        dynamic_id: id
      }).then(res => {
        let details = res.data
        details.create_at = details.create_at.slice(0, 10)
        details.content = details.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
        this.setData({
          details: details
        })
        if (details.points == 1) {
          wx.showToast({
            title: '阅读完成，积分+ ' + details.points_num,
            icon: 'none'
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getDetails(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    app.shareAddIntegral({
      type: 10,
      activity_id: this.data.id
    })
  }
})