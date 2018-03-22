import {Mongo} from 'meteor/mongo';

const ReserveBucket = new Mongo.Collection('ReserveBucket');
export default ReserveBucket;