// 把与文章分类相关的操作写在这里
let category = {
    // 获取文章类别
    get: () => $.get(APILIST.category_get)
}