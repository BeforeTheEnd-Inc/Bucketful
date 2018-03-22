import {Mongo} from 'meteor/mongo';

const CurrentBucket = new Mongo.Collection('CurrentBucket');
export default CurrentBucket;