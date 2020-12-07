const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const app = express();
require('dotenv').config();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
 require('dotenv').config();

app.get("/", (req, res) => {    
      res.json({ "paletteColors": ["black", "white", "orange"] });
    });
app.get("/color", (req, res) => {    
    res.json({ "paletteColors": ["black", "white", "orange"] });
    });
  
    
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});