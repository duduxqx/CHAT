let express = require("express")
let app = express()
let http = require("http").createServer(app)
let io = require("socket.io")(http)

io.on("connection",(socket) => {
    socket.on("Welcome", (data) =>{
        console.log("Running event welcome")
        console.log(data)
    })

    socket.on("msg", (data) => {
        io.emit("showmsg", data)
        console.log(data)
    })
})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("Running Server")
})