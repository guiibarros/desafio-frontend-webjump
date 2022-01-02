var app = require('connect')();
var serveStatic = require('serve-static');
var cors = require('cors');

app.use(cors());

// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

// Set header to force download
function setJsonHeaders(res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve the API on port 8888
app.listen(8888, function () {
  console.log(`Serving up API routes:
  Categories -> http://localhost:8888/api/v1/categories/list
  Products -> http://localhost:8888/api/v1/categories/{id}
  `)
});
