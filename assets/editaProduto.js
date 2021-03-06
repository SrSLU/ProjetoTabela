//Variáveis necessárias de pré-carregamento da função

const quantidadeColunas = 4;
var editavel = true;

//Função de edição dos produtos. Ela busca a linha a qual pertence o botão de edição pressionado e então referencia seus parentes anteriores, utilizando essas referências para alterar o atributo contentEditable (conteúdo editável) entre true e false.

function editaProduto(evento) {
    const catchElement = evento.parentNode;
    var column = catchElement.previousSibling;
    
    if(editavel) {
        for(var i = 1; i < quantidadeColunas; i++) {
            column.contentEditable = "true";
            column.style.backgroundColor = "#ff726f";
            evento.style.backgroundColor = "blue";
            column = column.previousSibling;
        }
        
        evento.style.backgroundColor = "blue";
        editavel = false;

    } else if(editavel === false) {
        for(var i = 1; i < quantidadeColunas; i++) {
            column.contentEditable = "false";
            column.style.backgroundColor = "white";
            column = column.previousSibling;
        }

        evento.style.backgroundColor = "green";
        editavel = true;

    }
}