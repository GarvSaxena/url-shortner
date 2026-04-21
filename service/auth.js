const sessionIdToUserMap = new Map();
// You create a Map (key → value store)
// It will store:
// key → sessionId
// value → user object

function setUser(id,user){
    sessionIdToUserMap.set(id,user);  //Store user data using a session ID
}
function getUser(id){
    return sessionIdToUserMap.get(id); // Retrieve user data using session ID
}

module.exports = {
    getUser,
    setUser
}