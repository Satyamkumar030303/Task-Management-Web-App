const Task = require("../models/Task");
console.log(req.body);
console.log(req.user);

exports.createTask = async(req,res)=>{
  const task = await Task.create({
    title:req.body.title,
    completed:false,
    user:req.user.id
  });
  res.json(task);
};

exports.getTasks = async(req,res)=>{
  const tasks = await Task.find({user:req.user.id});
  res.json(tasks);
};

exports.updateTask = async(req,res)=>{
  const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

