var socket = io("http://localhost:3000");

socket.on("server-send-rooms", function(data){
   data.map(function(r){
      $("#dsRoom").append("<h4>" + r + "</h4>");
   })
})

$(document).ready(function(){
   $("#btnTaoRoom").click(function(){
      socket.emit("tao-room", $("#txtRoom").val());
   })
});