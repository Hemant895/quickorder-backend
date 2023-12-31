const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
const path = require('path');
const productRouter = require('./routes/products')
const userRouter = require('./routes/user')
// console.log('env',process.env.DB_PASSWORD)

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hemantkhedkar102034:lRdlVYsbULQr2wPP@fooddata.icasobi.mongodb.net/Allfooddata?retryWrites=true&w=majority');
  console.log('database connected')
}
//bodyParser
server.use(cors());
server.use(express.json());
// server.use(morgan('default'));
// server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router);
server.use('/user',userRouter.router);
// server.use('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'build','index.html'))
// })

server.listen(9000, () => {
  console.log('server started');
});