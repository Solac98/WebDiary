const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

const router = express.Router();

//Load User
router.get('/', async (req, res, next) => {
    try {
        if(req.user){
            const user = await User.findOne({
                where: { id: req.user.id},
                attributes: {
                    exclude: ['password'],
                }
            });
            return res.status(201).json(user);
        } else {
            return res.status(201).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if(loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id},
                attributes: {
                    exclude: ['password'],
                },
            });
            return res.status(200).json(fullUserWithoutPassword);
        })
    })(req, res, next);
});

// Logout
router.post('/logout', (req, res, next) => {
    req.logOut();
    req.session.destroy();
    res.send('ok');
});

// SignUp
router.post('/signup', async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where:{ 
                email: req.body.email,
            }
        });
        if(exUser){
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//Update
router.put('/update', async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: { id: req.user.id },
        });
        if(exUser){
            await User.update({
                nickname: req.body.nickname,
            }, {
                where: { id: req.user.id},
            });
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id},
                attributes: {
                    exclude: ['password'],
                },
            });
            return res.status(201).json(fullUserWithoutPassword);
        }
        res.status(401).send("사용자를 찾지 못하였습니다.");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;