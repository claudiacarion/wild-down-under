import express from 'express';
import * as path from 'path';
import { mammalsArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"),
    {
      mammals: mammalsArray
    })
});

export default router;