console.log("connected");
const socket = io("ws://localhost:8080");

socket.on('message', text => {
    console.log("ok vai")
   const el = document.createElement("li"); 
   el.innerHTML = text;
   document.querySelector("ul").appendChild(el);

});

// onclick button
document.querySelector("button").onclick = () => {
   // select text from input
   console.log("ok vai2")
   const text = document.querySelector("input").value;
   // send message to server
   socket.emit('message', text);
};
