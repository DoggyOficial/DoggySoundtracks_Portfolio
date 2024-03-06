function generateMonster() {
    var monsterName = document.getElementById("monsterName").value;
    var elementCount = document.getElementById("elementCount").value;
    var currency = document.getElementById("currency").value;

    // Lista de moedas
    var currencyList = document.getElementById("currencyList");
    var selectedCurrency = currencyList.options[currencyList.selectedIndex].text;

    // Aqui você pode chamar uma função que faz uma requisição ao seu banco de dados e retorna as informações do monstro
    // Por enquanto, vamos apenas exibir as informações na tela
    var monsterInfo = document.getElementById("monsterInfo");
    monsterInfo.innerHTML = "<h2>Informações do Monstro</h2>" +
                            "<p><strong>Nome:</strong> " + monsterName + "</p>" +
                            "<p><strong>Quantidade de Elementos:</strong> " + elementCount + "</p>" +
                            "<p><strong>Moeda de Produção:</strong> " + selectedCurrency + "</p>";

    // Aqui você pode adicionar mais funcionalidades, como enviar as informações para o servidor ou fazer cálculos com elas
    // Por exemplo:
    // calcularCustoProducao(monsterName, elementCount, selectedCurrency);
}
