//this function is for connect to the select button and add event handeler on it.
function connectToTheButton(buttonId, playerId) {
    document.getElementById(buttonId).addEventListener("click", function () {

        //it's a call back function.
        getPlayerName(playerId, buttonId);
    });
};

//this function is for get the player name and set the name in the top five list.
const selectedPlayer = [];
function getPlayerName(nameId, buttonId) {
    const player = document.getElementById(nameId);
    const playerNames = player.innerText;
    selectedPlayer.push(playerNames);
    if (selectedPlayer.length > 5) {
        alert("SORRY: you can't select more then five players");
        return;
    } else {

        let playerList = document.getElementById("top5player");
        playerList.innerHTML = "";

        for (names of selectedPlayer) {
            const li = document.createElement("li");
            li.innerText = names;
            playerList.appendChild(li);

            //disabled already pressed button.
            const alreadyPrased = document.getElementById(buttonId);
            alreadyPrased.classList.add('disabled');
        };
    };
};



document.getElementById("subCalculation").addEventListener("click", function () {
    const playerCostString = document.getElementById("perPlayerCost");
    const playerCost = parseFloat(playerCostString.value);
    const playerCount = selectedPlayer.length;
    const playerExpenses = playerCount * playerCost;
    const ExpensesAmount = document.getElementById("expensesAmount");
    ExpensesAmount.innerText = playerExpenses;
});




