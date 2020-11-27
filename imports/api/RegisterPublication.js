import { Meteor } from 'meteor/meteor';
import { RegisterCollection } from '/imports/db/RegisterCollection';

Meteor.publish('register', function publishRegister() {
    return RegisterCollection.find();
})