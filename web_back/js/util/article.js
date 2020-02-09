// 把与文章内容相关的操作写在这里
var article = {
    // 获取文章列表
    get: function (page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },

    /**
     *  根据文章id去获取
     * @param {Number} id 
     */
    getById: function (id) {
        return $.get(APILIST.article_get, { 'id': id })
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


    // 保存文章编辑
    save: function (fd) {
        return $.ajax({
            url: APILIST.article_edit,
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
}