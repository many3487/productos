const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');


const { logErrors , errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT ||3000;



app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:80'];
const options = {
  origin:(origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('Invalid origin'))
    }
  }
}

app.use(cors(options));





app.get('/', (req, res) => {
  res.send('hola mundo');
});

app.listen(port, () => {
  console.log('mi puerto es ' + port);
});




routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

