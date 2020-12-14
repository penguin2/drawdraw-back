const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const formidable = require('formidable');
const fs = require('fs');
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

app.post("/upload-image", async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files, image) => {
    if (err) {
      next(err);
      return;
    }
    const base64Data = fields.image.replace("data:image\/png;base64,", "");
    fs.writeFile(fields.description+'.png', base64Data, "base64", (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    res.json({ "hello":"world" });
  });  
});
    
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});