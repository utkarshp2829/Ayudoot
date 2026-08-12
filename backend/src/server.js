const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());
app.get("/", (req,res) => {
    res.send("Server is running!")
});
app.get("/signup", (req,res) => {
    res.send("Signup page")
});
app.get("/api/health", (req,res) => {
    res.json({
        status: "OK",
        message: "Ayudoot backend is running"
    })
});
app.post("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        receivedData: req.body
    });
});


app.listen(3000);