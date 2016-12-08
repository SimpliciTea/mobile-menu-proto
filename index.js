const express = require('express');
const browserSync = require('browser-sync');
const app = express();


// config
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));


//routing
app.get('/', function(req, res) {
  res.render('index');
})

//server
app.listen(app.get('port'), () => {
  browserSync({
    proxy: 'localhost:' + app.get('port'),
    files: 'public/**/*',
    reloadDelay: 100
  })
});
