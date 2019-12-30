var util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        paydayFixed: false,
        templimitDuedate: '',


    },
    paydayFixedChange: function(e) {
        this.setData({
            paydayFixed: e.detail.value
        })

    },
    // save add card
    forsubmit: function(e) {
        wx.cloud.init()
        const db = wx.cloud.database()
        if (e.detail.value.id_) {
            db.collection('tb_card').doc(e.detail.value.id_).update({
                // 存在则更新
                data: {
                    name: e.detail.value.name,
                    limit: e.detail.value.limit,
                    billday: e.detail.value.billday,
                    paydayFixed: e.detail.value.paydayFixed,
                    payday: e.detail.value.payday,
                    paydaydelay: e.detail.value.paydaydelay,
                    number: e.detail.value.number,
                    remark: e.detail.value.remark,
                    templimit: e.detail.value.templimit = undefined ? 0 : e.detail.value.templimit,
                    templimitDuedate: e.detail.value.templimitDuedate
                },
                success: function(res) {
                    console.log("更新完成:"+res.data)
                    wx.showToast({
                        title: '信用卡修改完成!',
                        icon: 'none',
                        duration: 2000
                    })
                    wx.redirectTo({
                        url: '../cardList/cardList',
                    })
                }
            })
        } else {
            //不存在则新增
            db.collection("tb_card").add({
                data: {
                    name: e.detail.value.name,
                    limit: e.detail.value.limit,
                    billday: e.detail.value.billday,
                    paydayFixed: e.detail.value.paydayFixed,
                    payday: e.detail.value.payday,
                    paydaydelay: e.detail.value.paydaydelay,
                    number: e.detail.value.number,
                    remark: e.detail.value.remark,
                    templimit: e.detail.value.templimit = undefined ? 0 : e.detail.value.templimit,
                    templimitDuedate: e.detail.value.templimitDuedate
                },
                success: function(res) {
                    // console.log(res)
                    wx.showToast({
                        title: '信用卡新增完成!',
                        icon: 'none',
                        duration: 2000
                    })
                    wx.redirectTo({
                        url: '../cardList/cardList',
                    })
                }
            })
        }

    },
    templimitdone: function(e) {
        this.setData({
            templimit: e.detail.value
        })
    },
    bindDateChange: function(e) {
        this.setData({
            templimitDuedate: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var this_ = this
        const db = wx.cloud.database()
        var id = options.id
        if (id) {
            db.collection('tb_card').doc(id).get({
                success: function(res) {
                    var card = res.data
                    console.log("进入新增/编辑页面数据:" + card.paydaydelay)
                    this_.setData({
                        id_:card.id_,
                        name: card.name,
                        limit: card.limit,
                        billday: card.billday,
                        paydayFixed: card.paydayFixed,
                        payday: card.payday,
                        paydaydelay: card.paydaydelay,
                        number: card.number,
                        remark: card.remark,
                        templimit: card.templimit,
                        templimitDuedate: card.templimitDuedate ? card.templimitDuedate : util.getToday()
                    })
                }
            })
        } else {
            this_.setData({
                templimitDuedate: util.getToday()
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})