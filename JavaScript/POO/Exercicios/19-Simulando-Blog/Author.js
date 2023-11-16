const Post = require("./Post");

class Author {
  // tirar os _posts dos paramentr
  constructor(_authorName) {
    this.authorName = _authorName;
    this.posts = [];
  }

  // criar post por instancia
  add_post(_title, _body) {
    const newPost = new Post(_title, _body, this);
    this.posts.push(newPost);
    return newPost;
  }
}

module.exports = Author;
