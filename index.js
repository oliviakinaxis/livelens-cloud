const express = require('express'); // Server

//Express App
const app = express();
var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port ' + port + ' !'));

app.get('/', (req, res) => res.send('Hello from cloud app!'))

app.post('/fulfillment', function (req, res) {
    var output = "Hello from Azure webapp"
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "speech": output,
        "displayText": output
    }));
});