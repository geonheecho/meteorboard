import { Meteor } from 'meteor/meteor';
import React, { useState, useCallback, Router } from 'react';
import { RegisterCollection } from '/imports/db/RegisterCollection';


export const Register = () => {
    //state관리 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);


    const onName = (e) => {
        setName(e.target.value);
    };
    const onPassword = (e) => {
        setPassword(e.target.value);
    };
    const onPasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);

    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        Accounts.createUser({
            name: name,
            password: password
        });


        if (name.length < 5 || name.length > 10) {
            alert("이름이5글자이상 10글자 이내인지 확인해주세요.");

        }
        if (password.length == 0) {
            alert("비밀번호 입력하세요");
        } else if (password.length < 8 || password.length > 30) {
            alert("8글자이상 30글자 이하까지만 입력가능해요");

        } else if (password !== passwordCheck) {
            alert("비밀번호가 일치하지않음.");
        }
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!name) return;
        Meteor.call('register.insert', name, password, function (error) {
            if (!error) {
                console.log('글쓰기 성공');
                history.go(-1);
            } else {
                console.log(error);
                console.log('글쓰기 실패');
            }


            setName('');
            setPassword('');
            setPasswordCheck('');
        })

    }, [password, passwordCheck]);
    return (//state관리에서 value는 현재값으로 들어가고, 온체인지 set은 갱신되는 값으로 들어가고 입력되는 값은 useState('')초기값으로 들어간다.

        <form className="register-form" onSubmit={handleSubmit}>
            <br></br>
            <label htmlFor="name">ID</label>
            <input type="text" placeholder="ID" value={name} required onChange={onName} />
            <br></br>
            <label htmlFor="PassWord">PassWord</label>
            <input type="password" placeholder="PassWord" value={password} required onChange={onPassword} />
            <br></br>
            <label htmlFor="passwordCheck">PassWordCheck</label>
            <input type="password" placeholder="passwordCheck" value={passwordCheck} required onChange={onPasswordCheck} />
            <br></br>
            <button type="submit">회원가입</button>
        </form>

    )
};