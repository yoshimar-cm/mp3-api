const {Schema, model} = require('mongoose');

const StorageSchema = new Schema({
        url: {
            type: String
        },
        filename:{
            type: Number
        }
    },{
        timestamps: true,
        versionKey: false
});

module.exports = model("Storages", StorageSchema);