// 把与文章分类相关的操作写在这里
var article = {
    // 获取文章列表
    get: function (page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    // 发布文章
    add: function (fd) {
        return $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd,
            processData: false,  //不允许处理数据
            contentType: false,  //不要设置请求头
        })
    },
    // 删除文章
    del: function (id) {
        return $.get(APILIST.article_del, { 'id': id })
    },
    // // 编辑文章类别
    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    // }
}