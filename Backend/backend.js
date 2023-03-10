const express = require("express")
const app = express()


app.get("/api", (req, res) => {
    res.json({"users": ["i-j03l from the backend"] })
})

app.listen(5000, () => { console.log("Server Started on PORT 5000") })