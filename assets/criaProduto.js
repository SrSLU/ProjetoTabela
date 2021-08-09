//Função de criação do produto. Ela busca a referência dos itens HTML da tabela e cria os elementos conforme a ordem dos inputs. Além disso, cria os botões de deleção da linha e de edição do conteúdo da linha.

function criaProduto() {
    const corpoTabela = document.querySelector(".corpoItensLista");
    const nomeProduto = document.querySelector(".nomeProduto");
    const valorProduto = document.querySelector(".valorProduto");
    const quantidadeProduto = document.querySelector(".quantidadeProduto");

    let nome = nomeProduto.value;
    let valor = valorProduto.value;
    let quantidade = quantidadeProduto.value;
    const arrayProduto = [nomeProduto, valorProduto, quantidadeProduto];

    const tableR = document.createElement('tr');
    const conteudoNome = `<p>${nome}</p>`;
    const conteudoValor = `<p>R$${valor}</p>`;
    let conteudoQuantidade;

    if(quantidade == 1) {
        conteudoQuantidade = `<p>${quantidade} kg</p>`;
    } else if(quantidade < 1 || quantidade > 1) {
        conteudoQuantidade = `<p>${quantidade} kgs</p>`;
    }

    const conteudoTR = `<td class="itemLista">${conteudoNome}</td>` + 
    `<td class="itemLista">${conteudoValor}</td>` + 
    `<td class="itemLista">${conteudoQuantidade}</td>` + 
    `<td class="itemLista"><input type="button" value="&#128465;" class="removeItem" onclick="removeProduto(this)"><input type="button" value="&#9998;" class="botaoEditar" onclick="editaProduto(this)"></td>`;

    tableR.innerHTML = conteudoTR;
    corpoTabela.appendChild(tableR);
    tableR.classList.add("itemRow");
    
    for(var i = 0; i < arrayProduto.length; i++) {
        arrayProduto[i].value = "";
    }
}

export {criaProduto};