const Comment = require("./Comment");

class Post {
  constructor(_title, _body, _author) {
    this.title = _title;
    this.body = _body;
    this.author = _author;
    this.comments = [];
    this.createdAt = new Date();
  }

  add_comment(_userName, _content = "Lorem Lorem Lorem") {
    this.comments.push(new Comment(_userName, _content));
  }
}

module.exports = Post;
