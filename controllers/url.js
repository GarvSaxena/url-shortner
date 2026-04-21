const {nanoid} = require("nanoid");
const URL = require("../models/url");

async function generateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json("URL is required");
    const shortID = nanoid(8); // generates a nano id of 8 characaters
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory: [],
        createdBy: req.user._id,
})

// return res.json({id: shortID}) - instead using this(because ot returns json data)
// we will again render the home page
// But will send and id also
return res.render('home', {
    id:shortID,
    
});
}

async function getAnalytics(req,res){
    const shortId = req.params.shortId;
    const resultId  = await URL.findOne({shortId});
    return res.json({
        totalclicks: resultId.visitHistory.length,
        analytics: resultId.visitHistory,
    });
}
module.exports = {
    generateNewShortUrl,
    getAnalytics
}