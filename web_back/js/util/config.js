// 配置文件
// 把项目中把所有用的接口地址方在这里，提炼公共接口


// 所有接口的基地址
var BASEURL = 'http://192.168.1.111:8000'

// 用来保所有的接口信息
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_loginfo: BASEURL + '/admin/getuser'
}