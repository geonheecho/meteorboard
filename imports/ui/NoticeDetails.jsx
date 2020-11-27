import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { NoticeCollection } from '../db/NoticeCollection';
import { Link } from "react-router-dom";

// 상세페이지를 시작하기전에 세팅순서
// 1. 리스트에서 uri뒤에 _id를 넘겼다.그러면 이제 이 아이디를 받아야하니 match를 써서 param으로 받고 콘솔을 찍어본다.들어오는가 ?
//     2. 두번째 usetracker 을 사용하고 컬렉션에서 _id를 findOne를 한다. (찾자)
// 3. 그리고 2번에서 컬렉션에 들어있는 아이디를 찾은걸 data로 상수에 담았다.이제 이 데이터들을 띄우기 위해서는 컬렉션에 저장되어있는 데이터들을 찾아오자.
// 4.그리고 데이터들을 보여줄 view 만들면 끄읕! 5번은 수정은 4번까지 하고!!!
// 중요한건 이 내용을 토대로 그 전에 했던 코드를 보지않고 최대한 혼자 머릿속으로 짜보자!!!!!!!
// 실수한점 : page route관리해주는 파일에서 경로를 제대로 안써줘서 오류
// data를 를 찾아야 하는데 data에 컬럼들이 들어갔었음 . 
export const NoticeDetails = ({ match, history }) => {
    const { _id } = match.params;
    console.log("_id", _id);

    const data = useTracker(() =>
        NoticeCollection.findOne({ _id })
    );

    const title = data ? data.title : "";
    const category = data ? data.category : "";
    const language = data ? data.language : "";
    const dictionary = data ? data.dictionary : "";
    const word = data ? data.word : "";

    return (
        <div>
            <h1>sadsad</h1>
            <h2 align="center">게시글 상세정보</h2>
            <div className="post-view-wrapper">

                <div className="post-view-row">
                    <label>제목 :</label>
                    <label>{title}</label>
                </div>
                <div className="post-view-row">
                    <label>카테고리 :</label>
                    <label>{category}</label>
                </div>
                <div className="post-view-row">
                    <label>언어</label>
                    <label>{language}</label>
                </div>
                <div className="post-view-row">
                    <label>사전이름 :</label>
                    <label>{dictionary}</label>
                </div>
                <div className="post-view-row">
                    <label>?? :</label>
                    <label>{word}</label>
                </div>
                <div>
                    <button className="post-view-go-list-btn" align="center" onClick={() => history.goBack()}>돌아가기</button>
                    <Link to={`/NoticeUpdate/${_id}`}>
                        <button className="post-view-go-list-btn" align="center">수정</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}