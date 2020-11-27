import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
// import { useTracker } from 'meteor/react-meteor-data';
// import { RegisterCollection } from '../db/RegisterCollection';
// 일단 회원가입을 하면 디비에 데이터는 들어갔다.
// 그치만 이제 로그인을 할 때 디비에 있는 해당 아이디와 비밀번호를 가지고와야함
// 그러면 find를 해야하는데 미티어 로그인을 찾아보니까 디비에서 find를 하는 경우가 없는데 usertreacker를 이용하여 디비에서 찾아와야 하는게 아닌가 싶습니당
// 그러고 난뒤에 그 디비속 데이터를 어떻게 변수에 담겨져있을 텐데 그 데이터가 담긴변수는 어떻게 처리를 해야하는건지 

export const LoginForm = () => {

    const [email, setEmail] = useState('');
    console.log("setEmail", setEmail);
    console.log("email", email);
    const [password, setPassword] = useState('');
    console.log("setPassword", setPassword);
    console.log("password", password);

    // const data = useTracker(() =>
    //     RegisterCollection.findOne({ name })
    // );
    // console.log("data", data);

    const submit = (e) => {
        e.preventDefault();

        Accounts.createUser(
            { email: email, password: password },

            error => {
                console.log(error);

            }
        );
        Meteor.loginWithPassword(email, password, function (error) {
            if (error) {
                console.log(error);
            } else {
                setLoggingIn(Meteor.loggingIn());
                window.location.replace("/");
            }
        })


    }





    //Change될때마다 setcategory에 데이터저장해서 그데이터를 category로 변환하네여
    return (
        <form onSubmit={submit} className="login-form">

            <label htmlFor="ID" > ID</label >

            <input type="text" placeholder="ID" name="email" required onChange={e => setEmail(e.target.value)} />

            <label htmlFor="password" > PassWord</label >
            <input type="password" placeholder="PassWord" name="password" required onChange={e => setPassword(e.target.value)} />

            <button type="submit">Log In</button>

        </form>

    )
}
