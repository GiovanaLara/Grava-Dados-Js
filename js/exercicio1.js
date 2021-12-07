"use strict";

//criar contador

//lógica: se o localStorage tiver qtd (diferente de vazio "null"), ele adicionará + 1, ou seja, o próximo aluno a ser registrado. Caso contrário, ele começara no 1 (primeiro a ser registrado)
let i; 
if (localStorage.getItem("qtd") != null){
    i = Number(localStorage.getItem("qtd")) + 1;
}else{
    i = 1;
}

$("#button1").click(gravarDados);
$("#button2").click(exibirDados);

function gravarDados(){//tirar os dados do form e jogar no localstorage
    localStorage.setItem("rgm_"+i, $("#rgm").val());//contador que vai mudanado as variáveis
    localStorage.setItem("nome_"+i, $("#nome").val());
    localStorage.setItem("media_"+i, $("#media").val());
    localStorage.setItem("qtd", i);
    i++; //contador
    alert("Dados gravados");
}

function exibirDados(){
    $("#lista").empty();//esvazia a div
    if (localStorage.length > 0){
        for(let j = 1; j <= Number(localStorage.getItem("qtd")); j++){
            $("#lista").append(`Nome: ${localStorage.getItem("nome_"+j)} - `);// add a info no final da div/voltando as variaveis de um em um para capturar a infos do aluno
            let media = Number(localStorage.getItem("media_"+j));
            $("#lista").append(`Média: ${media} - `);
            $("#lista").append(`Conceito: ${conceito(media)} <br></br>`)

        }
    }else{
        alert("Vazio");
    }
}

function conceito(media){
    if (media >= 6){
        return "<span class='aprovado'>APROVADO</span>";
    }else if(media >= 1){
        return "<span class='exame'>EXAME</span>";
    }else{
        return "<span class='reprovado'>REPROVADO</span>";
    }
}

