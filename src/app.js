import express from 'express';

import cartsRoutes from './routes/carts.routes.js';
import productsRoutes from './routes/product.router.js';


const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);


app.listen(PORT, () => {
    console.log(`scuchando en ${PORT}`);
});

