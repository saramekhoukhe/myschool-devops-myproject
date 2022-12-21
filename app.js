const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
mongoose.set('strictQuery', true);
require ('dotenv/config');
app.use(bodyParser.json());
//import routes
const postsRoute = require ('./routes/posts');

app.use('/posts', postsRoute);
//routes
app.get('/', (req,res)=> {
    res.send('Devops Project');
} ); 

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },() => console.log('connected to the db'))

app.listen(3000);