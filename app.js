const Express = require("express");
const cors = require("cors");
const app = Express();
const Todo = require("./Indata/Todo.js");
const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("database is connected");
    }).catch((e) => {
        console.log(e)
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoApp');
};

app.use(Express.json());
app.use(cors());

//sum route 
app.get("/sum", (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

// interse route 
app.get("/interest", (req,res) => {
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);
    const i = (p*r*t) / 100;
    const total = p + i;
    res.send(`{total: ${total.toString()}, interest: ${i.toString()}}`);
});


//all todos 
app.get("/todos", async(req,res) => {
    const todos = await Todo.find({});
    res.json(todos);
});

//all random todos
app.get("/randomtodos",async (req,res) =>{
    //a n is the random number of outputs to be show in the todos
    let n = Math.floor(Math.random()*10) + 1;

    //let m , l be another random number from 1 to 90 
    const m = Math.floor(Math.random()*90) + 1;
    let todos = [];
    for(let i=m; n>0; i++) {
        const todo = await Todo.find({_id: i});
        todos = [...todos, todo[0]];
        n--;
    };
    res.json(todos);
});


// route for generate random todos 
app.get("/todo/:id",async (req,res) => {
    const { id } = req.params;
    // const todo = await Todo.find({id: _id});
    // res.json(todo);
    const todo = await Todo.findById(id);
    res.json(todo);
});


app.listen(8080, () => {
    console.log("Server is running.....");
});
