import express,{Request, Response} from "express"
import { CreateTodo, DeleteTodo, GetTodo, UpdateTodo } from "../controller/todoController"

const router = express.Router()

router.post('/create', CreateTodo)
router.get('/get/:id', GetTodo)
router.patch('/update/:id', UpdateTodo)
router.delete('/delete/:id', DeleteTodo)



export default router