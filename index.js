import express from 'express';
import homepageRoute from './routes/homepageRoutes.js';
import mammalsRoute from './routes/mammalsRoute.js';
import reptilesRoute from './routes/reptilesRoutes.js';
import birdsRoute from './routes/birdsRoutes.js';
import aboutusRoute from './routes/aboutusRoutes.js'

const app = express();

app.use(express.static('public'));

app.set('view engine',"ejs")

app.use('/' ,homepageRoute);
app.use('/mammals' ,mammalsRoute);
app.use('/reptiles' ,reptilesRoute);
app.use('/birds',birdsRoute);
app.use('/aboutus' ,aboutusRoute);

const port = 8647;
app.listen(port, () => (
  console.log(`Listening on port ${port}..`)
));