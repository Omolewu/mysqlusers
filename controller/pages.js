
exports.homePage= (req, res)=>{
   
   if(req.cookies.isLoggedin){
    let user= req.cookies.user
    res.render('pages/index.ejs', {title:'Home', user: user});
   }

    
}