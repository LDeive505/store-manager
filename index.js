const app = require('./app');
const productsControllers = require('./controllers/productsControllers');
const productValidation = require('./middlewares/productValidation');

require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productsControllers.getAllProducts);
app.get('/products/:id', productsControllers.getProductById);
app.post('/products', productValidation, productsControllers.createProduct);