const {Router} =require('express');
const productosController=require('../controllers/productos.controller');
const router = Router();

router.get('/',productosController.obtenerProductos);
router.get('/obtenerProducto',productosController.obtenerProducto);
router.post('/insertarProducto',productosController.insertarProducto);
router.post('/eliminarProducto', productosController.eliminarProducto);
router.get('/vista',productosController.vista);

module.exports=router;