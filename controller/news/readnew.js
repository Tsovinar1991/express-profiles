const fs = require('fs');

module.exports = (req,res, next)=>{
    let filepath = './model/news.json';
    fs.readFile(filepath, 'utf8',(err, data)=>{
        if(err){
            console.log(err);
        }
        let read_data = data.toString()?JSON.parse(data):[];
        let single_new = read_data.find((el)=>{return el.id == req.params.id});
        if(!single_new){
            res.send('New is not found');
        }
        res.render('news/new', {single_new:single_new});
    });

}