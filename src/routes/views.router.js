 
import { Router } from 'express';

const routes = Router()

routes.get('/', (req, res) => {
    res.render('home') 
})

routes.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts')
})




export default routes

