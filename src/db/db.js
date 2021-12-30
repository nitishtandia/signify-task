const mongoose = require('mongoose');

const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

mongoose.Promise = global.Promise;


module.exports = (connectionPath) => {
    if (process.env.NODE_ENV === 'test') {
        mockgoose.prepareStorage().then(() => {
            mongoose.connect(connectionPath);
        });
        const db = mongoose.connection;

        db.once('open', () => {
            console.log('Test Database connected');
        });

        db.on('error', (err) => {
            console.warn(err);
        });

        return db;
    } else {
        mongoose.connect(connectionPath);
        const db = mongoose.connection;

        db.once('open', () => {
            console.log('Database connected');
        });

        db.on('error', (err) => {
            console.warn(err);
        });

        return db;
    }
}