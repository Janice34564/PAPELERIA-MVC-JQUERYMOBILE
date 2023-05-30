const mongoose = require('mongoose');
//Conexión a MongoDB Atlas
mongoose.connect("mongodb+srv://janicesalinas12:J&j240522@clusterjanice.4uzb0ae.mongodb.net/Papeleriadb?retryWrites=true&w=majority")
.then(db=>console.log("MongoDB Connected"))
.catch(err => console.error(err));