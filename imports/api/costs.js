import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simple-schema';

export const Costs = new Mongo.Collection('costs');

const CostSchema = new SimpleSchema({
	_id: Number,
	name: String,
	cost: Number,
});

Costs.attachSchema(CostSchema);