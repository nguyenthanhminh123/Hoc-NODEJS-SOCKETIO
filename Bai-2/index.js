var express = require("express");
var app = express();
app.use(express.static("./public")); 
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);f

io.on("connection", function(socket){

    console.log(" Béo đã kết nối : " + socket.id);

    socket.on("CLIENT-SEND-MAU", function(data){
        console.log(data);
        io.sockets.emit('SERVER-SEND-MAU', data)
    });
});

app.get("/", function(req, res) {
    res.render("trangchu");
});
