import express from 'express';
import * as path from 'path';
import { mammalsArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"),
  {
    groupArray: mammalsArray,
    groupName: "Mammals",
    groupDescription: "Our mammals are quirky rule-breakers — eggs? Smiles? Screams? We've got the lot!",
    animalArray: mammalsArray
  })
});

router.get('/:slug', (req, res) => {
  const { slug } = req.params;

  const selectedAnimal = mammalsArray.find(animal => animal.slug === slug);

  if (!selectedAnimal) {
    return res.status(404).send("Animal not found");
  }

  res.render(path.join(__dirname, "/views/pages/animals"),
  {
    groupName: "Mammals",
    animals: [selectedAnimal]
  })
})

export default router;