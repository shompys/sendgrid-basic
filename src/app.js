const express = require('express')
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const { sendEmailContactThanks } = require('./services/email/email.ready');
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.get('/', async (req,res) => {
   
        const data = {
            name: 'jonathan',
            email: 'jonathangomezit@gmail.com'
        }
        const { status, error, message } = await sendEmailContactThanks(data)
        
        res.json({
            status,
            error,
            message,
        })

})
const port = '3001';

app.listen(port,()=>{
    console.log(`Servidor escuchando desde el puerto ${port} ...`);
})