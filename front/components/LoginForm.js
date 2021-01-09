import { Form, Button, Input} from 'antd';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
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
    const { isLogLoading, isLogError } = useSelector((state) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //LogIn Error Message
    useEffect(() => {
        if(isLogError){
            alert(isLogError);
        }
    }, [isLogError]);

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, [email]);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, [password]);

    const onSubmitForm = useCallback(() => {
        const user = { email: email, password: password};
        //로그인 요청(리덕서, 사가(예정))
        dispatch({
            type: LOG_IN_REQUEST,
            data: user,
        });
    }, [email, password]);
    return (
        <FormWrapper onFinish={onSubmitForm}>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input placeholder="example@happy.com" name="user-email" value={email} type="email" onChange={onChangeEmail} required />
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={isLogLoading} >로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}
export default LoginForm;