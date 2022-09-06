module.exports ={
    index: (req,res) => res.render('index',{ title : "Home"}),
    contact:  (req,res) => res.render('contact',{ title : "Contact"}),
    admin:  (req,res) => {
        const admin = req.query.user
        res.render('admin',{ title : "admin", admin})
    },

    login:  (req,res) => res.render('login',{ title : "login"}),
    noEntry:  (req,res) => res.render('noEntry',{ title : "No Entry"}),
}