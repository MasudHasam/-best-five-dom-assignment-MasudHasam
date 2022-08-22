//this function is for connect to the select button and add event handeler on it.
function connectToTheButton(buttonId, playerId) {
    document.getElementById(buttonId).addEventListener("click", function () {
        const button = document.getElementById(buttonId);
        button.classList.add('disabled');
        getPlayerName(playerId);
    })
}

//this function is for get the player name , .......
const arr = [];
function getPlayerName(nameId) {
    const player = document.getElementById(nameId);
    const playerNames = player.innerText;
    arr.push(playerNames);
    if (arr.length > 5) {
        alert("you can't select more then five players");
        return;
    } else {
        let playerList = document.getElementById("top5player");
        playerList.innerHTML = "";
        for (names of arr) {
            const li = document.createElement("li");
            li.innerText = names;
            playerList.appendChild(li);
        };
    };
};

