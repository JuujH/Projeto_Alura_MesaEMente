function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (!campoPesquisa) {
        section.innerHTML = "<p>Ops, você esqueceu de digitar sua pesquisa! Tente novamente.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let habilidades = "";
let materias = "";
let temas = "";

// Itera (repete a ação) sobre cada dado da array de dados
for (let dado of dados) {
    // Torna todos os caracteres dentro das strings dos seguintes objetos em minúsculas
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    habilidades = dado.habilidades.toLowerCase()
    materias = dado.materias.toLowerCase()
    temas = dado.temas.toLowerCase()
    tags = dado.tags.toLowerCase()
    // Se a variável de dados incluir o valor digitado no campo de pesquisa - Condição
    if (titulo.includes(campoPesquisa) || 
        descricao.includes(campoPesquisa) || 
        habilidades.includes(campoPesquisa) || 
        materias.includes(campoPesquisa) || 
        temas.includes(campoPesquisa) || 
        dado.numeroDeJogadores.includes(campoPesquisa) || 
        dado.faixaEtaria.includes(campoPesquisa) || 
        tags.includes(campoPesquisa)) {
        // Cria o elemento resultados
        resultados += `
        <div class="item-resultado">
             <h2>${dado.titulo}</h2>
             <p class="descricao-meta">${dado.descricao}</p>
             <p class="habilidades"><strong>Habilidades Desenvolvidas:</strong> ${dado.habilidades}</p>
             <p class="materias"><strong>Matérias Relacionadas:</strong> ${dado.materias}</p>
             <p class="temas"><strong>Principais Temas:</strong> ${dado.temas}</p>
             <p class="numero-jogadores"><strong>Número de Jogadores:</strong> ${dado.numeroDeJogadores}</p>
             <p class="faixa-etaria"><strong>Faixa Etária:</strong> ${dado.faixaEtaria}</p>
             <p class="tempo-de-jogo"><strong>Tempo de jogo:</strong> ${dado.tempoDejogo}</p>
             <a href=${dado.linkLoja} target="_blank"><b>Compre aqui</b></a>
        </div>
    `;
    }
}

if (!resultados) {
    resultados = "<p>Nenhum resultado correspondente :(<p/>"
}

// Imprime no html o elemento resultados
section.innerHTML = resultados

}