import * as banco from "./banco.js";

function carregarDados() {
    console.log(banco.carregarMercados());
}



window.onload = () => {
    
    carregarDados();
}