const {matchedData} = require('express-validator');
const {TrackModel} = require('../models')
const {handleHttpError} = require('../utils/handleError');

/**
 * Mostrar registros
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getItems = async (req, res, next) =>{
    try {
        const data = await TrackModel.find({});
        res.send(data);
    } catch (error) {
        handleHttpError(res, 'Error get items'); 
    }
};


/**
 * Mostar un solo registro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getItem = async (req, res, next) =>{
    try {
        const id = req.params;
        const data = await TrackModel.findOne(id);
        res.send(data);
    } catch (error) {
        handleHttpError(res, 'Error get items'); 
    }
};

/**
 * Registrar un nuevo track
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const postItem = async (req, res, next) =>{
    try{
        const body = matchedData(req); //retorna solo los datos que estan en validacion

        const data = await TrackModel.create(body);
        res.status(201).json({data});

    } catch(error){
        handleHttpError(res, 'Error register items'); 
    }
};


/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const putItem = (req, res, next) =>{
    try {
        // code
    } catch (error) {
        handleHttpError(res, 'Error updated items'); 
    }
};


/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteItem = async (req, res, next) =>{
    try {
        const {id} = matchedData(req);

        const data = await TrackModel.deleteOne({_id:id});
        res.status(200).json({data});
    } catch (error) {
        handleHttpError(res, 'Error deleted items'); 
    }
};

module.exports = {
    getItems,
    getItem,
    postItem,
    putItem,
    deleteItem
}