// pages/cardList/cardList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardlist:[]
    },
    getCardlist: function(){
        var this_=this
        wx.cloud.init()
        const db = wx.cloud.database()
        db.collection('tb_card').get({
            success: function (res) {
                // res.data 包含该记录的数据
                console.log(res.data)
                this_.setData({
                    cardlist: res.data
                })
            }
        })
    },
    toEdit:function(event){
        var id = event.currentTarget.dataset.id;
        const db = wx.cloud.database()
        wx.navigateTo({
            url: '../addCard/addCard?id='+id,
        })
        // db.collection('tb_card').doc(id).get({
        //     success: function (res) {
        //         // res.data 包含该记录的数据
        //         // console.log(res.data)
        //         wx.navigateTo({
        //             url: '../addCard/addCard?id='id,
        //         })
        //     }
        // })
        // db.collection('t_card').where({
        //     _openid: 'user-open-id',
        //     _id: id
        // })
        //     .get({
        //         success: function (res) {
        //             // res.data 是包含以上定义的两条记录的数组
        //             console.log(res.data)
        //         }
        //     })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getCardlist()
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

    }
})