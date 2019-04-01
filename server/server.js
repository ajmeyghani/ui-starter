const path = require("path");
const express = require("express");
const favicon = require('express-favicon');
const app = express();
const clientRoot = path.join(__dirname, "/../dist/public");
app.use(favicon(path.join(clientRoot, "favicon.png")));


/* Root path. */
app.use("/", express.static(clientRoot));

/* some endpoint */
app.get("/api/posts/1", (request, response) => {
  response.json({
    id: 1,
    title: "hello world",
  });
});

/* Go to index.html for all requests. */
app.get("*", (req, res, next) => {
  res.sendFile("index.html", {root: clientRoot});
});

const PORT = process.env.PORT || 8989;
app.listen(PORT, () => console.log(`Dev Server listening on PORT ${PORT}`));