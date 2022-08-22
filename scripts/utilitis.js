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



//per player cost claculation .
function perPlayerCos(perPlayerCalculation) {
    const playerCostString = document.getElementById(perPlayerCalculation);
    const playerCost = Math.abs(parseFloat(playerCostString.value));
    if (isNaN(playerCost)) {
        alert('invalid input')
        return;
    } else {
        const playerCount = selectedPlayer.length;
        if (playerCount > 5) {
            const playerExpenses = 5 * playerCost;
            const ExpensesAmount = document.getElementById("expensesAmount");
            ExpensesAmount.innerText = playerExpenses;
            return playerExpenses;
        } else {
            const playerExpenses = playerCount * playerCost;
            const ExpensesAmount = document.getElementById("expensesAmount");
            ExpensesAmount.innerText = playerExpenses;
            return playerExpenses;
        }
    }
};


//over-all total cost calculation.
document.getElementById("totalCalculatin").addEventListener("click", function () {
    const managerCostString = document.getElementById("managerCost");
    const managerCost = Math.abs(parseFloat(managerCostString.value));
    const coachCostString = document.getElementById("coachCost");
    const coachCost = Math.abs(parseFloat(coachCostString.value));
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("invalid input");
        return;
    } else {
        const playerExpenses = perPlayerCos("perPlayerCost");
        const totalCost = managerCost + coachCost + playerExpenses;
        const totalCostDisplay = document.getElementById("totalCost");
        totalCostDisplay.innerText = totalCost;
    }
});

