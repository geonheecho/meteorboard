import { Meteor } from 'meteor/meteor';
import { NoticeCollection } from '/imports/db/NoticeCollection';

Meteor.publish('notice', function publishNotice() {
    return NoticeCollection.find();
})