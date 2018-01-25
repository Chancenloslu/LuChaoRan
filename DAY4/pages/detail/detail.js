// pages/detail/detail.js
Page({
  data: {
    iid:'',
    title:'',
    content:''
  },

  onLoad: function (options) {
    var that=this
    that.setData({
      iid: options.iid
    })
    wx.request({
      url:'https://bkd.botbrain.ai/view/v1/RVCQS9UR56/article/'+that.data.iid+'.json',
      data:{},
      success:function(e){
        //console.log(e)
        that.setData({
          //content: e.data.article.content,
          content: JSON.parse(e.data.article.content),
          title: e.data.article.title
        })
      }
    })
  },

  
})