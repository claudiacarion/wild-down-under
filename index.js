import express from 'express';
import 'dotenv/config';
import homepageRoute from './routes/homepageRoutes.js';
import mammalsRoute from './routes/mammalsRoute.js';
import reptilesRoute from './routes/reptilesRoutes.js';
import birdsRoute from './routes/birdsRoutes.js';
import aboutusRoute from './routes/aboutusRoutes.js'

const app = express();

app.use(express.static('public'));

app.set('view engine',"ejs")

/*routes*/
app.use('/' ,homepageRoute);
app.use('/mammals' ,mammalsRoute);
app.use('/reptiles' ,reptilesRoute);
app.use('/birds',birdsRoute);
app.use('/aboutus' ,aboutusRoute);

/*404 fallback */
app.use((req, res) => {
  res.status(404).send(`
    <h2>Page Not Found!</h2>
    <p>The page ${req.originalUrl} does not exist </p>
    <a href="/">Back to Homepage</a>
  `)
})

// const port = process.env.PORT;
const port = 1234;
app.listen(port, () => (
  console.log(`Listening on port ${port}..`)
));