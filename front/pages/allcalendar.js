import React, { useState, useCallback, useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, Badge, DatePicker, Space, Input, Button } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import { ADD_CALENDAR_REQUEST, LOAD_CALENDAR_REQUEST, REMOVE_CALENDAR_REQUEST } from '../reducers/calendar';
const AllCalendar = () => {
    const dispatch = useDispatch();
    const{ isLoggedIn} = useSelector((state) => state.user);
    const { calendar } = useSelector((state) => state.calendar);
    
    useEffect(() => {
        if(!isLoggedIn){
            return Router.push('/login');
        }
        dispatch({
          type: LOAD_CALENDAR_REQUEST,
        });
    }, [isLoggedIn]);

    if (!isLoggedIn) {
      return '내 정보 로딩중...';
  }

    const [text, setText] = useState('');
    const [selectDate, setSelectDate] = useState('2021-01-01');

    const onChangeText = useCallback((e) => {
      setText(e.target.value);
    }, [text]);

    function getListData(value) { 
        let listData = calendar.filter((v) => v.date === value);
        return listData || [];
      }

    const onSelect = useCallback((e) => {
      console.log(e.format('YYYY-MM-DD'));
      setSelectDate(e.format('YYYY-MM-DD'));
    }, [selectDate]);

    //temp
    const onPanelChange = () => {
      console.log('달 페이지 바뀌었음!');
    }
    //temp
    const dateCellRender = useCallback((value) => {
      const listData = getListData(value.format('YYYY-MM-DD'));
      return (
      <ul style={{paddingInlineStart: '0'}} className="events">
      {listData.map(item => (
        <li style={{listStyle: 'none'}} key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
    );
  }, [calendar]);
    const onChangeCal = (date, dateString) => {
      setSelectDate(dateString);
    }
    //달력에 추가
    const onSubmit = useCallback((() => {
      const plus = { id: 7, date: selectDate, type: 'success', content: text};
      //임시로 id인덱스 부여, 디비 작업시 id 자동
      console.log(plus);
      dispatch({
        type: ADD_CALENDAR_REQUEST,
        data: plus,
      });
      console.log(calendar);
    }), [ selectDate, text, calendar]);
    //달력에 추가한거 삭제
    const onDelete = useCallback((() => {
      const deleteData = calendar.filter((e) => e.date === selectDate && e.content === text);
      console.log(deleteData);
      dispatch({
        type: REMOVE_CALENDAR_REQUEST,
        data: {
          date: selectDate,
          content: deleteData,
        },
      });
    }), [selectDate, calendar,/*tempData*/, text]);

    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Calendar</title>
            </Head>
            { isLoggedIn && <AppLayout>
                <Space direction="horizontal">
                  <DatePicker style={{marginTop: '10px'}} placeholder={selectDate} onChange={onChangeCal} />
                </Space>
                <Input placeholder="달력에 기록하세요!" style={{width: '300px', marginTop: '10px'}} name="text" value={text} type="text" onChange={onChangeText} required />
                <Button style={{marginTop: '10px'}} onClick={onSubmit}>입력</Button>
                <Button style={{marginTop: '10px'}} onClick={onDelete}>삭제</Button>
                <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} onSelect={onSelect}/>
            </AppLayout>}
        </>
    );
}

export default AllCalendar;