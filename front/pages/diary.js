import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { Row, Col, DatePicker, Space, Card, Modal, Button, Input, Image } from 'antd';
import Router from 'next/router';
import { ADD_DIARY_REQUEST, LOAD_DIARY_REQUEST } from '../reducers/diary';

const Diary = () => {
      
    const dispatch = useDispatch();
    
    const { post } = useSelector((state) => state.diary);
    const { isLoggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        if(!isLoggedIn){
            Router.push('/');
        }
    });

    if (!isLoggedIn) {
        return '내 정보 로딩중...';
    }

    //Add Post State
    const [addTitle, setAddTitle] = useState('');//Add Post Title
    const [addContent, setAddContent] = useState('');//Add Post Contnet
    //Open Add Post State
    const [visible, setVisible] = useState(false);
    //Date State
    const [selectDate, setSelectDate] = useState('날짜 선택!');

    //Date Pick
    const onChangeCal = useCallback((date, dateString) => {
        setSelectDate(dateString);
    }, [selectDate]);

    // Open Add Post
    const onOpenAddPost = useCallback(() => {
        const date = selectDate;        
        if(date === "날짜 선택!"){
           return alert("날짜를 선택하세요!");
        }
        setVisible(true);
    }, [visible, selectDate]);

    // Close Add Post
    const onCancel = useCallback(() => {
        setVisible(false);
        setAddTitle('');
    }, [visible, addTitle]);

    // Add Post Tile Change
    const onChangeTitle = useCallback((e) => {
        setAddTitle(e.target.value);
    }, [addTitle]);

    // Add Post Content Change
    const onChangeContent = useCallback((e) => {
        setAddContent(e.target.value);
    }, [addContent]);

    // Submit Add Post
    const onSubmitPost = useCallback(() => {
        const addPostData = { id: 3, date: selectDate, title: addTitle, content: addContent };
        //백엔드 작성시 해당 날짜 게시글이 있는지 디비에서 확인 필요
        //제목 글내용 날짜 올리기
        dispatch({
            type: ADD_DIARY_REQUEST,
            data: addPostData,
        });
        setVisible(false);
        setAddTitle('');
        setAddContent('');
    }, [visible, addTitle, addContent, selectDate]);

    //Find Post
    const onFindPost = useCallback(() => {
        const date = selectDate;
        if(date === "날짜 선택!"){
           return alert("날짜를 선택하세요!");
        }
        dispatch({
            type: LOAD_DIARY_REQUEST,
            data: date,
        });
    }, [selectDate]);

    return(
        <>
            <AppLayout>
                <Row>
                    <Col xs={24} md={6}>

                    </Col>
                    <Col xs={24} md={12}>
                        <Space direction="horizontal">
                            <DatePicker style={{marginTop: '10px', marginBottom: '30px'}} placeholder={selectDate} onChange={onChangeCal} />
                        </Space>
                        <Button onClick={onFindPost}>조회</Button>
                        <Button onClick={onOpenAddPost}>글쓰기</Button>
                        <Modal
                        visible={visible}
                        title={<Input 
                            style={{width: '70%'}} 
                            value={addTitle} 
                            placeholder="제목을 입력하세요" 
                            onChange={onChangeTitle}    
                        />}
                        onOk={onSubmitPost}
                        onCancel={onCancel}
                        footer={[<Button key="back" onClick={onCancel}>Return</Button>,
                                <Button key="submit" type="primary" /*loading={}*/ onClick={onSubmitPost}>Submit</Button>]} >
                                <Input.TextArea 
                                rows={10} 
                                placeholder="오늘의 기억남는 하루를 남겨보세요 :)"
                                onChange={onChangeContent}
                                value={addContent}
                                />
                        </Modal>
                        <Card style={{margin: '20px', overflow: 'scroll', height: '550px'}} title={post.title} bordered={false}>
                            <p>{post.content}</p>
                            <Image.PreviewGroup>
                                {post.image.map((v) => <Image witdh="100%" src={v.src} />)}
                            </Image.PreviewGroup>
                        </Card>
                    </Col>
                    <Col xs={24} md={6}>

                    </Col>
                </Row>
            </AppLayout>
        </>
    );
}

export default Diary;