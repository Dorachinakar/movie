const express = require("express"),
app = express(),
  port =  process.env.PORT || 3000;
  const path = require("path");
  
  app.use(express.static("public"));
  const publicPath1 =  path.join(__dirname, "public","home","build")

  app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath1, "index.html"));
  });
  
  

app.listen(port, ()=>{console.info(`start server start listening on port ${port}`)})


