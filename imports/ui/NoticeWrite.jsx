import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { NoticeCollection } from '/imports/db/NoticeCollection';



export const NoticeWrite = () => {
    //state 상태 관리해주는 state 에 넣자
    //각 데이터마다 함수만들고 전송버튼 함수만들기. 
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [dictionary, setDictionary] = useState('');
    const [language, setLanguage] = useState('');
    const [word, setWord] = useState('');

    const onTitle = (e) => {
        setTitle(e.target.value)
    }
    const onCategory = (e) => {
        setCategory(e.target.value);
    }
    const onDictionary = (e) => {
        setDictionary(e.target.value);

    }
    const onLanguage = (e) => {
        setLanguage(e.target.value);
    }
    const onWord = (e) => {
        setWord(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) return;

        Meteor.call('notice.insert', title, category, dictionary, language, word, function (error) {
            if (!error) {
                console.log('글쓰기 성공');
                history.go(-1);
            } else {
                console.log(error);
                console.log('글쓰기 실패');
            }

            setTitle('');
            setCategory('');
            setDictionary('');
            setLanguage('');
            setWord('');
        })
    };
    return (
        <form className="notice-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="제목" value={title} onChange={onTitle} />
            <br></br><br></br>
            <select value={category} onChange={onCategory} className="common-input mb-20 form-control">
                <option value="번역">번역</option>
                <option value="번역요청">번역요청</option>
                <option value="기타의뢰">기타의뢰</option>
            </select>
            {/* <input type="text" placeholder="제목" value={category} onChange={onCategory} /> */}
            <br></br><br></br>
            <input type="text" placeholder="dsa" value={dictionary} onChange={onDictionary} />
            <br></br><br></br>
            <input type="text" placeholder="asd" value={language} onChange={onLanguage} />
            <br></br><br></br>
            <input type="text" placeholder="asd" value={word} onChange={onWord} />
            <button type="submit" >사전 추가하기</button>
        </form>
    )
}