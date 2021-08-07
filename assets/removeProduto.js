//Função de remoção do produto. A variável captura a linha do HTML a qual o botão de remoção pertence, e então utiliza seu index dentro da tabela para, com a função de captura da tabela dentro do DOM, realizar a remoção.

function removeProduto(evento) {
    var linha = evento.parentNode.parentNode.rowIndex;
    document.querySelector(".myTable").deleteRow(linha);
}