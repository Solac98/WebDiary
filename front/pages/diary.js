import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { Row, Col, DatePicker, Space, Card, Button, Image, Input, Modal, Form, Popconfirm } from 'antd';
import Router from 'next/router';
import { ADD_DIARY_REQUEST, LOAD_DIARY_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, DELETE_DIARY_REQUEST, DELETE_DIARY_RESET } from '../reducers/diary';

const Diary = () => {
      
    const dispatch = useDispatch();
    const { deleteDiaryError, deleteDiaryDone, post, imagePaths, addDriayLoading, loadDiaryError, loadDiaryLoading, addDiaryError } = useSelector((state) => state.diary);
    const { isLoggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        if(deleteDiaryError){
            alert(deleteDiaryError);
        }
    }, [deleteDiaryError]);

    useEffect(() => {
        if(deleteDiaryDone){
            alert("게시글 삭제 왼료");
            dispatch({
                type: DELETE_DIARY_RESET,
            });
        }
    }, [deleteDiaryDone]);

    useEffect(() => {
        if(!isLoggedIn){
            Router.push('/');
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if(loadDiaryError){
            alert(loadDiaryError);
        }
    }, [loadDiaryError]);

    useEffect(() => {
        if(addDiaryError){
            alert(addDiaryError);
        }
    }, [addDiaryError]);

    if (!isLoggedIn) {
        return '내 정보 로딩중...';
    }

    //Add Post State
    const [addTitle, setAddTitle] = useState('');//Add Post Title
    const [addContent, setAddContent] = useState('');//Add Post Contnet

    // Add Post Content Changes
    const onChangeContent = useCallback((e) => {
        setAddContent(e.target.value);
    }, [addContent]);

    // Close Add Post
    const onCancel = useCallback(() => {
        setVisible(false);
        setAddTitle('');
    }, [visible, addTitle]);

    // Add Post Tile Change
    const onChangeTitle = useCallback((e) => {
        setAddTitle(e.target.value);
    }, [addTitle]);

    // Submit Add Post
    const onSubmitPost = useCallback(() => {
        const formData = new FormData();
        imagePaths.forEach((image) => {
            formData.append('image', image);
        });
        formData.append('content', addContent);
        formData.append('title', addTitle);
        formData.append('date', selectDate);

        setVisible(false);
        setAddTitle('');
        setAddContent('');

        return dispatch({
            type: ADD_DIARY_REQUEST,
            data: formData,
        });
    }, [visible, addTitle, addContent, selectDate, imagePaths]);

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

    //Find Post
    const onFindPost = useCallback(() => {
        const date = selectDate;
        if(date === "날짜 선택!"){
           return alert("날짜를 선택하세요!");
        }
        dispatch({
            type: LOAD_DIARY_REQUEST,
            data: { date: date},
        });
    }, [selectDate]);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
          imageFormData.append('image', f);
        });
        dispatch({
          type: UPLOAD_IMAGES_REQUEST,
          data: imageFormData,
        });
      }, []);

    const onRemoveImage = useCallback((index) => () => {
        dispatch({
          type: REMOVE_IMAGE,
          data: index,
        });
      }, []);

    const onDeletePost = useCallback(() => {
        dispatch({
            type: DELETE_DIARY_REQUEST,
            data: selectDate,
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
                        <Button onClick={onFindPost}loading={loadDiaryLoading} >조회</Button>
                        <Button onClick={onOpenAddPost}>글쓰기</Button>
                        <Popconfirm title={`${selectDate}의 게시글을 삭제하시겠습니까?`}
                         onConfirm={onDeletePost}><Button>삭제</Button></Popconfirm>
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
                            footer={[<Button key="back" onClick={onCancel}>Return</Button>]} >
                            <Input.TextArea 
                                rows={10} 
                                placeholder="오늘의 기억남는 하루를 남겨보세요 :)"
                                onChange={onChangeContent}
                                value={addContent}
                            />
                            <Form encType="multipart/form-data" onFinish={onSubmitPost}>
                            <div>
                                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                                <Button style={{float: 'right'}} key="submit" htmlType="submit" type="primary" loading={addDriayLoading} >올리기</Button>
                            </div>
                            <div>
                                { imagePaths && imagePaths.map((v, i) => (
                                <div key={v} style={{ display: 'inline-block' }}>
                                    <img src={`http://localhost:3065/${v}`} style={{ width: '100px' }} alt={v} />
                                    <div>
                                        <Button onClick={onRemoveImage(i)}>제거</Button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </Form>
                        </Modal>
                        <Card style={{margin: '20px', overflow: 'scroll', height: '550px'}} title={post.title} bordered={false}>
                            <p>{post.content}</p>
                            <Image.PreviewGroup>
                                {post.Images.map((v) => <Image witdh="100%" src={`http://localhost:3065/${v.src}`} />)}
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