const express = require("express");
const urlRoute = require("./routes/url.js");
const { connectMongo } = require("./connections/connections.js");
const URL = require("./models/url.js"); 
const path = require("path");
const staticRouter = require("./routes/staticRouter")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", staticRouter); // this means if some url starts with / use static router

const port = 5001;
const mongoURL = "mongodb://localhost:27017/short-url";

// Connect DB
connectMongo(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.set('view engine', 'ejs'); // tell express which view engine you are using 
app.set('views',path.resolve("./views")); //It tells Express where your view (template) files are stored. 
// path.resolve("./views") converts a relative path into a full system path.

app.use(express.urlencoded({extended: false}));  // middleware used to parse form data

// Routes
app.use("/url", urlRoute);

app.get("/test/url", async (req, res) => {
  const allUrl = await URL.find({});

  return res.render("home",{
    urls: allUrl,  //urls → variable name in EJS
                   //allUrl → data from database
  }); // Which view to render
});
// Redirect route
app.get("/url/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: [
            {
              timestamp: Date.now(),
            },
          ],
        },
      },
      { returnDocument: "after" }
    );

    if (!entry) {
      return res.status(404).send("Short URL not found"); 
    }

    res.redirect(entry.redirectUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));