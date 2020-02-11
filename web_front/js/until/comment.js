let comment = {
    // 发布评论
    add: (name, content, article_id) => $.post(APILIST.comment_add, {
        'name': name,
        'content': content,
        'article_id': article_id,
    }),
    // 获取评论
    get: (id) => $.get(APILIST.comment_get, {
        'article_id': id,
    }),
}
