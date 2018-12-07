let express = require('express');
let bodyParser = require('body-parser');
let PORT = 4000;

let app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));