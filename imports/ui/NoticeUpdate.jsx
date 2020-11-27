import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { NoticeCollection } from '../db/NoticeCollection';

// 1.자 이제 상세페이지에서 >>> 수정페이지로 넘어와야 하니까 uri로 넘긴 _id값을 또 받아야한다. 
// 2.디비 안에 있는 데이터들을 꺼내오기위해서 해당 게시글의 _id 값을 찾아야한다.useTracker을 이용을 해서 컬렉션을 findOne 찾아보자.
// 3.내가 적었던 게시글들을 보여주기 위해서 컬렉션에 들어있는 데이터들을 보여주기위해 컬렉션을 상수에 담았던 data를 이용해서 꺼내보자요
// 4.그리고 useState를 이용을 하고!
// 5.useEffect를이용해보자
export const NoticeUpdate = ({ match }) => {
    const { _id } = match.params;
    console.log("_id", _id);

    const data = useTracker(() =>

        NoticeCollection.findOne({ _id })
    );
    console.log("data", data);
    const title1 = data ? data.title : ""
    console.log("title1", title1);
    const category1 = data ? data.category : ""
    console.log("category1", category1);
    const language1 = data ? data.language : ""
    console.log("language1", language1);
    const dictionary1 = data ? data.dictionary : ""
    console.log("dictionary1", dictionary1);
    const word1 = data ? data.word : ""
    console.log("word1", word1);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');
    const [dictionary, setDictionary] = useState('');
    const [word, setWord] = useState('');

    useEffect(() => {
        console.log("랜다링 완료!!")
        setTitle(title1);
        setCategory(category1);
        setLanguage(language1);
        setDictionary(dictionary1);
        setWord(word1);

    }, [title1, category1, language1, dictionary1, word1]);

    const updateSubmit = e => {
        e.preventDefault();
        Meteor.call('notice.updateOne', _id, title, category, dictionary, language, word, function (error) {
            console.log("_id", _id);

            if (!error) {
                console.log('업데이트 성공');
                history.go(-1);
            } else {
                console.log(error);
                console.log('업데이트 실패');
            }
        })

    };


    return (

        <form className="board-form" onSubmit={updateSubmit}>

            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <br></br><br></br>
            <select value={category} onChange={e => setCategory(e.target.value)} className="common-input mb-20 form-control">

                <option value="번역요청">번역요청</option>
                <option value="기타의뢰">기타의뢰</option>
            </select>
            {/* <input type="text" value={category}
                onChange={e => setCategory(e.target.value)} /> */}
            <br></br><br></br>
            <input type="text" value={dictionary}
                onChange={e => setDictionary(e.target.value)} />
            <br></br><br></br>
            <input type="text" value={language}
                onChange={e => setLanguage(e.target.value)} />
            <br></br><br></br>
            <input type="text" value={word}
                onChange={e => setWord(e.target.value)} />

            <br></br><br></br>
            <button type="submit">사전 추가하기</button>
        </form >
    );





}

