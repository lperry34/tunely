
var express = require('express'),
    app = express();

    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
        extended: true
    }));


app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static('public'));




















app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is up and running on http://localhost:3000/');
});
