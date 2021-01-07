import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import styled from 'styled-components';

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
    return (
        <CenterDiv>
            <Form /*onFinish={}*/ style={{marginTop: '30px'}}>       
                <Alert message="수정이 필요한 부분을 작성하세요!" type="success"/>
                <InputData placeholder="닉네임" name="nickname" /*value={} onChange={}*//>
                <InputData placeholder="생년월일" name="birthday" /*value={} onChange={}*//>
                <InputData type='tel' placeholder="010-1234-5678" name="phone" maxLength='13' /*value={} onChange={}*//>
                <UpdateBtn type='primary'v htmlType="submit">수정</UpdateBtn>
            </Form>
        </CenterDiv>
    );
}

export default EditUser;