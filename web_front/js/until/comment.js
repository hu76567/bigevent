let comment = {
    add: (name, content, article_id) => $.post(APILIST.comment_add, { 'name': name, 'content': content, 'article_id': article_id })
}
