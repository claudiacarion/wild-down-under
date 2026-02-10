import express from 'express';
import * as path from "path";
import { mammalsArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page.ejs"),
  {
    groupArray: mammalsArray,
    groupName: "Mammals",
    groupDescription: ""
  })
});

router.get('/:names', (req, res) => {
  const { name } = req.params;

  const selectedAnimal = mammalsArray.find(animal => animal.slug === name);
  res.render(path.join(__dirname, "/views/pages/animals.ejs"),
  {
    animals: [selectedAnimal]
  })
})

export default router;