const { STATES } = require("mongoose")
const secret = "garv@123";

// const sessionIdToUserMap = new Map(); -- THIS IS STATE
// WE WILL REMOVE THIS BECAUSE WE DONT WAS TO USE STATES
// BECAUSE WHEN WE USE STATE THE USER GETS LOGGED OUT WHEN SERVER IS RESTARTED
// You create a Map (key → value store)
// It will store:
// key → sessionId
// value → user object

//Using jwt
const jwt = require("jsonwebtoken");

// function setUser(id,user){
//     sessionIdToUserMap.set(id,user);  //Store user data using a session ID
// }

function setUser(id,user){
    return jwt.sign(user,secret);
} 

function getUser(id){
    return sessionIdToUserMap.get(id); // Retrieve user data using session ID
}

module.exports = {
    getUser,
    setUser
}