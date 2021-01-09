import React, { useState, useCallback, useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';
import EditUser from '../components/EditUser';
import EditBucket from '../components/EditBucket';
import { useSelector, useDispatch} from 'react-redux';
import Router from 'next/router';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { LOAD_BUCKET_REQUEST } from '../reducers/bucket';
const CenterDiv = styled.div`
    width: 75%;
    margin : 0 auto;
`;

const CustomCard = styled(Card)`
    margin-top: 20px;
`;

const Profile = () => {
    const{ isLoggedIn, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isLoggedIn){
            Router.push('/login');
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return '내 정보 로딩중...';
    }

    const [value, setValue] = useState(false);
    //정보 수정 클릭
    const onClickUser = useCallback(() => {
        setValue(false);
    }, [value]);
    //버킷리스트 수정 클릭
    const onClickBucket = useCallback((e) => {
        dispatch({
            type: LOAD_BUCKET_REQUEST,
        });
        setValue(true);
    }, [value]);
    //로그아웃 클릭
    const onLogOut = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
        Router.push('/');
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Profile</title>
            </Head>
                { isLoggedIn && <AppLayout>
                    <CenterDiv>
                        <CustomCard
                            actions={[
                                <div onClick={onClickUser} key="twit">정보 수정<br/></div>,
                                <div onClick={onClickBucket} key="followings">버킷리스트 관리<br/></div>,
                            ]}>
                            <Card.Meta
                                avatar={<Avatar></Avatar>}
                                title={user.nickname} />
                            <Button onClick={onLogOut}>로그아웃</Button>
                        </CustomCard>
                        { value ? <EditBucket /> : <EditUser /> }
                    </CenterDiv>
                </AppLayout>}
        </>
        )
}

export default Profile;