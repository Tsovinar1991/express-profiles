const fs = require('fs');

module.exports = (req,res, next)=>{
    let filepath = './model/news.json';
    fs.readFile(filepath, 'utf8',(err, data)=>{
        if(err){
            console.log(err);
        }
        let read_data = data.toString()?JSON.parse(data):[];
        console.log(read_data);
        res.render('news/news', {news:read_data});
    });

}