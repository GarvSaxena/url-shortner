const User = require("../models/userAuth")
const {v4: uuidv4} = require("uuid")
// v4 means UUID version 4, which generates a random unique ID.
// { v4: uuidv4 } means:
// Take v4 from the package
// Rename it to uuidv4 (just for convenience)

const {getUser, setUser} = require("../service/auth")

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

    // const sessionId = uuidv4();
    const token = setUser(user);
    // setUser(sessionId, user);
    // res.cookie("uid" , sessionId);
    // res.cookie("uid", token, { ---- removing this for now , to use token, authorization without cookies
        // domain:"localhost"  - Set the domain where the cookie could be used
        // maxAge: 5000 Sets the expiry time of cookie in miliseconds
    // }); // refer to - https://expressjs.com/en/5x/api.html#res.cookie
//   This line sends a cookie to the browser. // "uid" → cookie name
                                            // sessionId → value stored in cookie
// To parse cookie we have to install a package called - cookie-parser
    return res.json({token});
    return res.redirect("/") // Redirect to homepage
}
module.exports = {userSignUp, userLogin};