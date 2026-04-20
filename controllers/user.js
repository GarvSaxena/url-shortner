const User = require("../models/userAuth")

async function userSignUp(req,res) {
    const {name, email, password} = req.body;
    await User.create({
        name, 
        email,
        password,
    });
    return res.redirect("/"); // Redirect to homepage
}


async function userLogin(req,res) {
    const {name , email, password} = req.body;
    const user = await User.findOne({email, password})  // Mongo expects an object
    if(!user) return res.render("login", {  // FIX: check result, not model-so use user not User
        error: "Invalid username or password"
    });
    return res.redirect("/") // Redirect to homepage
}
module.exports = {userSignUp, userLogin};