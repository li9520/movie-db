import express from 'express';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { App } from './App';
import { MovieService } from './api';

const app = express();
app.use(express.static(path.join(__dirname,'..','build')))
const PORT = process.env.PORT || 3000;

app.get('/', async(req, res) => {

  let indexHTML = fs.readFileSync( path.resolve( __dirname, '../', 'public', 'index.html' ), {
    encoding: 'utf8'
  });

  const movies = await MovieService.getMovies();
  const appHTML = renderToString( <App movies={movies}/> );

  indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div><script>window.__SERVER_DATA__ = ${JSON.stringify(movies)}</script>` );
  res.contentType( 'text/html' );
  res.status( 200 );

  return res.send( indexHTML );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});