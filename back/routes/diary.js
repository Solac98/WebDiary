const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Diary, User, Image } = require('../models');

const router = express.Router();

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + '_' + new Date().getTime() + ext);
        },
    }),
    limits: { fieldSize: 20 * 1024 * 1024 }, //20MB
});
//Load
router.post('/load', async (req, res, next) => {
    try {
        const diary = await Diary.findOne({
            where: { date: req.body.date },
            include: [{
                model: Image,
            }],
        });
        if(!diary){
            return res.status(403).send('작성 글이 없습니다.');
        }
        res.status(200).json(diary);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
//Add
router.post('/', upload.none(), async (req, res, next) => {
    try {
        const diary = await Diary.create({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            UserId: req.user.id,
        });
        if(req.body.image) {
            if(Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image})));
                await diary.addImages(images);
            } else {
                const image = await Image.create({ src: req.body.image});
                await diary.addImages(image);
            }
        } 
        const fullDiary = await Diary.findOne({
            where: { id: diary.id},
            include: [{
                model: Image,
            }]
        });
        res.status(201).json(fullDiary);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
//Image Add
router.post('/images', upload.array('image'), (req, res, next) => {
    console.log(req.files);
    res.json(req.files.map((v) => v.filename));
});
module.exports = router;