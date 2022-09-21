let express = require('express');
let app = express();
const exphbs = require("express-handlebars")
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('index')
})

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/calc_bill', function (req, res) {


    res.render('/')
})

app.get('/price_plans', function (req, res) {

    res.render('index')
})

app.get('/price_plans/:id', function (req, res) {
    
    res.render('index')
})

app.get('/link_user', function (req, res) {
    
    res.render('index')
})

app.post('/link_user', function (req, res) {
    
    res.redirect('/price_plans/:id')
})


let PORT = process.env.PORT || 2007
app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})