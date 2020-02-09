// 把与文章内容相关的操作写在这里
var article = {
    // 获取文章列表
    // 获取焦点图
    getFocus: function (page, type, status) {
        return $.get(APILIST.article_get, { perpage: 5 })
    },
    getRank: function (type) {
        return $.get(APILIST.rank, { 'type': type })
    },
}