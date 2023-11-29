const express = require('express')

const app = express()

app.get("/", handleRoot)
app.get("/course", handleCourse)
app.get("/emp/:name", handleEmp)


function handleRoot(req, res) {
    res.send("Root method")
}

const course = {
    id: 1,
    name: "Full stack",
    duration: "2 months"
}

function handleCourse(req, res) {
    res.send(JSON.stringify(course))
}

function handleEmp(req, res) {
    const name = req.params.name
    res.send("Hello " + name)
}

app.listen(3000, () => {
    console.log("Server is running on 3000")
})