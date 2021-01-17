import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { Row, Col, Carousel, Button, Image, List} from 'antd';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';
import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import { LOAD_BUCKET_REQUEST } from '../reducers/bucket';

const CustomItem = styled(List.Item)`
    margin: 0;
    justify-content: center;
    padding: 0;
`;

const IMG1 = "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";
const IMG2 = "https://images.unsplash.com/photo-1578909196400-59f8f8156a05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80";
const Home = () => {
    const{ isLoggedIn, user } = useSelector((state) => state.user);
    const { bucket } = useSelector((state) => state.bucket);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoggedIn){
            dispatch({
                type: LOAD_BUCKET_REQUEST,
            });
        }
    }, [isLoggedIn]);

    //LogOut Request
    const onLogOut = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        }, []);
    });

    //IsLoggedIn Render
    return(
        <>
            <AppLayout>
                    <Row>
                        <Col xs={24} md={12}>
                            <Carousel style={{width: '55%', margin: '0 auto', marginTop: '5%'}} autoplay>
                                <div>
                                    <Image style={{width: '100%'}} src={IMG1} />
                                </div>
                                <div >
                                    <Image style={{width: '100%'}} src={IMG2} />
                                </div>
                            </Carousel>
                        </Col>
                        <Col xs={24} md={12}>
                            {isLoggedIn ? <div style={{width: '60%', margin: '0 auto', marginTop: '5%'}}>
                                <h2 style={{textAlign: 'center'}}>나의 버킷리스트</h2>
                                <List
                                    style={{height: '400px', overflow: 'scroll'}}
                                    size="small"
                                    bordered
                                    dataSource={bucket}
                                    renderItem={item => <CustomItem>{item.content}</CustomItem>}
                                />
                                <div style={{ width: '100%', margin: '0 auto', marginTop: '5%'}}>
                                <Link href="/"><Button shape="round" style={{float: 'right'}} onClick={onLogOut}>로그아웃</Button></Link>
                            </div>
                            </div> :  <div style={{ width: '45%', margin: '0 auto', marginTop: '30%'}}>
                                <Link href="/login"><Button shape="round">로그인</Button></Link>
                                <Link href="/signup"><Button shape="round" style={{float: 'right'}}>회원가입</Button></Link>
                            </div>}
                        </Col>
                    </Row>
                </AppLayout>
        </>
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

export default Home;