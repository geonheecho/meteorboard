import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { RegisterCollection } from '/imports/db/RegisterCollection';

Meteor.methods({
    'register.insert'(name, password) {

        check(name, String);
        check(password, String);

        RegisterCollection.insert({

            name,
            password,
            createAt: new Date,
        })
    }
})