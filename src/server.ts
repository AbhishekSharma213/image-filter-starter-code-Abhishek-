import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {
  const applica = express();
  const portno = process.env.PORT || 8082;
   applica.use(bodyParser.json());
    
    applica.get("/filteredimage",
    async (req: Request, res: Response) => {
      const { i } = req.query;
         if (!i) {
        res.status(400).send("Invalid URL");
      }

      const filteredimagepath = await filterImageFromURL(i);
      // res.send(result);
      res.status(200).sendFile(filteredimagepath, {}, (err) => {
          err ? res.status(500).send({ message: 'Error while transfering file...' }) : deleteLocalFiles([filteredimagepath]);
        });
  });
  applica.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  applica.listen( portno, () => {
      console.log( `server running http://localhost:${ portno }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();