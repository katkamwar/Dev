var http=require('http');

function onRequest(request,response){

console.log("A user made a request"+request.url);
response.writeHead(200,{"context-Type":"text/plain"});
response.write("Hellooooo");
response.end();

}

http.createServer(onRequest).listen(8888);
console.log("server is now ruuning.....");
