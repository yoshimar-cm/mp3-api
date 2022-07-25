const {Router} = require('express');
const fs = require('fs');

const router = Router();


const PATH_ROUTES_API = __dirname;

const removeExtencion = (filename) => {
    return filename.split('.').shift();
}

// TODO: Define routes API
fs.readdirSync(PATH_ROUTES_API).filter((file) =>{
    const name = removeExtencion(file);
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${name}`))
    }
})




module.exports = router;