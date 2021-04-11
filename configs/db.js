const mongoose = require('mongoose');

async function connectDb(){
    try {
    let conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: false
    });
    console.log(`Db has been connected with ${conn.connection.host}`);
    }  catch (err) {
        console.error(err);
    }
}

module.exports = connectDb;