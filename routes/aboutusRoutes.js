import express from 'express';
import * as path from "path";
import { teamArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page.ejs"),
  {
    groupArray: teamArray,
    teamName: "Zoo Keepers",
    groupDescription: 
    "Meet the zoo keepers: we wrangle wild ideas, feed big dreams, and somehow keep the whole ecosystem thriving. No tranquilizers needed—just teamwork and snacks."
  })
});

router.get('/:names', (req, res) => {
  const { name } = req.params;

  const selectedMember = teamArray.find(team => team.slug === name);
  res.render(path.join(__dirname, "/views/pages/animals.ejs"),
  {
    team: [selectedMember]
  })
})

export default router;