import express from 'express';
import * as path from "path";

const router = express.Router();
const __dirname = path.resolve();


router.get('/',(req,res)=>{
  res.render(path.join(__dirname, "/views/pages/page.ejs"))
})

export default router;