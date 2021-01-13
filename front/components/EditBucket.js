import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, List, Button, Input} from 'antd';
import styled from 'styled-components';
import { ADD_BUCKET_REQUEST, REMOVE_BUCKET_REQUEST } from '../reducers/bucket';

const CenterDiv = styled.div`
    width: 70%;
    margin : 0 auto;
    margin-top: 20px;
`;

const CustomBtn = styled(Button)`
    margin-bottom: 5px;
`;
const CustomItem = styled(List.Item)`
    margin: 0;
    justify-content: center;
    padding: 0;
`;
const CustomInput = styled(Input)`
    margin-bottom: 5px;
`;

const EditBucket = () => { 
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const { bucket } = useSelector((state) => state.bucket);

    //Input
    const onContentChange = useCallback((e) => {
        setContent(e.target.value);
    }, [content]);

    //Add Bucket
    const onAddClick = useCallback(() => {
        const data = { content: content };
        dispatch({
            type: ADD_BUCKET_REQUEST,
            data,
        });
        setContent('');
    }, [content]);

    //Delete Bucket
    const onDeleteClick = useCallback(() => {
        //find
        const deleteData = bucket.filter((e) => e.content === content)[0];
        if(deleteData){
            dispatch({
            type: REMOVE_BUCKET_REQUEST,
            data: deleteData.id,
        });
    } else {
        alert("입력 또는 버킷리스트를 확인하세요");
    }
        setContent('');
    }, [content]);

    return (
        <Form>
            <CenterDiv>
                <CustomBtn onClick={onAddClick}>추가</CustomBtn>
                <CustomBtn onClick={onDeleteClick} style={{float: 'right'}}>삭제</CustomBtn>
                <CustomInput onChange={onContentChange} value={content} placeholder={'추가 또는 삭제하고싶은 버킷리스트를 입력하세요'} />
                <List
                style={{height: '350px' , overflow: 'scroll'}}
                size="small"
                bordered
                dataSource={bucket}
                renderItem={item => <CustomItem>{item.content}</CustomItem>}
                />
            </CenterDiv>
        </Form>
    );
}

export default EditBucket;