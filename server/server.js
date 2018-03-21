let express = require('express');
let app = express();
let bodyPaser = require('body-parser');
const PORT = 4000;

app.use(express.static('server/public'))

app.listen(PORT, () =>{
    console.log('Server is running on port:', PORT);
});