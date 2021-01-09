const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require('passport');
const cors = require('cors');
const userRouter = require('./routes/user');
const diaryRouter = require('./routes/diary');
const path = require('path');

dotenv.config();

const app = express();

db.sequelize.sync()
    .then(() => {
        console.log("DataBase Connected");
    })
    .catch((error) => {
        console.error(error);
    });

passportConfig();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/diary', diaryRouter);

app.listen(3065, () => {
    console.log("3065 Port Opened")
});