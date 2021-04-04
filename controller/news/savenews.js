const fs = require('fs');

module.exports = (req, res, next) => {
    let {title, short_description,description} = req.body;
    let filepath = './model/news.json';
    fs.readFile(filepath, 'utf8',(err, data)=>{
        if(err){
            console.log(err);
        }

        let read_data = data.toString()?JSON.parse(data):[];
        let data_to_save = {
            id:read_data.length+1,
            title,
            short_description,
            description
        }
        read_data.push(data_to_save);
       fs.writeFile(filepath, JSON.stringify(read_data),(err, data)=>{
           if(err){
               console.log(err);
           }
           res.redirect('/news');
       })
    })
}