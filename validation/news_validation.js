module.exports = function(req, res, next){
    let err = [];
    let{title,short_description, description} =req.body;
    if(title == '' || !title){
        err.push('Title is required');
    }

    if(short_description == '' || !short_description){
        err.push('Short Description is required');
    }

   if(description.replace(/^\s+|\s+$/g,'') == '' || !description){
       err.push('Description is required');
   }

   if(err.length !== 0 ) {
       return res.render('news/form.ejs', {err: err, title, short_description, description});
    }
   next();
}
