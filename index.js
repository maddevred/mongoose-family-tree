const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB on server!');
})

db.on('error', (err) => {
    console.log('Database error: ${err}');
})

app.get('/', (req, res) => {
    res.send('Mongoose');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    ('Open 3000 to run server');
});