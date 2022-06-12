const express = require("express"),
app = express(),
  port =  process.env.PORT || 80;

  
  app.use(express.static("public"));
  

app.get("/", (req, res) => {
  return res.json({ hello: "world" })
})
app.listen(port, ()=>{console.info(`start server start listening on port ${port}`)})


