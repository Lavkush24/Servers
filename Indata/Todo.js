const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

