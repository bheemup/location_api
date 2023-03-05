const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config()
require("./db/conn");
app.use(express.json())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(require("./routes/auth"))

 

app.get("",(req,res)=>{
    res.send("hii this is form server")
})

app.listen(port,()=>{
    console.log(`your server is running at port num ${port}`);
})