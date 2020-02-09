// 配置文件

// 所有接口的基地址
var BASEURL = 'http://192.168.1.111:8000'

// 用来保所有的接口信息
var APILIST = {
    // 获取类别
    category_get: BASEURL + '/category',
    // 获取文章
    article_get: BASEURL + '/search',
    // 热门排行
    article_rank: BASEURL + '/rank',
    // 最新资讯
    article_last: BASEURL + '/lastest',
}