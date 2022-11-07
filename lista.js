import * as banco from "./banco.js";

function carregarDados() {
    // console.log(banco.carregarMercados());

    let dadosMercado = document.getElementById("cadastrarMercardo");
    let listDeMercados = banco.carregarMercados();

    listDeMercados.forEach(e=> {
        dadosMercado.innerHTML =  dadosMercado.innerHTML + `<option value="${e.idMercado}">${e.nomeMercado}</option>`
    });
}




 
window.onload = () => {
    
    carregarDados();
}