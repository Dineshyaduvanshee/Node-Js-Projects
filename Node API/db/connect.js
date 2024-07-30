const mongoose = require('mongoose');
const { options } = require('../routes/products');

uri = "mongodb+srv://dineshyadav74950:<password>@cluster0.f1jjvx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () =>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },callback)
};

module.exports = connectDB;


// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
 