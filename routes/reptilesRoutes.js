import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>This is the reptiles page</h1>')
});

router.get('/frillneckedlizard', (req, res) => {
  res.send('<h2>Frill Necked Lizard</h2>')
})
router.get('/hawksbillturtle', (req, res) => {
  res.send('<h2>Hawksbill turtle</h2>')
})
router.get('/perentie', (req, res) => {
  res.send('<h2>Perentie</h2>')
})

export default router;