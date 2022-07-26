const handleHttpError = (res, msj = 'Algo sucedio', code = 403)=>{
        res.status(code).json({error: msj});
};


module.exports = {
    handleHttpError
}