// Use "type: commonjs" in package.json to use CommonJS modules

const express = require('express');

const app = express();

const port = 3000;

app.set('view engine','ejs')
app.set('views','./views')
 // Define your routes

require("../db/dbconnect")(app)
require("../rotas/home")(app)

require("../rotas/getnotocias")(app)
require("../rotas/getidnotocias")(app)
require("../rotas/gettiponotocias")(app)

require("../rotas/postnoticias")(app)
require("../rotas/putnoticias")(app)
require("../rotas/delnoticias")(app)

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);

});

