// 把与文章分类相关的操作写在这里
var article = {
    // 获取文章列表
    get: function (page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    }
}