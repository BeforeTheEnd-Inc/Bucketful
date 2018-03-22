import SimpleSchema from 'simple-schema';

import CurrentBucket from './collections/CurrentBucketCollection';
import ReserveBucket from './collections/ReserveBucketCollection';
import CompletedBuckets from './collections/CompletedBucketCollection';

CurrentBucket.schema = new SimpleSchema({
    eventId: {type: String, optional: false},
    eventName: {type: String},
    eventDate: {type: Date},
    eventDescription: {type: String},
    eventNotes: {type: String}
});

ReserveBucket.schema = new SimpleSchema({
    eventId: {type: String},
    eventName: {type: String},
    eventDate: {type: Date},
    eventDescription: {type: String}
});

CompletedBuckets.schema = new SimpleSchema({
    eventId: {type: String},
    eventName: {type: String},
    completedEventDate: {type: Date},
    eventDescription: {type: String}
});