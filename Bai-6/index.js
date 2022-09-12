var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var mangUsersOnline = [];


io.on("connection", function(socket){
    console.log(" Béo đã kết nối, socket id: "  + socket.id);

    socket.on("client_gui_username", function(data){
        console.log(" Có người vừa đăng kí username la :" + data);
        if ( mangUsersOnline.indexOf(data)>=0) {
            socket.emit("server-send-dangki-thatbai", + data);
        }else{
            mangUsersOnline.push(data)
            io.sockets.emit("server-send-dangki-thanhcong", {username:data, id:socket.id});
        }
    })
});

app.get("/", function(req, res){
    res.render("trangchu");
})