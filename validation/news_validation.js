module.exports = function(req, res, next){
    let err = {};
    let{title,short_description, description} =req.body;
    if(title == '' || !title){
        err.title = 'Title is required';
    }

    if(short_description == '' || !short_description){
        err.short_description = 'Short Description is required';
    }

   if(description.replace(/^\s+|\s+$/g,'') == '' || !description){
       err.description = 'Description is required';
   }

   if(Object.keys(err).length !== 0 ) {
       return res.render('news/form.ejs', {err: err, title, short_description, description});
    }
   next();
}
