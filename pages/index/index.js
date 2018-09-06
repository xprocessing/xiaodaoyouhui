//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '小道优惠查询',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    itemPic:'',
    itemTitle:'123',
    userinput:''

  },

 
  ///查询小道优惠-start
  getTheUhuidoit: function (e) {
    
    console.log(e.detail.value.userinput);
    this.setData({ userinput: e.detail.value.userinput });

    ////请求一下
    wx.request({
      url: 'https://www.gongziyu.com/taotools/xiaodaoyouhui-io.php', //仅为示例，并非真实的接口地址
      data: {
        kouling: this.data.userinput,
        y: '123'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        //console.log(res.data.results.n_tbk_item.pict_url);
        //this.setData({ itemPic: res.data.results.n_tbk_item.pict_url });
        //this.data.itemTitle = res.data.results.n_tbk_item.title;
        //var itemTitle = "12311313131"
        //this.setData({ itemTitle: itemTitle });
        



      }
    })
    ////请求一下

  },
  ///查询小道优惠-end




  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }



  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
