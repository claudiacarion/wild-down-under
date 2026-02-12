import express from 'express';
import * as path from 'path';
import { mammalsArray, reptilesArray, birdsArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

const allAnimals = [
  ...mammalsArray,
  ...reptilesArray,
  ...birdsArray,
];

const animalsByGroup = [];

allAnimals.forEach(animal => {
  let group = animalsByGroup.find(g => g.name === animal.group);

  if (!group) {
    group = { name: animal.group, animals: [] };
    animalsByGroup.push(group);
  }

  group.animals.push(animal);
});

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"),
    {
      allAnimalsArray: animalsByGroup

    })
});

export default router;