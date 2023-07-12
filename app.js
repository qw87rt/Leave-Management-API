const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const users = require('./routes/users');
const userDetails = require('./routes/userDetails');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/users', users);
app.use('/userDetails', userDetails);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
