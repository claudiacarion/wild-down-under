import express from 'express';
import * as path from "path";
import { reptilesArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page.ejs"),
  {
    groupArray: reptilesArray,
    groupName: "Reptiles",
    groupDescription: ""
  })
});

router.get('/:names', (req, res) => {
  const { name } = req.params;

  const selectedAnimal = reptilesArray.find(animal => animal.slug === name);
  res.render(path.join(__dirname, "/views/pages/animals.ejs"),
  {
    animals: [selectedAnimal]
  })
})

export default router;