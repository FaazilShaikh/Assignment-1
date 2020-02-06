function calcResults(p1, p2) {
    //tie
    if (  players[p1].selection == players[p2].selection) {
        var output = document.getElementById('result');
        output.innerHTML = "Tie. Both players chose " + players[p1].selection;
    }

    //player 1 wins
    if ((players[p1].selection == 'Rock' && players[p2].selection == 'Scissors') || 
        (players[p1].selection == 'Paper' && players[p2].selection == 'Rock') ||
        (players[p1].selection == 'Scissors' && players[p2].selection == 'Paper')) {
        var output = document.getElementById('result');
        output.innerHTML = "Player #" + p1 + " wins. Player #" + p1 + " used " + players[p1].selection + " while, player #" + p2 + " used " + players[p2].selection + ".";
    }

    //player 2 wins
    if ((players[p2].selection == 'Rock' && players[p1].selection == 'Scissors') || 
    (players[p2].selection == 'Paper' && players[p1].selection == 'Rock') ||
    (players[p2].selection == 'Scissors' && players[p1].selection == 'Paper')) {
    var output = document.getElementById('result');
    output.innerHTML = "Player #" + p2 + " wins. Player #" + p2 + " used " + players[p2].selection + " while, player #" + p1 + " used " + players[p1].selection + ".";
}

}