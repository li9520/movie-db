const express = require('express');
const { renderToString } = require('react-dom/server');
const fs = require( 'fs' );
const path = require( 'path' );
const { App } = require('./App');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let indexHTML = fs.readFileSync( path.resolve( __dirname, '../', 'public', 'index.html' ), {
    encoding: 'utf8'
  });

  const appHTML = renderToString( <App /> );

  indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div>` );
  res.contentType( 'text/html' );
  res.status( 200 );

  return res.send( indexHTML );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});