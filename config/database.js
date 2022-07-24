const mongoose = require('mongoose');

const dbConnect = async () =>{

    const DB_URI = process.env.DB_CONNECTION;

    await mongoose.connect(DB_URI,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true 
        },
        (error, res)=>{
            if(!error){
                console.log('database connected successfully!');
            }else{
                console.log('Error connecting database!');
            }
        });
    
}

module.exports = dbConnect;