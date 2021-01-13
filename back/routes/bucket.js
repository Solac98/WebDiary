const express = require('express');
const { Bucket } = require('../models');

const router = express.Router();

//Load Bucket
router.get('/', async (req, res) => {
    try {
        const bucket = await Bucket.findAll({
            where: { UserId: req.user.id },
        });
        res.status(201).json(bucket);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//Add Bucket
router.post('/', async (req, res, next) => {
    try {
        const bucket = await Bucket.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        res.status(201).json(bucket);
    } catch (error) {
        console.error(error);
        next(error);
    }
})

//Remove Bucket
router.delete('/:id', async (req, res, next) => {
    try {
        const exBucket = await Bucket.findOne({
            where: { id: req.params.id }
        });
        if(exBucket){
            await Bucket.destroy({
                where: { id: req.params.id },
            });
            return res.status(201).json(exBucket);
        }
        res.status(401).send("해당 버킷리스트가 없습니다.");
    } catch (error) {
        console.error(error);
        next(error);
    }
});


module.exports = router;