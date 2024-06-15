document.addEventListener("DOMContentLoaded", function() {
    const btnVoltar = document.getElementById("btn-voltar");
    const btnAvancar = document.getElementById("btn-avancar");
    const cartoes = document.querySelectorAll(".cartao");

    let indexSelecionado = 0;

    // Função para atualizar a classe "selecionado" no cartão atual
    function updateSelected() {
        cartoes.forEach((cartao, index) => {
            if (index === indexSelecionado) {
                cartao.classList.add("selecionado");
            } else {
                cartao.classList.remove("selecionado");
            }
        });
    }

    // Função para avançar para o próximo cartão 
    function avancarCartao() {
        // Remove "selecionado" class from current card
        cartoes[indexSelecionado].classList.remove("selecionado");

        // Increment index
        indexSelecionado++;
        if (indexSelecionado >= cartoes.length) {
            indexSelecionado = 0;
        }

        // Add "selecionado" class to the new card
        updateSelected();
    }

    // Função para voltar para o cartão anterior
    function voltarCartao() {
        // Remove "selecionado" class from current card
        cartoes[indexSelecionado].classList.remove("selecionado");

        // Decrement index
        indexSelecionado--;
        if (indexSelecionado < 0) {
            indexSelecionado = cartoes.length - 1;
        }

        // Add "selecionado" class to the new card
        updateSelected();
    }

    // Event listener para o botão de avançar 
    btnAvancar.addEventListener("click", avancarCartao);

    // Event listener para o botão de voltar
    btnVoltar.addEventListener("click", voltarCartao);

    // Adicionar a classe "selecionado" ao primeiro cartão quando a página carregar
    updateSelected();
});
