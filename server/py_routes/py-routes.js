var express = require('express'),
app = module.exports = express.Router();

app.get('/allLedState', function(req, res){
    //console.log(allLedState);
    
    // console.log('Response : ', req.body);
    res.status(200).send(allLedState).end();
    // for(var i = 0; i < 6; i++){
    //     allLedState[i] = !allLedState[i];
    // }
});
app.post('/ledState', function(req, res){
    var data = req.body.data.split(',');
    console.log(data);
    var led = data[0], state = data[1];
    if(state == 0)
        allLedState[led-1] = false;
    if(state == 1)
        allLedState[led-1] = true;

    console.log(allLedState);
    
    res.status(200).send('OK').end();
});