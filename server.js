//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.disable('x-powered-by');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/manantena-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/manantena-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);