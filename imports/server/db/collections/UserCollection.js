import {Mongo} from 'meteor/mongo';

const User = new Mongo.Collection('User');
export default User;