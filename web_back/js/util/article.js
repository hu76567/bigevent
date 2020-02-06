// 把与文章分类相关的操作写在这里
var article = {
    // 获取文章列表
    get: function (page) {
        return $.get(APILIST.article_get, { 'page': page })
    },
    // // 添加文章类别
    // add: function (name, slug) {
    //     return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    // },
    // // 删除文章类别
    // del: function (id) {
    //     return $.post(APILIST.category_del, { 'id': id })
    // },
    // // 编辑文章类别
    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    // }
}