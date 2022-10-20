const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const { logErrors , errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


app.use(express.json());





app.get('/', (req, res) => {
  res.send('hola mundo');
});

app.listen(port, () => {
  console.log('mi puerto es' + port);
});




routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

