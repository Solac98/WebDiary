const express = require('express');
const { Calendar } = require('../models');

const router = express.Router();

//Calendar Load
router.get('/', async (req, res, next) => {
    try {
        const calendar = await Calendar.findAll({
            where: { UserId: req.user.id},
        });
        if(calendar){
            return res.status(201).json(calendar);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//Calendar Insert Data
router.post('/', async (req, res, next) => {
    try {
        const calendar = await Calendar.create({
            date: req.body.date,
            content: req.body.content,
            UserId: req.user.id,
        });
        res.status(200).json(calendar);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//Calendar Delete Data
router.delete('/:id', async (req, res, next) => {
    try {
        const exCalender = await Calendar.findOne({
            where: { 
                id: req.params.id,
            },
        });
        if(exCalender){
            await Calendar.destroy({
                where: { 
                    id: req.params.id,
                },
            });
            return res.status(201).json(exCalender); 
        }
        
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;