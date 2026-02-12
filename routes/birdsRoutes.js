import express from 'express';
import * as path from 'path';
import { birdsArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"),
  {
    groupArray: birdsArray,
    groupName: "Birds",
    groupDescription: "Meet our feathered superstars — part punk rock, part comedy act, all Aussie attitude!",
    animalArray: birdsArray
  })
});

router.get('/:slug', (req, res) => {
  const { slug } = req.params;

  const selectedAnimal = birdsArray.find(animal => animal.slug === slug);

  if (!selectedAnimal) {
    return res.status(404).send("Animal not found");
  }

  res.render(path.join(__dirname, "/views/pages/animals"),
  {
    groupName: "Birds",
    animals: [selectedAnimal],
    animalArray: birdsArray

  })
})

export default router;