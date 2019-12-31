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
    },
    cardList: function () {
        wx.redirectTo({
            url: '../cardList/cardList',
        })
    },
    // login: function(e){
    //     wx.login({
    //         success(res) {
    //             if (res.code) {
    //                 console.log("登陆时获取的code"+res.code)
    //                 //发起网络请求 获取用户openid
    //                 wx.request({
    //                     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx9873c81b23b3acb3&secret=ee764113b9be27bd00a864a21acd1dbe&js_code=res.code&grant_type=authorization_code',
    //                     success: function(re){
    //                         console.log(re)
    //                     }
    //                 })
    //             } else {
    //                 wx.showToast({
    //                     title: '登陆失败!',
    //                     duration: 1500
    //                 })
    //             }
    //         }
    //     })
    // }
    tofunctions:function(){
        wx.redirectTo({
            url: '../function/function',
        })
    }
})