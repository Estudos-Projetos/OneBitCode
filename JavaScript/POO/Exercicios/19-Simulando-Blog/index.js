const Author = require("./Author");

const janielAuthor = new Author("Janiel Maia");

const post = janielAuthor.add_post(
  "Esferas do Dragão",
  "Lorem Lorem Lorem Lorem..."
);

post.add_comment("Lucas", "Muito Bom!");
post.add_comment("Pedro", "Incrível!");

console.log(janielAuthor);
