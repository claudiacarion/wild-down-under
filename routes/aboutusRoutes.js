import express from 'express';
import * as path from "path";
import { teamArray } from '../data/data';

const router = express.Router();
const __dirname = path.resolve();

router.get('/',(req,res)=>{
  res.send('<h1>This is the about us page</h1>')
})

router.get('/:names', (req, res) => {
  const { name } = req.params;

  const selectedAnimal = teamArray.find(member => member.slug === name);
  res.render(path.join(__dirname, "/views/pages/animals.ejs"),
  {
    animals: [selectedAnimal]
  })
})

export default router;