// 模块化开发
// 把所有与用户相关的功能放在一个对象中



// $.post(),$.get(),$.ajax()得到的都是一个对象，对象上有then方法
// then的功能是获取返回数据，res就是接口返回的数据
var user = {
    // 语义化管理员登录
    login: function (name, password) {
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })
    },

    // 语义化管理员退出
    logOut: function () {
        return $.post(APILIST.user_logout)
    },

    // 语义化获取管理员信息
    getInfo: function () {
        return $.get(APILIST.user_loginfo)
    }
}
