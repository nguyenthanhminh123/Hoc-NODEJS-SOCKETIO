var express = require("express");
var app = express();
app.use(express.static("./public")); 
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function(socket){
<<<<<<< HEAD

    console.log("co nguoi ket noi" + socket.id);

    socket.on("disconnect", function() {
        console.log(socket.id + " ngat ket noi!!!");
    });
=======
    console.log("co nguoi ket noi")
>>>>>>> a2f65be87ff81752441a9b2d7950b1db5b6ccbd1
});

app.get("/", function(req, res) {
    res.render("trangchu");
});
