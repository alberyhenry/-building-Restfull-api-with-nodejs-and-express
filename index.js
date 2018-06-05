import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');
import routes from './src/routes/crmRoutes';
// Body Parser Setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Static File Setup
app.use(express.static(path.join(__dirname, 'public')))
// Port setup
const PORT = process.env.PORT || 5000;
app.get('/', (req, res)=>
    res.send(`Hello From Port ${PORT}`)
);
routes(app)
app.listen(PORT, ()=>{
    console.log(`app is running on port : ${PORT}`)
});