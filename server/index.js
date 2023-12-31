const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
const cors = require('cors');
const app = express();
const port = 3000; 

const secretKey = "abcd";
app.use(cors());
app.use(bodyParser.json());

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    User.create({
      username : username,
      password : password
    }).then(() => {
      res.status(200).send("User created");
    });
  });

app.post("/signin", async(req, res) => {
  const{ username, password } = req.body;
  const requiredUser = await User.find({
    username : username,
    password : password
  });
  if(requiredUser){
    const token = jwt.sign({username}, secretKey);
    res.send(token);
  }
  else{
    res.status(403).send();
  }
});

app.post("/newTask", async (req, res) => {
  const {jwtToken, task, isDone, isEditing} = req.body;
  const decodedValue = jwt.verify(jwtToken, secretKey);
  const username = decodedValue.username;
  
  // console.log(username);
  const requiredUser = await User.updateOne({
    username : username
  }, {
    "$push" : {
      tasks : {
        task : task,
        isDone : isDone,
        isEditing : isEditing
      }
    }
  });
  res.send();
});

app.get("/tasks", async (req, res) => {
  const jwtToken = req.query.token;
  const decodedValue = jwt.verify(jwtToken, secretKey);
  const username = decodedValue.username;

  const requiredUser = await User.findOne({
    username : username
  });
  if(requiredUser){
    res.json(requiredUser.tasks);
  }
  else{
    res.status(404);
  }
  // console.log(requiredUser.tasks);
  // res.send(requiredUser.tasks);
});

app.post("/delete", async (req, res) => {
  const { jwtToken, deleteid } = req.body;
  const decodedValue = jwt.verify(jwtToken, secretKey);
  const username = decodedValue.username;

  const requiredUser = await User.updateOne({
    username : username
  }, {
    "$pull" : {
      tasks : {
        _id : deleteid
      }
    }
  });
  res.send();
});

app.post("/switchEdit", async (req, res) => {
  const { jwtToken, id } = req.body;
  const decodedValue = jwt.verify(jwtToken, secretKey);
  const username = decodedValue.username;

  const requiredUser = await User.updateOne(
    {
      username: username,
      tasks: {
        $elemMatch: { _id: id }
      }
    },
    {
      $set: {
        "tasks.$.isEditing": true
      }
    }
  );
  // console.log(requiredUser);
  res.send();
});

app.post("/edit", async(req, res) => {
  const { jwtToken, id, task } = req.body;
  const decodedValue = jwt.verify(jwtToken, secretKey);
  const username = decodedValue.username;

  const requiredUser = await User.updateOne(
    {
      username: username,
      tasks: {
        $elemMatch: { _id: id }
      }
    },
    {
      $set: {
        "tasks.$.task" : task,
        "tasks.$.isEditing": false
      }
    }
  );
  res.send();
});
app.listen(port);