const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://PRATHEEK:789456123@cluster0.lqn22su.mongodb.net/test?retryWrites=true&w=majority");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}