import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Profiles = new Mongo.Collection('profiles');

const ProfileSchema = new SimpleSchema({
  _id: Number,
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  gender: String,
  address: String,
  city: String ,
  state: String,
  postalCode: Number,
  country: String,
  phone: String,
  email: String,
  status: String,
});

// Profiles.attachSchema(ProfileSchema);