exports.loginPage = (req, res)=>{
    res.clearCookie('user');
    res.clearCookie('isLoggedin');
 res.render('auth/login.ejs',{
    title: "Login"
 });
}
exports.login = (req, res)=>{
  const {email, password}= req.body

  let user ={
    name: 'Blessing Aderibigbe',
    age: 44,
    email: "blessing@oicxhub.org",
    phone: '08102519926',
    password: '1234'
  }

  if(email === user.email &&
         password=== user.password){
           req.session.isLoggedIn = true;
            console.log(req.session)
         }

//   if(email === user.email &&
//      password=== user.password){
//         res.cookie('isLoggedin', true, {
//            httpOnly:true,
//            sameSite: true,
//            secure: false,
//            maxAge: new Date('2024-04-07')

//         });
//         res.cookie('user', user )

//   }

  res.redirect('/')

}
exports.registerPage=(req, res)=>{
    res.render('auth/register.ejs', {
        title: 'Register'
    });
}
exports.register = (req, res)=>{
    //
}