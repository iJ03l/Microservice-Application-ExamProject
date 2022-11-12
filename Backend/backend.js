const express = require("express")
const app = express()


app.get("/api", (req, res) => {
    res.json({"word": ["TALENT PLUS"] })
})

app.listen(5000, () => { console.log("Server Started on PORT 5000") })