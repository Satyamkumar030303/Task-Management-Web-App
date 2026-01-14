const router = require("express").Router();
const auth=require("../middleware/auth");
const c=require("../controllers/taskController");

router.post("/",auth,c.createTask);
router.get("/",auth,c.getTasks);
router.put("/:id",auth,c.updateTask);
router.delete("/:id",auth,c.deleteTask);

module.exports=router;
