const express = require("express");
const cors = require("cors");

app.use(express.json());
let port = process.env.PORT || 5000;
app.use(cors());


 // method - get
// public
// get user
app.get('/', (req, res) => {
    res.send('Hello World');
  });
app.listen(port, () => console.log(`Server listening on port ${port}`));