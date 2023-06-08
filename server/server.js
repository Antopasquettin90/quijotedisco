const express = require('express');
const app = express();
const port = 3000;

app.get('/api/product/:id', (req, res) => {
  const productId = req.params.id;
  const productDetails = {
    id: productId,
    name: 'Ejemplo de producto',
    price: 9.99,
    description: 'Este es un producto de ejemplo',
  };

  res.json(productDetails);
});

app.listen(port, () => {
  console.log(`Servidor API iniciado en http://localhost:${port}`);
});
