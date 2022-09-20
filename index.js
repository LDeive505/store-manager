const app = require('./app');
const productsRoute = require('./routes/productsRoute');
const salesRoute = require('./routes/salesRoute');

require('dotenv').config();

app.use('/products', productsRoute);
app.use('/sales', salesRoute);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
