// 把与文章内容相关的操作写在这里
var article = {
    // 获取文章列表
    // 获取焦点图
    getFocus: function (page, type, status) {
        return $.get(APILIST.article_get, { perpage: 5 })
    },


    /**
    *  根据文章id去获取
    * @param {Number} id 
    */
    getById: function (id) {
        return $.get(APILIST.article_get, { 'id': id })
    },


    // 获取排行
    getRank: function (type) {
        return $.get(APILIST.article_rank, { 'type': type })
    },


    // 获取最新资讯
    getLastest: function () {
        return $.get(APILIST.article_last)
    },


    // 获取当前类别的文章列表
    getList: function (type, page) {
        return $.get(APILIST.article_get, { "type": type, "page": page })
    },


}