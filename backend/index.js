const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use (express.static(path.join(__dirname, '../front-end/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
  });

let player = "playerHand";

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});