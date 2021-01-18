# Solac Seed 프로젝트 - 종료

## 프로젝트 목적 
CRUD를 수행하는 웹 프로젝트를 만드는 것, Front(React, Redux( +Saga), Next)와 Back(Express), DB(Sequelize) 학습을 통해  간단한 Front와 API서버를 구현하고 Sequelize를 이용한 데이터 베이스 연결을 통하여 웹 다이어리(일기, 캘린더, 버킷리스트) 개발.

## 일정(일일 기록)

- 2021.01.05.화 - 전체 디자인 및 캘린더 프로필 부분 디자인 적용(매우 큰 수정 예상)

- 2021.01.06.수 - 로그인 로그아웃 적용(리덕스 적용), 타 페이지 접속 시 로그인 페이지 이동(수정 예상), 캘린더 입력 삭제 적용(리덕스)

- 2021.01.07.목 - 프로필 버킷리스트 수정 컴포넌트 구현, 다이어리(일기) 페이지 구현(더메 데이터를 활용한 데이터 조회, 글 작성은 디비 작업시 진행), 로그인 순서 변경(기본 - 메인화면)

- 2021.01.08.금 - 다이어리(일기) 페이지 이미지 구현(업로드 구현예정), 메인페이지 구현(로그인 여부에 따라 구별)

- 2021.01.09.토 - Redux-Saga 적용 및 액션(LogIn, LogOut, SignUp) 생성, BackEnd 서버 구현, Sequelize활용하여 DataBase연결 및 User모델 생성(email, password, nickname) 그리고 bcrypt활용하여 password 암호화 , passport활용한 Log(In Out)구현, 회원 가입 구현

- 2021.01.10.일 - 글 작성(글, 이미지), 조회, 삭제 구현 / front( reducer, saga-Action, page-diary ) / back( Diary-Image모델 생성, User-Diary-Image관계 형성, DairyRouter, Image저장 ), 이미지 DB가 아닌 서버에 저장한 이유는 DB에 저장하면 부담이 크기 때문. 따라서 서버에 저장하고 DB에는 해당 주소를 저장.

- 2021.01.12.화 - 캘린더 일(Day)이벤트 조회 추가 삭제 구현 / front( reducer, saga-Action, page-allcalendar(수정) ) / back( Calendar모델 생성, User-Calendar관계 형성, CalendarRouter)

- 2021.01.13.수 - 버킷리스트 조회 추가 삭제 구현 / front( reducer, saga-Action, component-EditBucket(수정) ) / back( Bucket모델 생성, User-Bucket관계 형성, BucketRouter)

- 2021.01.14.목 - 업데이트 구현(다이어리 + 이미지, 사용자 정보) / front( reducer, saga-Action, page-diary(수정), component-EditUser(수정) ) / back( router.update( Diary, User )생성 ) / Create Read Update Delete 구현 완료.

- 2021.01.17.일 - Server Side Rendering 적용 완료. / page 새로고침 -> 쿠키 여부를 확인 -> wrapper의 getServerSideProps를 통해 Load My Info 액션 요청 -> 응답받은 데이터 포함하여 페이지 렌더.

## 프로젝트를 마무리 하며
> 본 프로젝트를 진행하기 전 react, redux를 일부 응용 가능 할 정도로 학습하였고 next는 프로젝트를 진행하면서 같이 학습하였다.   
> Back - Express 및 DB(Sequelize) 부분은 충분히 응용 가능 할 정도로 학습 하였다. CRUD가 메인이었기에 많은 역활을 하였다.  
> Front - CRUD에 집중하다보니 페이지 및 컴포넌트 분리를 제대로 하지 못 했다. 그리고 Antd에 너무 의존하였다. 추가적인 학습의 필요성을 많이 느꼈다.  
> React state관리에 redux를 사용하였다. 코드가 너무 길어진다는 단점을 느꼈다. 그래서 React의 Context API에 대해 관심이 생겼다.  
> next를 사용하여 CSR SSR 두 방법의 장점을 모두 챙길 수 있었다. 좀 더 학습하여 응용 할 계획이다.  
> 프론트 서버와 백엔드 서버를 나누다 보니 CORS문제를 겪었고 이 문제에 대한 해결방안을 학습 할 수 있었다.  
> passport와 cookie-session을 사용하여 로그인 인증을 구현하였다. 다음번엔 JWT 토큰 인증을 이용해 볼 계획이다.  