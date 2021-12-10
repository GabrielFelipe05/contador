const p = document.getElementById ("oi");
let numero = 0;

function aumentar() {
    p.innerText = ++numero
}
function diminuir() {
    if(numero > 0)
    p.innerText = --numero
}
function zerar() {
    p.innerText = numero = 0
}
