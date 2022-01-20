const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000 ; 
const authRoutes = require("./routes/auth.js");
var bodyParser = require('body-parser')
require('dotenv').config();
// cross origine request
app.use(cors());
//post
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
// put
// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.
app.get('/',(req,res)=>{
    res.send('does it work ??');
});
app.use('/auth',authRoutes);
app.listen(PORT);