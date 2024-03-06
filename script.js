function generateMonster() {
    var monsterName = document.getElementById("monsterName").value;
    var elementCount = document.getElementById("elementCount").value;
    var currency = document.getElementById("currency").value;

    // Aqui você pode chamar uma função que faz uma requisição ao seu banco de dados e retorna as informações do monstro
    // Por enquanto, vamos apenas exibir as informações na tela
    var monsterInfo = document.getElementById("monsterInfo");
    monsterInfo.innerHTML = "<h2>Informações do Monstro</h2>" +
                            "<p><strong>Nome:</strong> " + monsterName + "</p>" +
                            "<p><strong>Quantidade de Elementos:</strong> " + elementCount + "</p>" +
                            "<p><strong>Moeda de Produção:</strong> " + currency + "</p>";
}
