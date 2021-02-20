// 把与文章分类相关的操作写在这里
let category = {
    // 获取文章类别
    get: () => $.get(APILIST.category_get)
    ,
    // 添加文章类别
    add: (name, slug) => $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    ,
    // 删除文章类别
    del: id => $.post(APILIST.category_del, { 'id': id })
    ,
    // 编辑文章类别
    edit: (id, name, slug) => $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })

}