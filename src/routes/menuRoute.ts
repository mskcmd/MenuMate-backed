import express from 'express';
import { addMenu, getMenu } from '../controllers/menuController';


const menuRoute = express.Router();

console.log("hai....");

menuRoute.post('/AddMenu', async (req, res) => {
    await addMenu(req, res);
});

menuRoute.get('/getMenu', async (req, res) => {
    await getMenu(req, res);
});



export default menuRoute;
