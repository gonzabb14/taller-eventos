let div = document.getElementsByTagName("div");

div[0].addEventListener("click", function(e) {
    alert("Hola! Soy el div");
});

function saludar(event) {
    event.stopPropagation();
    alert("Hola");
}