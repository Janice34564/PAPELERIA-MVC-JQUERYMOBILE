const productosController ={};
const Producto=require('../models/Producto.model');
productosController.obtenerProductos=async (req,res)=>{
    const productos = await Producto.find();
    res.json(productos);
};
/*--------------------------------------------------------------------------------- */
productosController.obtenerProducto=async (req,res)=>{
    const producto = await Producto.findOne();
    if (producto == null){
        res.json({
            status: "Producto no encontrado"
        })
    }else {
        res.json(producto);
    }
};
/*--------------------------------------------------------------------------------- */
productosController.insertarProducto =async (req,res)=>{
    const insertarProducto = new Producto(req.body);
    await Producto.save();
        res.json({
            Status:"Producto insertado"
        });
};
/*--------------------------------------------------------------------------------- */
productosController.eliminarProducto =async (req,res)=>{
    const eliminarProducto = new Producto(req.body);
    await Producto.findOneAndDelete({codigobarras:req.Params.cb});
        res.json({
            Status:"Producto eliminado"
        });
};
/*--------------------------------------------------------------------------------- */
productosController.vista =async (req,res)=>{
    const obtenerVista = await Producto.find();
    res.render('../src/views/productos.ejs');
};
/*--------------------------------------------------------------------------------- */
module.exports=productosController;