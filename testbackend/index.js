const express=require('express');

const app=express();

const admin=(req,res) =>{
  return res.send("Admin DashBoard");
}

const isAdmin=(req,res,next) =>{
  console.log("isAdmin is running");
  next();
}
const port = 8000

app.get('/', (req, res) => {
    return res.send('Home Page')
  })
  app.get('/admin', isAdmin,admin);

app.get('/login', (req, res) => {
  return res.send('You are visting login route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
