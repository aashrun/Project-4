const express = require('express')
const route = require('../route/route')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());


 mongoose.connect("mongodb+srv://skygupta:Z1Rn76vZdIBqi2FE@cluster0.333as.mongodb.net/group50Database", {useNewUrlParser: true})
 .then(() => console.log("MongoDb is connected"))
 .catch(err => console.log(err))


app.use('/',route);
app.listen(4000, function(){
    console.log('Express app running on port ' + 4000)
})
