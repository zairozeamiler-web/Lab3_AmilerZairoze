const messageButton = document.getElementById("messageButton"); 
const message = document.getElementById("message"); 
messageButton.addEventListener("click", function () { 
message.textContent = "My website is ready for deployment!"; 
}); 