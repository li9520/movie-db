import express, { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { App } from './App';
import routes from './App/routes';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const sendServerSideData = async(req: Request, res: Response) => {
  const activeRoute = routes.find((route) =>
    matchPath(route.path, req.url)
  );

  let indexHTML = fs.readFileSync( path.resolve( __dirname, '../', 'public', 'index.html' ), {
    encoding: 'utf8'
  });

  const data = await activeRoute.fetchInitialData?.(req.path);
  const appHTML = renderToString( 
    <StaticRouter location={req.url} >
      <App serverData={data} />
    </StaticRouter> 
  );

  indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div><script>window.__SERVER_DATA__ = ${JSON.stringify(data)}</script>` );
  res.contentType( 'text/html' );
  res.status( 200 );

  return res.send( indexHTML );
}

const app = express();
app.use(express.static(path.join(__dirname,'..','build')))
const PORT = process.env.PORT || 3000;

app.get('/', sendServerSideData);
app.get('/movie/:id', sendServerSideData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
