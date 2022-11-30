import mongoose, { Schema } from "mongoose";

export interface todoAttribute {
  _id: string;
  description: string;
  status: boolean;
}

const todoSchema = new Schema({
  description: {
    type: String,
    require: [true, "Please add description"],
  },
  status: {
    type: String,
    require: [true, "Please add description"],
  },
}, {
   timestamps:true 
});


const Todo = mongoose.model<todoAttribute>("Todo", todoSchema)

export default Todo