import express from 'express';
import * as path from 'path';
import { mammalsArray, reptilesArray, birdsArray } from '../data/data.js';
import { log } from 'console';

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

router.get('/',(req,res)=>{
  res.render(path.join(__dirname, "/views/pages/page"), {
    allAnimalsArray: animalsByGroup
  })
})

router.get('/home/:slug', (req, res) => {
  const { slug } = req.params;

  const selectedAnimal = allAnimals.find(animal => animal.slug === slug)

  if (!selectedAnimal) {
    return res.status(404).send("Animal not found");
  }

  res.render(path.join(__dirname, "/views/pages/animals"), {
    allAnimals: "Zoo",
    homeAnimal: [selectedAnimal],
  });
});

export default router;
