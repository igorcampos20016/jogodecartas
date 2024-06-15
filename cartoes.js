document.addEventListener("DOMContentLoaded", function() {
    const btnVoltar = document.getElementById("btn-voltar");
    const btnAvancar = document.getElementById("btn-avancar");
    const cartoes = document.querySelectorAll(".cartao");

    let indexSelecionado = 0;

    // Função para atualizar a classe "selecionado" no cartão atual
    function updateSelectedCard() {
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
        indexSelecionado++;
        if (indexSelecionado >= cartoes.length) {
            indexSelecionado = 0;
        }
        updateSelectedCard();
    }

    // Função para voltar para o cartão anterior
    function voltarCartao() {
        indexSelecionado--;
        if (indexSelecionado < 0) {
            indexSelecionado = cartoes.length - 1;
        }
        updateSelectedCard();
    }

    // Event listener para o botão de avançar
    btnAvancar.addEventListener("click", avancarCartao);

    // Event listener para o botão de voltar
    btnVoltar.addEventListener("click", voltarCartao);

    // Inicializa o cartão atual
    updateSelectedCard();
});




  