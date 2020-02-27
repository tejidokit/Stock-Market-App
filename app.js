//set up Express JS
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path =  require('path');

const PORT = process.env.PORT || 5000;

//set static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

//Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Handlebars test 
const otherstuff = "hello there, this is the other stuff...";

//Set Handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

//create about page route
app.get('/about', function (req, res) {
    res.render('about');
});

/* Git commands used
git init 
 git config --global user.name "Kit Tejido"
 git config --global user.email "tejidokit@gmail.com"
 git config --global push.default matching
 git add .
 git commit -m 'initial commit'
 git remote add origin https://github.com/tejidokit/nodejsstockmarketapp.git
 git push -u origin master
 */


