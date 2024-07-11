const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
// const cors = require("cors");
const app = express();

app.use(express.json());
//app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    console.log("This is the log predecessor")
    console.log(req.body)
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload.success)
    if (!parsedPayload.success) {
        // console.error(parsedPayload.error);
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo created",
    });
});
app.listen(3000);