// const mongoose = require('mongoose');
// require('dotenv').config();

// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);

//         const connection = mongoose.connection;

//         connection.on('connected', () => {
//             console.log("Connected to MongoDB via Compass");
//         });

//         connection.on('error', (error) => {
//             console.log("Something is wrong with MongoDB ", error);
//         });
//     } catch (error) {
//         console.log("Connection error: ", error);
//     }
// }

// module.exports = connectDB;


const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB via Compass");
    } catch (error) {
        console.error("Connection error: ", error);
        process.exit(1);
    }

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB connection is disconnected');
    });
}

module.exports = connectDB;