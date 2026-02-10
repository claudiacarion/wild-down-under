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
    groupDescription: "Cold-blooded cool customers — masters of disguise, drama, and deep-sea chill."
  })
});

router.get('/:slug', (req, res) => {
  const { slug } = req.params;

  const selectedAnimal = reptilesArray.find(animal => animal.slug === slug);

  if (!selectedAnimal) {
    return res.status(404).send("Animal not found");
  }

  res.render(path.join(__dirname, "/views/pages/animals.ejs"),
  {
    groupName: "Reptiles",
    animals: [selectedAnimal]
  })
})

export default router;