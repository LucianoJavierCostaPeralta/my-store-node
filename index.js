const express = require('express');
const app = express();
const port = 8080;
const routerApi = require('./routes/index');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mi primer server con Express');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

