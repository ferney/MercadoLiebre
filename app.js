const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
/*app.listen(3030, () => console.log('Servidor web iniciado en 3030')); */
/*esto abajo par aeroku*/
app.listen(process.env.PORT || 3000, function(){
console.log('Servidor corriendo en el puerto 3000');
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/home.html')); 
});
app.get('/register',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/register.html'));
});
app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/login.html'));
});




/*app.get('/babbage',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/babbage.html'));
});
app.get('/berners-lee',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/berners-lee.html'));
});
app.get('/clarke',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/clarke.html'));
});
app.get('/hamilton',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/hamilton.html'));
});
app.get('/hopper',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/hopper.html'));
});
app.get('/lovelace',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/lovelace.html'));
});
app.get('/turing',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/turing.html'));
});
app.get('/lamar',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/lamar.html'));
});
app.listen(3030, () => console.log('Servidor web iniciado en 3030'));*/
