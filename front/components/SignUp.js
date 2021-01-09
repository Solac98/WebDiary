import { Form, Button, Input} from 'antd';
import styled from 'styled-components';
import { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST, SIGN_UP_RESET } from '../reducers/user';
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

    const dispatch = useDispatch();
    const { isSignUpLoading, isSignUpError, isSignUpDone } = useSelector((state) => state.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    
      useEffect(() => {
        if (isSignUpError) {
          alert(isSignUpError);
        }
      }, [isSignUpError]);

      useEffect(() => {
        if (isSignUpDone) {
          Router.push('/');
          dispatch({
              type: SIGN_UP_RESET,
          });
        }
      }, [isSignUpDone]);

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
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        });
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
                <Input name="user-nickname" value={nickname} onChange={onChangeNickname}  />
                <label htmlFor="user-password">생년월일</label>
                <br />
                <Input name="user-birth" placeholder="980427" maxLength={6} value={birth} onChange={onChangeBirth}  />
                <label htmlFor="user-phone">연락처</label>
                <br />
                <Input name="user-phone" type="tel" placeholder="010-1234-5678" 
                maxLength={13} value={phone} onChange={onChangePhone}  />
            <ButtonWrapper>
                <Button htmlType="submit" loading={isSignUpLoading}>회원가입</Button>
            </ButtonWrapper>
        </FormWrapper>
    );
}
export default LoginForm;