const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Routes 
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

// Swagger Documentation
const swagger = require('./swagger');
swagger(app);

app.listen(3000, () => console.log('Server running on port 3000'));