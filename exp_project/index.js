var express = require('express');
var port = 3000;
var app = express();
var path = require('path');
var HOME_PATH = path.join(__dirname);
app.set('view options',{layout:false});
app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    res.sendFile(HOME_PATH+'/public/index.html')
})

app.listen(port,function(){
    console.log("Server is running on port 3000");
})