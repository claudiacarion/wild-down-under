import express from "express";
import * as path from "path";
import { teamArray } from "../data/data.js";


const router = express.Router();
const __dirname = path.resolve();


router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"),
  {
    groupArray: teamArray,
    teamName: "Zoo Keepers",
    groupDescription:
      "Meet the zoo keepers: we wrangle wild ideas, feed big dreams, and somehow keep the whole ecosystem thriving. No tranquilizers needed—just teamwork and snacks.",
    teamArray: teamArray,
    docTitle: "Wild Down Under | About Us",
  });
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const selectedMember = teamArray.find(team => team.slug === slug);

  if (!selectedMember) {
    return res.status(404).send("Team member not found");
  }

  res.render(path.join(__dirname, "/views/pages/animals"), {
    teamName: "Zoo Keepers",
    team: [selectedMember],
    teamArray: teamArray,
    docTitle: "Wild Down Under | About Us",
  });
});

export default router;
