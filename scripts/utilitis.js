function connectToTheButton(buttonId, playerId) {
    document.getElementById(buttonId).addEventListener("click", function () {
        getPlayerName(playerId);
    })
};

function getPlayerName(nameId) {
    const player = document.getElementById(nameId);
    const playerName = player.innerText;
    console.log(playerName);
};


