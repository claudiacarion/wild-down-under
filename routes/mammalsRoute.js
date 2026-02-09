import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>This is the mammals page</h1>')
});

router.get('/echidna', (req, res) => {
  res.send('<h2>Echidna</h2>')
})
router.get('/quokka', (req, res) => {
  res.send('<h2>Quokka</h2>')
})
router.get('/tasmaniandevil', (req, res) => {
  res.send('<h2>Tasmanian Devil</h2>')
})

export default router;