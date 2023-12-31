const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rishitsaharan:Mehnakhera%401@cluster0.hzwsqmp.mongodb.net/ToDoList");

const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    tasks : [{
        id : Number,
        task : String,
        isDone : Boolean,
        isEditing : Boolean
    }]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
// const Task = mongoose.model('Task', TaskSchema);

module.exports = {
    Admin,
    User
}