import produce from '../util/produce';

//bucket 더미 데이터

const dummyData = [{
    id: 1,
    date: "2021-01-01",
    title: "오랜만에 공장알바 1일차",
    content: '다 이 어 트',
    image: [{
        id: 1,
        src: "https://cdn.mediasr.co.kr/news/photo/202006/60497_30779_2227.jpg",
    }, {
        id: 2,
        src: "https://cdn.mediasr.co.kr/news/photo/202006/60497_30779_2227.jpg",
    }],
}, {
    id: 2,
    date: "2021-01-08",
    title: "ㅏㅇ아ㅏㅇ아아아ㅏ아",
    content: '미칠가기ㅣ닝미이밍',
    image: [{
        id: 1,
        src: "https://cdn.mediasr.co.kr/news/photo/202006/60497_30779_2227.jpg",
    }, {
        id: 2,
        src: "http://image.cine21.com/resize/cine21/person/2020/0610/16_24_15__5ee08a9f02f1c[W680-].JPG"
    }]
}]

export const initialState = {
    post: {
        image: [],
    },
};

export const LOAD_DIARY_REQUEST = 'LOAD_DIARY_REQUEST'; // 액션의 이름
export const LOAD_DIARY_SUCCESS = 'LOAD_DIARY_SUCCESS'; // 액션의 이름
export const LOAD_DIARY_FAILURE = 'LOAD_DIARY_FAILURE'; // 액션의 이름

export const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST'; // 액션의 이름
export const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS'; // 액션의 이름
export const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE'; // 액션의 이름

export const REMOVE_DIARY_REQUEST = 'REMOVE_DIARY_REQUEST'; // 액션의 이름
export const REMOVE_DIARY_SUCCESS = 'REMOVE_DIARY_SUCCESS'; // 액션의 이름
export const REMOVE_DIARY_FAILURE = 'REMOVE_DIARY_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름
//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case LOAD_DIARY_REQUEST:{
            //현재는 더미데이터에서 찾아서 넣고있지만 디비 작업시
            //백엔드에서 해당 데이터 찾아와 바로 넣기
            const tempdata = dummyData.filter((v) => v.date === action.data)[0];
            if(!tempdata){
                alert("이 날의 추억은 남기지 않으셨네요 :(");
                break;
            }
            draft.post.id = tempdata.id;
            draft.post.title = tempdata.title;
            draft.post.content = tempdata.content;
            draft.post.date = tempdata.date;
            draft.post.image = tempdata.image;
            break;
        }
        case ADD_DIARY_REQUEST:{
            //디비 구현시 구현예정
            
            break;
        }
        case REMOVE_DIARY_REQUEST:{
            //현재는 더미데이터에서 삭제하지만 디비 작업시 디비에서 삭제
            draft.dummyData = dummyData.filter((v) => v.id !== action.data.id);
            break;
        }
        case LOG_OUT_REQUEST:{
            console.log("LOG_OUT_REQUEST");
            draft.post = {
                image: [],
            };
            break;
        }
    }
})

export default reducer;