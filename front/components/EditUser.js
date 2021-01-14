import React, { useState, useCallback } from 'react';
import { useDispatch} from 'react-redux';
import { Form, Input, Button, Alert } from 'antd';
import styled from 'styled-components';
import { UPDATE_USER_REQUEST } from '../reducers/user';

const CenterDiv = styled.div`
    width: 50%;
    margin : 0 auto;
`;
const InputData = styled(Input)`
    margin-top: 10px;    
`;
const UpdateBtn = styled(Button)`
    margin-top: 10px;
`;



const EditUser = () => { 
    const dispatch = useDispatch();
    const [nickname, setNickName] =useState('');

    const onNickChange = useCallback((e) => {
        setNickName(e.target.value);
    }, [nickname]);

    const onSubmitForm = useCallback(() => {
        const update = { nickname: nickname};
        dispatch({
            type: UPDATE_USER_REQUEST,
            data: update,
        });
        setNickName('');
    }, [nickname]);

    return (
        <CenterDiv>
            <Form onFinish={onSubmitForm} style={{marginTop: '30px'}}>       
                <Alert message="수정이 필요한 부분을 작성하세요!" type="success"/>
                <InputData placeholder="닉네임" name="nickname" value={nickname} onChange={onNickChange}/>
                <InputData placeholder="생년월일 / X" name="birthday" disabled/*value={} onChange={}*//>
                <InputData type='tel' placeholder="010-1234-5678/ X" name="phone" maxLength='13' disabled/*value={} onChange={}*//>
                <UpdateBtn type='primary'v htmlType="submit">수정</UpdateBtn>
            </Form>
        </CenterDiv>
    );
}

export default EditUser;