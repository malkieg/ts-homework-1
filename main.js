//The Game class
var Game = /** @class */ (function () {
    //The constructor
    function Game(name, rating) {
        this.name = name;
        this.rating = rating;
    }
    //A function that returns the HTML object you need
    Game.prototype.createListNode = function () {
        //Create the nodes we'll need
        var newRow = document.createElement("tr");
        var nameCell = document.createElement("td");
        var rateCell = document.createElement("td");
        var nameText = document.createTextNode(this.name);
        var rateText = document.createTextNode(this.rating.toString());
        //Add the text
        nameCell.appendChild(nameText);
        rateCell.appendChild(rateText);
        //Add cells to row
        newRow.appendChild(nameCell);
        newRow.appendChild(rateCell);
        //Return the row
        return newRow;
    };
    return Game;
}());
//Declare the varible to store the game.
var newGame;
//The function that adds the game
function addGame() {
    document.getElementById(nameCell).appendChild(nameText);
    //YOUR CODE GOES HERE
}
