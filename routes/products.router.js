const express = require('express');
const ProductService = require('../services//products.service');
const ValidatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema');



const router = express.Router();
const service = new ProductService();


router.patch('/:id',
ValidatorHandler(getProductSchema,'params'),
ValidatorHandler(updateProductSchema,'body')
,async (req, res,next)=> {
  try {
    const { id } = req.params;

    const body = req.body;
    const product =await service.update(id, body);
    res.json(product);

  }catch (err) {
    next(err);
  }
});


router.delete('/:id',async (req, res,next)=> {
  try {
    const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
  } catch (err) {
    next(err);
  }
});

router.get('/:id',
  ValidatorHandler(getProductSchema,'params'),
  async(req, res,next) => {
    try{
      const {id} = req.params;
      const product =await service.findOne(id);
        res.json(product);

    }catch (err) {
      next(err);
    }
  }
);

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    prince: 3000
  })
})
router.get('/',async (req, res) => {

  const productos =await service.find();
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

router.post('/',
  ValidatorHandler(createProductSchema,'body'),
  async (req, res) => {
    const body =req.body;
    const newProduct =await service.create(body);
    res.status(201).json({
      message: 'creado',
      data: newProduct
    });
})

router.put('/:id',async (req, res)=> {

  const { id } = req.params;

  const body =await req.body;

  res.json({
    message: 'Update',
    data: body,
    id
  });
});









module.exports =router;
