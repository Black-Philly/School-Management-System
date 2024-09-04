import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import studentRoute from './routes/studentRoute.js';
import teacherRoute from './routes/teacherRoute.js';
import courseRoute from './routes/courseRoute.js';
import bodyParser from 'body-parser';


dotenv.config()
const app = express()


const PORT = process.env.PORT || 4040


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.use('/students', studentRoute);
app.use('/teachers', teacherRoute);
app.use('/courses', courseRoute);


app.get('/',(req, res) => {
    res.render('home')
});


connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on http://localhost:${PORT}`)
    })

})