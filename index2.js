
const quadrado = document.getElementById('quadrado');

quadrado.onmouseenter = function() {
    quadrado.innerText = "Passou o mouse";
}


quadrado.onclick = function() {
    quadrado.innerText = "Clicou";
}


quadrado.onmouseleave = function() {
    quadrado.innerText = "Tirou o mouse";
}