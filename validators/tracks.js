const {check} = require('express-validator');

const validateResults = require('../utils/handleValidator');
const {TrackModel} = require('../models');

const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next)=> validateResults(req,res,next),
];


const validatorDeleteItem = [
    check('id','Id invalid').isMongoId(),
    check('id').custom(async (id ='')=>{
        const item = await TrackModel.findById(id);
        // console.log(id);
        if(!item){
            throw new error(`El id no existe registrado`);
        }
    }),
    (req, res, next)=> validateResults(req,res,next),
];

module.exports = {
    validatorCreateItem,
    validatorDeleteItem
}