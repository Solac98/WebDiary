import React, { useEffect } from 'react';
import Router from 'next/router'
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
const Home = () => {
    const{ isLoggedIn, user } = useSelector((state) => state.user);
    
    useEffect(() => {
        if(!isLoggedIn){
            Router.push('/login');
        }
    }, [isLoggedIn]);

    return(
        <>
            { isLoggedIn && <AppLayout>
                <h1>구성<br/> 빈 공간 or 다른 content | 명언? 교훈? | 버킷리스트</h1>
            </AppLayout>}
        </>
    );
}

export default Home;