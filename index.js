const { createServer } = require('node:http');
const fs=require('fs');

const hostname = '127.0.0.1';
const port = 3070;
const Home_Gym=fs.readFileSync('./Home.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const services=fs.readFileSync('./services.html');

const server = createServer((req, res)=>{
  console.log(req.url);
  url=req.url;  
  res.statusCode = 210;
  res.setHeader('Content-Type', 'text/html');
  if(url=='#H'){
    res.end(Home_Gym);
    
  }
  else if(url=='/about'){
    res.end(about);
  }
  else if(url=='/contact'){
    res.end(contact);
  }
  else if(url=='/services'){
    res.end(services);
  }
  else{
    res.statusCode=404;
    res.end("<h2>404 Not found</h2>")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
