// Job of this middleware is to Allow only logged-in users to access certain routes

const { getUser } = require("../service/auth");


async function restirctToLoggedInUserOnly(req,res,next){
    // const userUid = req.cookies?.uid;  // get session id from cookie  ? means that find uid only if cookies are there
    // Commented above line because now we will try using authorization header and token not cookies
    const userid = req.headers["authorization"];
    
    if(!userUid) return res.redirect('/login'); // if no uid then redirect o login page
        
    const user = getUser(userUid); // get the user with that uid
    if(!user) return res.redirect("/login"); // If user is not found then redirect to login page
    
    req.user = user; // attach user fetched to req
    next(); // move to next middleware
}

async function checkAuth(req,res,next) {
    // works same as above just it doesnt force user to be logged in
    const userUid = req.cookies?.uid;  // get session id from cookie  ? means that find uid only if cookies are there
   
    const user = getUser(userUid); // get the user with that uid
    
    req.user = user; // attach user fetched to req
    next(); // move to next middleware
}

module.exports = {
    restirctToLoggedInUserOnly,
    checkAuth,
};