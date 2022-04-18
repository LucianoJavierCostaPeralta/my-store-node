const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Mi primer server con Express');
});

app.get('/new-root', (req, res) => {
  res.send('NEW ROOT');
});

app.get("/products", (req,res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index< limit; index++){
    products.push({
      name : faker.commerce.productName(),
      price : parseInt(faker.commerce.price(),10),
      image : faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send ('Soy un filter')
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.get('/categories/:categoriesId/products/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;
  res.json({ categoriesId, productsId });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  {
    limit && offset
      ? res.json({
          limit,
          offset,
        })
      : res.json({
        mensage : 'No hay parametros'
      });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

