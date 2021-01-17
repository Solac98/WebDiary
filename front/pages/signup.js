import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import SignUp from '../components/SignUp';
import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const CustomDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1508253640504-9096edc75163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80);
  background-size: cover;
`;

const SignUpPage = () => {

    const{ isLoggedIn } = useSelector((state) => state.user);
    useEffect(() => {
        if(isLoggedIn){
            Router.push('/');
        }
    }, [isLoggedIn]);

    if (isLoggedIn) {
        return '로그인 확인중...';
    }

    return (
        <CustomDiv>
            <SignUp />
        </CustomDiv>
    );
}

//SSR 적용 - getServerSidProps 사용
export const getServerSideProps = wrapper.getServerSideProps( async (context) => {
    //Brower 에서 요청이 아닌 Front -> Back이므로 쿠키를 전달해줘야 한다.
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = cookie; //요청 헤더에 쿠키 넣기.
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default SignUpPage;