class Comment {
  constructor(_userName, _content = "Lorem Lorem") {
    this.userName = _userName;
    this.content = _content;
    this.comments = [];
    this.createdAt = new Date();
  }
}

module.exports = Comment;
