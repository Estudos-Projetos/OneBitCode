const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/todo-list")
.then( () => console.log("Conectado ao Mongodb"))
.catch((err)=> console.error(err))