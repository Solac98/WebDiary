import 'antd/dist/antd.css';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import Router from 'next/router';
import { useSelector } from 'react-redux'; 
import React, { useEffect} from 'react';

const CustomDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1508253640504-9096edc75163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80);
  background-size: cover;
`;

const Login = () => {
    //로그인 성공시, 백엔드 로그인 작성 시 
    //해당부분에서 처리할 에정, 삭제 예정
    const{ isLoggedIn } = useSelector((state) => state.user);
    useEffect(() => {
        if(isLoggedIn){
            Router.push('/');
        }
    }, [isLoggedIn]);
    //
    return (
        <CustomDiv>
            <LoginForm/>
        </CustomDiv>
    );
}
export default Login;