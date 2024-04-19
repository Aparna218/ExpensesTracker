const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://aparna21:tpzmDVkZSc3mpMTf@cluster21.u69lmjr.mongodb.net/pbl")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}