const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

const db = mongoose.connection;

const User = require('./models/user');

db.once('open', () => {
    console.log('Connected to MongoDB on server!');
})

db.on('error', (err) => {
    console.log('Database error: ${err}');
})

app.get('/', (req, res) => {
    res.send('Mongoose');
});

app.get('/user', (req, res) => {
    User.create({
        name: 'Amari',
        email: 'mar.james1998@gmail.com',
        age: 22,
        website: 'https://github.com/marjames98'
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    ('Open 3000 to run server');
});