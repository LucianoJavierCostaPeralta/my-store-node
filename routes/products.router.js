const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get("/", (req,res)=>{
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

router.get('/filter', (req, res) => {
  res.send ('Soy un filter')
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  {
    id === '999'
      ? res.status(404).json({
        mensage: 'Not found'
      })
      : res.status(200).json({
        id,
      });
  }
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    menssage : 'Created',
    data     : body
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
