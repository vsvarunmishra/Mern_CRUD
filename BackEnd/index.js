const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const routesData = require('./Routes/index');
const PORT = 3001
mongoose.connect(
    `mongodb+srv://vsvarunmishra:Va831843@cluster0.u5nmg.mongodb.net/ecommerce?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        //useCreateIndex:true
    }
).then(() => {
    console.log('DataBase Connected:');
});
app.use(cors());

app.use(express.json());

app.use('/', routesData);

app.listen(PORT,() => {
     console.log(`Server Is Running At Port ${PORT}`)
})