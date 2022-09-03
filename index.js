const app = require('./app');
const productsControllers = require('./controllers/productsControllers');
const productValidation = require('./middlewares/productValidation');
const salesControllers = require('./controllers/salesControllers');
const saleValidation = require('./middlewares/saleValidation');

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productsControllers.getProducts);
app.get('/products/:id', productsControllers.getProductById);
app.post('/products', productValidation, productsControllers.createProduct);
app.put('/products/:id', productValidation, productsControllers.updateProduct);
app.delete('/products/:id', productsControllers.deleteProduct);

app.get('/sales', salesControllers.getSales);
app.get('/sales/:id', salesControllers.getSaleById);
app.post('/sales', saleValidation, salesControllers.createSale);
app.delete('/sales/:id', salesControllers.deleteSale);
app.put('/sales/:id', saleValidation, salesControllers.updateSale);
