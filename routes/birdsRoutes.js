import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>This is the birds page</h1>')
});

router.get('/cassowary', (req, res) => {
  res.send('<h2>Cassowary</h2>')
})
router.get('/kookaburra', (req, res) => {
  res.send('<h2>Kookaburra</h2>')
})
router.get('/yellowtailedblackcockatoo', (req, res) => {
  res.send('<h2>Yellow Tailed Black Cockatto</h2>')
})

export default router;