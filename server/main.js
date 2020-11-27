import { Meteor } from 'meteor/meteor';
import { NoticeCollection } from '/imports/db/NoticeCollection';

import '/imports/api/RegisterMethods';
import '/imports/api/RegisterPublication';
import '/imports/api/NoticeMethods';
import '/imports/api/NoticePublication';


const initializeBoard = () => {

  for (let data of dummyDataSet) {
    NoticeCollection.insert(data);
  }

}



Meteor.startup(() => {
  NoticeCollection.find()
    ? null
    : initializeBoard(user)

});