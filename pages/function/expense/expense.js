// pages/function/expense/expense.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            { name: 'clo', value: '衣',checked: 'true'},
            { name: 'food', value: '食' },
            { name: 'live', value: '住' },
            { name: 'travel', value: '行' },
            { name: 'fun', value: '娱' },
            { name: 'use', value: '用' },
            { name: 'lose', value: '丢' },
            { name: 'steal', value: '偷' },
            { name: 'donate', value: '捐' },
            { name: 'lie', value: '骗' },
        ],
        expenseWayitems: [
            { name: 'net', value: '网购',checked: 'true'},
            { name: 'shop', value: '商场' },
            { name: 'street', value: '街摊' },
            { name: 'else', value: '其他' },

        ],
        expenseType:'clo',
        expenseWay:'net',
        expenseNumber:0,
        remark:'',
    },
    submit:function(e){
        console.log('form发生了submit事件，携带数据为：', e.detail.value.remark)
    },
    reduce:function(e){
        var nownumber=this.data.expenseNumber-1;
        this.setData({ expenseNumber:nownumber})
    },
    add:function(e){
        var nownumber = this.data.expenseNumber + 1;
        this.setData({ expenseNumber: nownumber })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
        this.setData({
            expenseType: e.detail.value
        })
    },
    wayradioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
        this.setData({
            expenseWay: e.detail.value
        })
    },
    onChangeTheNumber:function(e){
        console.log("花多少钱:"+e.detail.value)
        this.setData({
            expenseNumber:e.detail.value
        })
    },
    remarkConfirm:function(e){
        console.log("备注:"+e.detail.value)
        this.setData({
            remark:e.detail.value
        })
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