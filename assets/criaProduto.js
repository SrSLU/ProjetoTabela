//Função de criação do produto. Ela busca a referência dos itens HTML da tabela e cria os elementos conforme a ordem dos inputs. Além disso, cria os botões de deleção da linha e de edição do conteúdo da linha.

function criaProduto() {
    const corpoTabela = document.querySelector(".corpoItensLista");
    let produto = {
        nome: document.querySelector(".nomeProduto").value,
        valor: document.querySelector(".valorProduto").value,
        quantidade: document.querySelector(".quantidadeProduto").value
    }

    const arrayProduto = [produto.nome, produto.valor, produto.quantidade];
    const valueProduto = { removedor: "&#128465;", editor: "&#9998;" }

    const tableR = document.createElement('tr');
    corpoTabela.appendChild(tableR);

    for(var i = 0; i <= 3; i++){
        if(i < 3){
            const tableD = document.createElement('td');
            tableR.appendChild(tableD);
            tableD.innerHTML = arrayProduto[i];
            tableD.classList.add("itemLista");
        } else if(i === 3) {
            const tableD = document.createElement('td');
            tableR.appendChild(tableD);
            tableD.innerHTML = `<input type="button" class="removeItem" value=${valueProduto.removedor} onclick="removeProduto(this)"><input type="button" class="botaoEditar" value=${valueProduto.editor} onclick="editaProduto(this)">`;
            tableD.classList.add("itemLista");
        }
    }
}

export {criaProduto};