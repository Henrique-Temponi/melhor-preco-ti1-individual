let bancolista =  JSON.parse(localStorage.getItem("lista"));

//Esse é o exemplo do banco de dados que tive, secaso tiver uma ideia diefrente que te ajude você me fala.
if(!bancolista){
    ListaA = [
        {
            "lista":"A",
            "Id": "3",
            "Produto": "Não exite lista pronta, Crie uma",
            "col1":"",
            "col2":"",
            "col3":""
        }
    ]
    ListaB = [
         
        {
            "lista":"B",
            "Id": "",
            "Produto": "Não exite lista pronta, Crie uma",
            "col1":"",
            "col2":"",
            "col3":""
        }
       
    ]
    ListaC = [
        {
            "lista":"C",
            "Id": "",
            "Produto": "Não exite lista pronta, Crie uma",
            "col1":"",
            "col2":"",
            "col3":""
        }
    ]
}

function exibeLista(botao) {
    //Esse if é para quando apertar um botâo ele vai mostrar cada lista diferente. 
    //Eu pensei no caso de cada lista ser gravada em varias partes como no exemplo acima, ai se caso ver que da problema se me fala que altero.
    // Essas colunas é para o seu filtro, eu ainda não tenho ideia de como esconder e quando usar seu filtro elas aprecerem, tipo "mais perto, distancia razoavel e longe, ou barato mediano e caro".
    //$("#table-lista").html(""); Isso é para limpar a lista quando apertar o botâo
    if (botao==1) 
    {
            $("#table-lista").html("");
        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < ListaA.length; i++) {
            let item =ListaA[i];    
            $("#table-lista").append(`<tr><td scope="row">${item.Produto}</td>
                                            <td>${item.col1}</td>
                                            <td>${item.col2}</td>
                                            <td>${item.col3}</td>
                                        </tr>`);
        }
    } 
    else 
    {
        if(botao==2)
        { $("#table-lista").html("");
        // Popula a tabela com os registros do banco de dados
        for (i = 0; i < ListaB.length; i++) {
            let item =ListaB[i];    
            $("#table-lista").append(`<tr><td scope="row">${item.Produto}</td>
                                            <td>${item.col1}</td>
                                            <td>${item.col2}</td>
                                            <td>${item.col3}</td>
                                        </tr>`);}
        }
        else{
            $("#table-lista").html("");
    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < ListaC.length; i++) {
        let item =ListaC[i];    
        $("#table-lista").append(`<tr><td scope="row">${item.Produto}</td>
                                        <td>${item.col1}</td>
                                        <td>${item.col2}</td>
                                        <td>${item.col3}</td>
                                    </tr>`);
            }
        }
    }
}
