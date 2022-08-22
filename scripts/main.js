//connection to the selech button for every player.
connectToTheButton("messi", "firstPlayer")
connectToTheButton("ronaldo", "secondPlayer")
connectToTheButton("neymar", "thirdPlayer")
connectToTheButton("ozil", "fourthPlayer")
connectToTheButton("muller", "fifthPlayer")
connectToTheButton("dimaria", "sixthPlayer")


//per player calculatin event handeler and claback function.
document.getElementById("subCalculation").addEventListener("click", function () {
    perPlayerCos("perPlayerCost");
});