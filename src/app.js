import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/views.router.js';
import cartsRoutes from './routes/api/carts.routes.js';
import productsRoutes from './routes/api/product.routes.js';
import path from 'path';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))


const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.engine('hbs', engine({
    extname: '.hbs' 
}))

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'src', 'views')); 

app.use('/', routes) 
app.use('/api/products', () => {})
app.use('/api/products', () => {})

app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);

app.listen(PORT, err => {
    if (err) {
        console.log('no se pudo iniciar el servidor:', err)
        return
    }
    console.log(`scuchando en ${PORT}`);
});

