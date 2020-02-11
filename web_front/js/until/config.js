// 配置文件

// 所有接口的基地址
const BASEURL = 'http://192.168.1.111:8000'

// 用来保所有的接口信息
const APILIST = {
    // 获取类别
    category_get: BASEURL + '/category',
    // 获取文章
    article_get: BASEURL + '/search',
    // 热门排行
    article_rank: BASEURL + '/rank',
    // 最新资讯
    article_last: BASEURL + '/lastest',
    // 获取文章详情
    article_detail: BASEURL + '/article',
    // 评论
    comment_add: BASEURL + '/post_comment',
    // 获取评论
    comment_get: BASEURL + '/get_comments',
}