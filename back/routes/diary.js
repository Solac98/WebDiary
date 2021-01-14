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
        const exDiary = await Diary.findOne({
            where: { date: req.body.date },
        });
        if(exDiary){
            return res.status(401).send('해당일에는 이미 글을 작성하였습니다.');
        }
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
//Delete Diary
router.delete('/:deleteDate', async (req, res, next) => {
    try {
        const exDiary = await Diary.findOne({
            where: { date: req.params.deleteDate },
        });
        if(!exDiary){
            return res.status(401).send("해당일에 게시글이 없습니다.");
        }
        await Diary.destroy({
            where: { date: req.params.deleteDate },
        });
        res.status(200).send("게시글 삭제가 완료되었습니다.");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//Update Diary
router.put('/update', upload.none(), async (req, res, next) => {
    try {
        //Update Diary
        const exDiary = await Diary.findOne({
            where: { date: req.body.date },
        });
        if(!exDiary){
            return res.status(401).send("해당 게시글을 찾을수 없습니다");
        }
        const diary = await Diary.update({ 
            title: req.body.title,
            content: req.body.content,
        },{
            where: { date: req.body.date },
        });
        //Image Insert
        if(req.body.image) {
            if(Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image})));
                await exDiary.addImages(images);
            } else {
                const image = await Image.create({ src: req.body.image});
                await exDiary.addImages(image);
            }
        }
        //Image Remove
        if(req.body.reImage) {
            if(Array.isArray(req.body.reImage)) {
                await Promise.all(req.body.reImage.map((v) => Image.update({
                    DiaryId: null,
                },{
                    where: { id: v }, 
                })));
            } else {
                await Image.update({
                    DiaryId: null,
                },{ 
                    where: { id: req.body.reImage },
                });
            }
        }
        //Response Diary
        const fullDiary = await Diary.findOne({
            where: { date: req.body.date },
            include: [{
                model: Image,
            }],
        });
        res.status(201).json(fullDiary);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;