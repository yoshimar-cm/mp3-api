const {TrackModel} = require('../models')

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
        next();   
    }
};


/**
 * Mostar un solo registro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getItem = (req, res, next) =>{

    const {id} = req.params;
    
    res.send(`get only item ${id}`);
};

/**
 * Registrar un nuevo track
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const postItem = async (req, res, next) =>{
    try{
        const {body} = req;
        
        const data = await TrackModel.create(body);
        res.send(data);

    } catch(error){
        next();
    }
};


/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const putItem = (req, res, next) =>{
    res.send('update item');
};


/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteItem = (req, res, next) =>{
    res.send('delete item');
};

module.exports = {
    getItems,
    getItem,
    postItem,
    putItem,
    deleteItem
}