const {StorageModel} = require('../models');

const public_url = process.env.PUBLIC_URL;


/**
 * Mostrar registros
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getItems = async (req, res, next) =>{

    try {
        const data = await StorageModel.find({});
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
        const {body, file} = req;

        const fileData = {
            filename: file.filename,
            url: `${public_url}/${file.filename}`
        }
        
        const data = await StorageModel.create(fileData);
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