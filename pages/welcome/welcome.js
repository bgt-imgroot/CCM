Page({
    begin: function(){
        wx.redirectTo({
            url: '../posts/posts',
        })
    },
    addcard:function(){
        wx.redirectTo({
            url: '../addCard/addCard',
        })
    }
})