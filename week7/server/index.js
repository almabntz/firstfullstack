// This will be the server index 

import express from 'express';
import cors from 'cors';
import { config } from "dotenv"; config();
import fetch from 'node-fetch';

const app = express();
const PORT = 8080;

app.use(cors());

//route for the index
app.get('/', (req, res) =>{
    res.json("Hello from server")

});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=moscow&APPID=${process.env.API_KEY}&units=metric`;
    
    app.get('/api/weather', (req, res) =>{
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
         res.send(data);
    });
    }
    )
    

console.log(process.env.API_KEY)
app.listen(PORT, () => console.log(`Hello world! Server running on Port http://localhost:${PORT}`));