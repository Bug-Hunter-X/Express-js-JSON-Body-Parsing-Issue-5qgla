const express = require('express');
const app = express();
//This line is crucial for parsing JSON. Make sure it is placed before routes that expect JSON.
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});