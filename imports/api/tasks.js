import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


export const Tasks = new Mongo.Collection('tasks');

const TasksSchema = new SimpleSchema({
    _id: Number,
  name: String,
  status: Boolean,
});

// Tasks.attachSchema(TaskSchema);