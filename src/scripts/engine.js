const states = {
    indentidade:{
        nome:"Leandro",
        sobrenome: "Siqueira do Nascimento",
        idade: 36,
        profissãoAtual:"Tecnologo em Construção Civil",


    },

}
document.getElementById("teste").innerText =
states.indentidade.nome + " " +
states.indentidade.sobrenome + " " +
states.indentidade.idade + " " +
states.indentidade.profissãoAtual  
;

