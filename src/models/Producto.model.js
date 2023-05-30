const {Schema,model}=require('mongoose');
const productoSchema= new Schema({
   codigoBarras:{
      require:true,
      unique:true,
      type:String
   },
   descripcion:String,
   marca:String,  
   precioCompra:Number,
   precioVenta:Number,
   existencias:Number
},{
   versionKey:false,
   timestamps:true
});
module.exports=model('producto',productoSchema)