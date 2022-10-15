const express = require('express');
const ProductService = require('../services//products.service');

const router = express.Router();
const service = new ProductService();


router.patch('/:id', (req, res)=> {

  const { id } = req.params;

  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});


router.delete('/:id', (req, res)=> {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
    res.json(product);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    prince: 3000
  })
})
router.get('/',(req, res) => {

  const productos = service.find();
   res.json(productos);

 });



router.get('/filter', (req, res)=>{
  res.send('soy un filter')
})
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    prince: 300
  })
})

router.post('/', (req, res) => {
  const body =req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: 'creado',
    data: newProduct
  });
})

router.put('/:id', (req, res)=> {

  const { id } = req.params;

  const body = req.body;

  res.json({
    message: 'Update',
    data: body,
    id
  });
});









module.exports =router;
