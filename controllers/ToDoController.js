

//i have not included try and catch but it is always recommended to include try and catch blocks in the code.
const ToDoModel = require('../models/ToDoModel');

const getToDo = async (req,res) =>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
    
}

const saveToDo = async (req, res) =>{
   
   let { text } = req.body 
   
   const toDoItem = new ToDoModel({text})
    toDoItem.save()

    res.send(toDoItem)
    console.log("Saved Successfully")

    
}


const updateTodo = async (req, res) =>{
    const { _id, text } = req.body
    await ToDoModel.findByIdAndUpdate(_id, {text});
    console.log("Updated Successfully")
    let added= await ToDoModel.findById(_id)
    res.send(added)
}


const deleteTodo = async (req, res) =>{

const {_id} = req.body
await ToDoModel.findByIdAndDelete(_id);
console.log("Deleted Successfully");
res.send("deleted successfully");


}



module.exports ={
    getToDo,
    saveToDo,
    updateTodo,
    deleteTodo
}