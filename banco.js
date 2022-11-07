export function carregarDadosClientes() {
    let Clientes = JSON.parse(localStorage.getItem("Clientes"));

    if (!Clientes) {
        Clientes = [
            {
                nomeUsuario: "Wallace",
                idade: 24,
                endereco: "Rua x, 2212",
                Listas: []
            }
        ];
    }
    return Clientes;
}

export function carregarDadosProdutos() {
    let Produtos = JSON.parse(localStorage.getItem("Produtos"));

    if (!Produtos) {
        Produtos = [
            {
                idProduto: 1,
                nomeProduto: "KitKat",
                DescricaoProduto: "Chocolate Ao Leite 41,5g Nestlé"
            },
            {
                idProduto: 2,
                nomeProduto: "Arroz Prato Fino",
                DescricaoProduto: "Arroz Intergral - Tipo I - 5kg "
            },
            {
                idProduto: 3,
                nomeProduto: "Leite Itambé",
                DescricaoProduto: "Leite Integral 1 Litro"
            },
            {
                idProduto: 4,
                nomeProduto: "Café 3 Corações",
                DescricaoProduto: "Café Moido Extra Forte - Tipo 1 - 1kg"
            },
            {
                idProduto: 5,
                nomeProduto: "Feijão Carioca",
                DescricaoProduto: "Tipo 1 - 1kg"
            },
            {
                idProduto: 6,
                nomeProduto: "Leite Moça",
                DescricaoProduto: "Leite Condensado - Nestlé - 250g"
            },
            {
                idProduto: 7,
                nomeProduto: "Macarrão Instantâneo",
                DescricaoProduto: "Nissin Miojo - Picanha - 100g"
            },
            {
                idProduto: 8,
                nomeProduto: "Biscoito Oreo",
                DescricaoProduto: "Biscoito Recheado - 90g"
            },
            {
                idProduto: 9,
                nomeProduto: "Cappucino 3 Corações",
                DescricaoProduto: "Café Soluvel Extra Cremoso - 400g"
            },
            {
                idProduto: 10,
                nomeProduto: "Queijo Canastra",
                DescricaoProduto: "Porto Alegre - 1kg"
            }
        ];
    }
    return Produtos;
}

export function carregarMercados() {
    let Mercados = JSON.parse(localStorage.getItem("Mercados"));

    if (!Mercados) {
        Mercados = [
            {
                idMercado: 1,
                nomeMercado: "Super Nosso",
                endereco: "R. Dom José Pereira Lara, 33 - Coração Eucarístico"
            },
            {
                idMercado: 2,
                nomeMercado: "Epa Plus",
                endereco: "Rua Coração Eucarístico de Jesus, 86 - Coração Eucarístico"
            },
            {
                idMercado: 3,
                nomeMercado: "Supermecados BH",
                endereco: "Rua Padre Eustáquio, 2763 Padre Eustáquio"
            },
            {
                idMercado: 4,
                nomeMercado: "Apoio Mineiro",
                endereco: "Avenida Silva Lobo, 900 Nova Suiça"
            },
            {
                idMercado: 5,
                nomeMercado: "Supermecado Verdemar",
                endereco: " Av. Pres. Tancredo Neves, 2700 - Castelo"
            }
        ];
    }
    return Mercados;
}

export function carregarEstoque() {
    let estoque = JSON.parse(localStorage.getItem("estoque"));

    if (!estoque) {
        estoque = [
            {
                idMercado: 1,
                idProduto: 3,
                preco: 10
            },
            {
                idMercado: 1,
                idProduto: 10,
                preco: 110
            },
            {
                idMercado: 1,
                idProduto: 2,
                preco: 23
            },
            {
                idMercado: 1,
                idProduto: 8,
                preco: 9
            },
            {
                idMercado: 1,
                idProduto: 6,
                preco: 10
            },
            {
                idMercado: 1,
                idProduto: 9,
                preco: 12
            },
            {
                idMercado: 2,
                idProduto: 3,
                preco: 14
            },
            {
                idMercado: 2,
                idProduto: 1,
                preco: 13
            },
        ];
    }
    return estoque;
}

