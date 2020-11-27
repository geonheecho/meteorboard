import React from 'react';
import { Register } from './Register';
import { LoginForm } from './LoginForm';
import { NoticeList } from './NoticeList';
import { NoticeWrite } from './NoticeWrite';
import { NoticeDetails } from './NoticeDetails';
import { NoticeUpdate } from './NoticeUpdate';
import { Link, Route, BrowserRouter } from "react-router-dom";
export const Pages = () => {
    return (

        <BrowserRouter>

            <div>
                <Link to="/Register">회원가입</Link>
                 &nbsp;&nbsp;&nbsp;

                <Link to="/LoginForm">로그인</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/NoticeList">게시판</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/NoticeWrite">글 쓰기</Link>

            </div>
            <div>
                <Route exact path="/Register" component={Register}></Route>
                <Route exact path="/LoginForm" component={LoginForm}></Route>
                <Route exact path="/NoticeList" component={NoticeList}></Route>
                <Route exact path="/NoticeWrite" component={NoticeWrite}></Route>
                <Route exact path="/NoticeDetails/:_id" component={NoticeDetails}></Route>
                <Route exact path="/NoticeUpdate/:_id" component={NoticeUpdate}></Route>
            </div>
        </BrowserRouter >
    )
}