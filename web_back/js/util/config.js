// 配置文件
// 把项目中把所有用的接口地址方在这里，提炼公共接口


// 所有接口的基地址
var BASEURL = 'http://192.168.1.111:8000'

// 用来保所有的接口信息
var APILIST = {
    // 登录
    user_login: BASEURL + '/admin/login',
    // 退出
    user_logout: BASEURL + '/admin/logout',
    // 获取信息
    user_loginfo: BASEURL + '/admin/getuser',
    // 获取
    category_get: BASEURL + '/admin/category_search',
    // 添加
    category_add: BASEURL + '/admin/category_add',
    // 删除
    category_del: BASEURL + '/admin/category_delete',
    // 编辑
    category_edit: BASEURL + '/admin/category_edit',


    // 获取文章
    article_get: BASEURL + '/admin/search',
    // 删除文章
    article_del: BASEURL + '/admin/article_delete'
}