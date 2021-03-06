const express = require('express');
const ProductsService = require('../service/products.service');
const router = express.Router();
const service = new ProductsService();

router.get("/", async  (req,res)=>{
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send ('Soy un filter')
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findfindOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedProduct =await  service.update(id, body);
    res.json(updatedProduct);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
});

router.patch('/:id', async (req, res) => {
  try {
  const { id } = req.params;
  const body = req.body;
  const updatedProduct =await  service.update(id, body);
  res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
  const { id } = req.params;
  const rta =await  service.delete(id);
  res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;
