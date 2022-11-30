import { Request, Response } from "express";
import Todo from "../model/todoModel";

/**======================================================  CREATE TODO   =================================================================**/

export const CreateTodo = async (req: Request, res: Response) => {
  try {
    const { description, status } = req.body;
    if (!req.body) {
      return res.status(400).json({
        Error: "Please fill the fields",
      });
    }
    const todo = await Todo.create({
      description,
      status,
    });
    return res.status(200).json({
      Message: "You have successfully created Todo",
      todo,
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal server error",
      Route: "/todo/create",
    });
  }
};

/**======================================================  GET TODO   =================================================================**/
export const GetTodo = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
      const getTodo = await Todo.find({id})
      return res.status(200).json({
        Message: "Here's your todo",
        getTodo,
      });
    } catch (err) {
        return res.status(500).json({
          Error: "Internal server error",
          Route: "/todo/get",
        });
      }
};

/**======================================================  UPDATE TODO   =================================================================**/
export const UpdateTodo = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const {description, status} = req.body
        // const todo = await Todo.find({id})
        // if(!todo) {
        //     return res.status(400).json({
        //         Error: "Todo does not exist",
        //       });
        // }
      const updateTodo = await Todo.findByIdAndUpdate(id, req.body, {
        new:true
      })
      return res.status(200).json({
        Message: "You have succesfully updated your todo",
        updateTodo,
      });
    } catch (err) {
        return res.status(500).json({
          Error: "Internal server error",
          Route: "/todo/update",
        });
      }
};

/**======================================================  DELETE TODO   =================================================================**/
export const DeleteTodo = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
      const deleteTodo = await Todo.findOneAndDelete({id})
      return res.status(200).json({
        Message: "You have succesfully updated your todo",
        deleteTodo,
      });
    } catch (err) {
        return res.status(500).json({
          Error: "Internal server error",
          Route: "/todo/delete",
        });
      }
};