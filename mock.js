var http = require('http');
http.createServer(function(req,res){
    res.write("hello from node js");
    res.end();
}).listen(5000)

function complexExp(add)
{
    console.log(add(200,300))
}
complexExp(function(a,b)
{
    return a+b
})

