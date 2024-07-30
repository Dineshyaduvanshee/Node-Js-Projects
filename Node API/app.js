// const express = require('express');
// const connectDB = require('./db/connect');

// const app = express();

// // Connect to database
// connectDB();

// app.get('/', (req, res) => res.send('API Running'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



// app.js or server.js
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
    res.send('Hi, I am live');
});

// Middleware to set router
app.use('/api/products', products_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes, I am Connected`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
