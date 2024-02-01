const mongoose = require('mongoose');
//Mention mongo url in an ENV file, not like this.
//Do not commit it to github
mongoose.connect("mongodb+srv://rathoretaruncodes:FEVPR%401045n@cluster0.fdbe4fs.mongodb.net/");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
