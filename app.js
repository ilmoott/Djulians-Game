// //In this game, I'll split all the activities in small functions, making them
// compose with each other (functional programming)





//////////////////
//USER INTERFACE INTERACTION

var turn = "player1";



///////////////////
//SOFTWARE MECHANICS

var player1Hand = [];
var player2Hand = [];




//["Name",strength, power,speed,endurance]
var heroDataBase = [["Captain America", 3, 1, 3, 4], ["Wonder Woman", 4, 2, 5, 5], ["Batman", 2, 2, 2, 3]];

//List of hero objects
var heroList = [];

//Hero Factory Function
heroDataBase.forEach(element => {
        heroList.push({
            name:element[0],
            str: element[1],
            pwr: element[2],
            spd: element[3],
            end: element[4]
        });
    });

//DRAWING CARDS
function drawCard (){
    var randomIndex = Math.floor(Math.random()*heroList.length);
    var chosen = heroList[randomIndex];

    //after that, we need to:
    //1. add it to the game
    console.log(chosen);
    //2. remove it from the list || generate a new list
}
//JUST MESSING AROUND WITH SOME CODE
let hero = document.getElementById('p1-h1');
hero.innerHTML = "Calango Vermelho";
let list = ["Macaco Azul","Polegar","Cabecinha"];

list.forEach(card=>hero.innerHTML=card);
///////////////////////////

// drawCard();
