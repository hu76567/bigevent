// 把与文章内容相关的操作写在这里
let article = {
    // 获取文章列表
    // 获取焦点图
    getFocus: (page, type, status) => $.get(APILIST.article_get, { perpage: 5 })
    ,


    /**
    *  根据文章id去获取
    * @param {Number} id 
    */
    getById: id => $.get(APILIST.article_get, { 'id': id })
    ,

    // 获取排行
    getRank: type => $.get(APILIST.article_rank, { 'type': type })
    ,


    // 获取最新资讯
    getLastest: () => $.get(APILIST.article_last)
    ,


    // 获取当前类别的文章列表
    getList: (type, page) => $.get(APILIST.article_get, { "type": type, "page": page })
    ,
    //  获取详情
    getDetail: id => $.get(APILIST.article_detail, { 'id': id })
    ,
}