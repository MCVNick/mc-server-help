require('dotenv').config()
const { SERVER_PORT } = process.env
const express = require('express');
const { json } = require('express')
const expressStaticGzip = require('express-static-gzip')
const sm = require('sitemap')
const fs = require('fs')
const ITEMS = require('./assets/json-requests/items')

const app = express();

// For sitemap
const sitemap = sm.createSitemap ({
  hostname: 'https://mcid.nicholasmcqueen.com',
  cacheTime: 31536000,
  urls: [
    { url: '/',  changefreq: 'daily', priority: 1.0 },
  ]
});

// For defining where the path is
const path = require('path')
app.use(express.static(`${__dirname}/../build`));

// GZip compression
app.use(`/build/client`, expressStaticGzip(`/build/client`, {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz'
  }],
  orderPreference: ['br', 'gz']
}));

// Making app use json body parser
app.use(json())

// Telling the server where to listen and what for through massive
const port = SERVER_PORT || 4333
app.listen(port, console.log('The server is running on port', port))

// ****************************************************************
// ---------------------Item Requests------------------------------
// ****************************************************************
app.get('/api/items', (req, res) => {
    let { search } = req.query
    search ? search = search.split('%20').join(' ').toLowerCase() : null
    let items = ITEMS

    if (search) {
        items = items.filter(obj => {
            shouldKeep = false

            Object.keys(obj).forEach((element) => {
                if(element === 'name' || element === 'id') {
                  if(String(obj[element]).toLowerCase().includes(search)) {
                      shouldKeep = true
                  }
                }
            })

            return shouldKeep
        })
    }

    items.length > 0 ? res.send(items) : res.sendStatus(404)
})

app.get('/api/items/image', (req, res) => {
    let { id, meta } = req.query

    const path = `${__dirname}\\assets\\items\\${id}-${meta}.png`

    if(id && meta && fs.existsSync(path)) {
        res.sendFile(path)
    } else {
        res.sendStatus(404)
    }
})

// ****************************************************************
// -----------------------Sitemap----------------------------------
// ****************************************************************
app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

// ****************************************************************
// -----------------------Catch Everything-------------------------
// ****************************************************************
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})