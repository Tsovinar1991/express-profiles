// Առաջադրանք 1
// 1. Ստեղծել սերվեր express-ի միջոցով և միացնել ejs -view engine-ը։
//  2. Ունենալ 4 route
// GET  /
// POST /news
// GET  /news
// GET  /news/:id
//
// 2․1 / - GET -ով դիմելիս ejs-ի օգնությամբ տպեք HTML form, որը կունենա հետևյալ input-ները՝
//  title, description, short_description։
//
//  2.2. /news- ին POST-ով դիմելիս պետք է HTML-ի form-ի միջոցով փոխանցենք հետևյալ տվյալները` {title, description, short_description}, ստացված տվյալները ավելացնել news.json ֆայլի մեջ և redirect անել(res.redirect) /news էջ։
//
//  2.3. /news- ին GET-ով դիմելիս պետք է վերադարձնենք news.json -ի մեջ եղած բոլոր news-երը և ejs-ի օգնությամբ ցուցադրենք browser-ում news-երի title-ը և short_description-ը"։
//
// 2․4․  GET /news/:id -ին դիմելիս news.json-ից ստացած news-ի մեջ գտեք համապատասխան id-ով news-ը և վերադարձրեք browser-ին: Ejs-ի օգնությամբ տպեք news-ի title-ը և description-ը։


const express = require('express');
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';


//setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get('/',(req, res)=>{
    res.render('news/form', {err:[]});
});
app.use('/news', require('./routes/news.js'));


app.listen(port, host,()=>{
    console.log(`Server is working`)
})