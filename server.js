const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      config        = require("./config"),
      path          = require("path");

const fileRoutes    = require("./routes/file-upload");

app.use(bodyParser.json()); // use od body parser to get values from get req


app.use("/api/v1/", fileRoutes);


if (process.env.NODE_ENV == 'production') {
    console.log("Prod");
  const appPath = path.join(__dirname, "..", "dist");
  app.use(express.static(appPath));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

const PORT = process.env.PORT || '5000';

app.listen(PORT, function(){
    console.log("Node server started on port " + PORT);
});