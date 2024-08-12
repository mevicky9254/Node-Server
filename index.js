console.log("This is index page");
// const http = require ('node:http');

// const hostName = '127.0.0.1';

// const port = 3000;



// const server = http.createServer ((req, res) => {

//     res. statusCode = 200 ;
//     res.setHeader ("Content-Type" , "text/plain");
//     res.end ("Server has been created \n");

// });



// server.listen( port, hostName, () =>{
//     console.log(`The server has ben started on http://${hostName}:${port}`);
// });



const express = require ('express');
require('dotenv').config();

const app = express ();

// const port = 4000;

app.get ('/', (req, res) => {
     res.send("This is my first node web app and is if we use express the host is automatically running on local host and is better than HTTP becuase it provides strong and robust routing mechanism than the HHTP as we have to handle routing manully in HTTP")
})

app.get('/vikki', (req, res) =>{
  res.send("Viki");
});

app.get( '/status', (req, res)=>{
  res.status ( 200);
})

app.listen( process.env.PORT, () =>{
  console.log(`server is running on port ${process.env.PORT}`);
});