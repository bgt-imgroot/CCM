// pages/posts/posts.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var postscontents=[{
            postdate:'Sep 27 2019',
            posttitle:'是非得失領導機構',
            postcontent:'在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到：.js、app.json、.wxml、*.wxss（其中 wxml 和 wxss 文件仅针对在 app.json 中配置了的页面）。除此之外，只有后缀名在白名单内的文件可以被上传，不在白名单列表内文件在开发工具能被访问到，但无法被上传。',
            likenum:'23',
            viewnum:'24',
            postauthor:'/images/avatar/2.png',
            postimage:'/images/post/crab.png'
        }, {
                postdate: 'Sep 27 2019',
                posttitle: '地方的份额单方',
                postcontent: '在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到：.js、app.json、.wxml、*.wxss（其中 wxml 和 wxss 文件仅针对在 少的地咯咯咯大哥哥,广发华福电话',
                likenum: '23',
                viewnum: '24',
                postauthor: '/images/avatar/1.png',
                postimage: '/images/post/cat.png'
            }]
        this.setData({post_key:postscontents});

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
        wx.showToast({
            title: '你碰到了我的底线!',
            icon: 'none',
            duration: 1000
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        // wx.showModal({
        //     title: '啊?',
        //     content: '你真的想分享?',
        //     success(res) {
        //         if (res.confirm) {
        //             console.log('用户点击确定')
        //             wx.showToast({
        //                 title: '真棒,去分享吧!',
        //                 icon: 'none',
        //                 duration: 1000
        //             })
        //         } else if (res.cancel) {
        //             console.log('用户点击取消')
        //             wx.showToast({
        //                 title: '都点到这儿了还好意思返回?',
        //                 icon: 'none',
        //                 duration: 1000
        //             })
        //         }
        //     }
        // })
    },
    
})