Solac Seed 프로젝트

프로젝트 목적 - CRUD를 수행하는 웹 프로젝트를 만드는 것, Front(React, Redux( +Saga), Next)와 Back(Express), DB(Sequelize) 학습을 통해  간단한 Front와 API서버를 구현하고 Sequelize를 이용한 데이터 베이스 연결을 통하여 웹 다이어리(일기, 캘린더, 버킷리스트) 개발.

현재 진행중 
README 간단히 작성
알바와 병행중이라 진행속도 매우 더딜 예정.

- 2021.01.05.화 - 전체 디자인 및 캘린더 프로필 부분 디자인 적용(매우 큰 수정 예상)

- 2021.01.06.수 - 로그인 로그아웃 적용(리덕스 적용), 타 페이지 접속 시 로그인 페이지 이동(수정 예상), 캘린더 입력 삭제 적용(리덕스)

- 2021.01.07.목 - 프로필 버킷리스트 수정 컴포넌트 구현, 다이어리(일기) 페이지 구현(더메 데이터를 활용한 데이터 조회, 글 작성은 디비 작업시 진행), 로그인 순서 변경(기본 - 메인화면)

- 2021.01.08.금 - 다이어리(일기) 페이지 이미지 구현(업로드 구현예정), 메인페이지 구현(로그인 여부에 따라 구별)

- 2021.01.09.토 - Redux-Saga 적용 및 액션(LogIn, LogOut, SignUp) 생성, BackEnd 서버 구현, Sequelize활용하여 DataBase연결 및 User모델 생성(email, password, nickname) 그리고 bcrypt활용하여 password 암호화 , passport활용한 Log(In Out)구현, 회원 가입 구현

- 2021.01.10.일 - 글 작성(글, 이미지), 조회, 삭제 구현 / front( reducer, saga-Action, page-diary ) / back( Diary-Image모델 생성, User-Diary-Image관계 형성, DairyRouter, Image저장 ), 이미지 DB가 아닌 서버에 저장한 이유는 DB에 저장하면 부담이 크기 때문. 따라서 서버에 저장하고 DB에는 해당 주소를 저장.

- 2021.01.12.화 = 캘린더 일(Day)이벤트 조회 추가 삭제 구현 / front( reducer, saga-Action, page-allcalendar(수정) ) / back( Calendar모델 생성, User-Calendar관계 형성, CalendarRouter)