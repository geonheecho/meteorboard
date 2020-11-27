import { check } from 'meteor/check';
import { NoticeCollection } from '/imports/db/NoticeCollection';

Meteor.methods({
    'notice.insert'(title, category, dictionary, language, word) {
        check(title, String)
        console.log("title", title);
        check(category, String)
        console.log("category", category);
        check(dictionary, String)
        console.log("dictionary", dictionary);
        check(language, String)
        console.log("language", language);
        check(word, String)
        console.log("word", word);

        NoticeCollection.insert({

            title,
            category,
            dictionary,
            language,
            word,
            createdAt: new Date,
        })

    },

    'notice.remove'(noticeId) {
        console.log(noticeId);
        check(noticeId, String);
        NoticeCollection.remove(noticeId);
    },
    'notice.updateOne'(noticeId, title, category, dictionary, language, word) {
        console.log("noticeId", noticeId);
        check(noticeId, String);
        check(title, String);
        check(category, String);
        check(dictionary, String);
        check(language, String);
        check(word, String);

        NoticeCollection.update((noticeId), {
            $set: {
                title: title,
                category: category,
                dictionary: dictionary,
                language: language,
                word: word,
                createdAt: new Date(),

            }

        })

    },



})