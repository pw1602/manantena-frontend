/*//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.disable('x-powered-by');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/pl'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/pl/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);*/

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// get all locales
const allLocales = [
	"en",
	"pl"
]
// set default to first in list
let locale = allLocales[0];

// middleware to capture and set locale
app.use((req, res, next) => {
  const paths = req.url.split('/');
  const localeInPath = paths[1];
  // supported locale
  if (allLocales.indexOf(localeInPath) != -1) {
    setLocale(localeInPath);
    next();
  // naked domain call i.e example.com or example.com/, 
  // set locale as default
  } else if (localeInPath === '') {
    setLocale('pl');
    next();
  // unknown locale, redirect user to default
  } else {
    res.redirect('/');
  }
});

// Point static path to dist for each locale
allLocales.forEach(locale => {
  app.use(`/${locale}`, express.static(path.join(__dirname, `dist/${locale}/`)));
});

// all other paths render index
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, `dist/${getLocale()}/index.html`));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost: ${port}`));

// Helper methods
function getLocale() {
  return locale;
}

function setLocale(lg) {
  locale = lg;
}