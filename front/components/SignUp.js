import { Form, Button, Input} from 'antd';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import Router from 'next/router';
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
position:absolute;
top:50%;
left:50%;
width: 300px;
margin: -100px 0 0 -150px;
`;

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, [email]);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, [password]);
    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, [nickname]);
    const onChangeBirth = useCallback((e) => {
        setBirth(e.target.value);
    }, [birth]);
    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, [phone]);

    //로그인 액션 보내고 성공하면 로그인 주소로 Router.replace ㄱㄱ
    const onSubmitForm = useCallback(() => {
        console.log(email, password, nickname, birth, phone);
        Router.replace('/login');
    }, [email, password, nickname, birth, phone]);
    return (
        <FormWrapper onFinish={onSubmitForm}>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" placeholder="exmple@mju.ac.kr" value={email} type="email" onChange={onChangeEmail} required />
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
                <label htmlFor="user-password">생년월일</label>
                <br />
                <Input name="user-birth" placeholder="980427" maxLength={6} value={birth} onChange={onChangeBirth} required />
                <label htmlFor="user-phone">연락처</label>
                <br />
                <Input name="user-phone" type="tel" placeholder="010-1234-5678" 
                maxLength={13} value={phone} onChange={onChangePhone} required />
            <ButtonWrapper>
                <Button htmlType="submit" /*loading={logInLoading}*/>회원가입</Button>
            </ButtonWrapper>
        </FormWrapper>
    );
}
export default LoginForm;