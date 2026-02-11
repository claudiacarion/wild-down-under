import express from 'express';
import * as path from 'path';
import { birdsArray } from '../data/data.js';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, "/views/pages/page"),
    {
      birds: birdsArray
    })
});

export default router;