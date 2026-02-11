import express from "express";
import * as path from "path";
import { birdsArray, mammalsArray, reptilesArray } from "../data/data.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"));
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const groupArray = [birdsArray, mammalsArray, reptilesArray];

  const selectedAnimal = groupArray.forEach(group => group.forEach(animal => animal.find(animal.slug === slug)));

  if (!selectedAnimal) {
    return res.status(404).send("Animal not found");
  }

  res.render(path.join(__dirname, "/views/pages/animals"), {
    allAnimals: "Zoo",
    homeAnimal: [selectedAnimal],
  });
});

export default router;
