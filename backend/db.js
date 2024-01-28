const mongoose = require('mongoose');
//Mention mongo url in an ENV file, not like this.
//Do not commit it to github
mongoose.connect(process.env.DATABASE_URL);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}