function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = parseInt(document.getElementById('qtd').value);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdIngresso > 0) {
        if (tipoIngresso == 'pista') {
            qtdPista = qtdPista - qtdIngresso;
            if (qtdPista >= 0) {
                document.getElementById('qtd-pista').textContent = qtdPista;
            } else {
                alert('Não há essa quantidade de ingressos disponiveis');
            }
        } else if (tipoIngresso == 'superior') {
            qtdSuperior = qtdSuperior - qtdIngresso;
            if (qtdSuperior >= 0) {
                document.getElementById('qtd-superior').textContent = qtdSuperior;
            } else {
                alert('Não há essa quantidade de ingressos disponiveis');
            }
        } else {
            qtdInferior = qtdInferior - qtdIngresso;
            if (qtdInferior >= 0) {
                document.getElementById('qtd-inferior').textContent = qtdInferior;
            } else {
                alert('Não há essa quantidade de ingressos disponiveis');
            }
        }
    } else {
        alert('Insira uma quantidade de ingressos maior que 0');
    }
}