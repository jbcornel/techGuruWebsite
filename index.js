const express = require('express');
const app = express();
var cors = require('cors')


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log(`listening on ${PORT}`));
app.use(express.static('./'));

app.use(cors())

app.get('/', function (req, res) {
    res.send('index.html')
  })

