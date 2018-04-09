//////////////////
//USER INTERFACE INTERACTION





///////////////////
//SOFTWARE MECHANICS

//Maybe I could create a object factory function, to generate all heroes
// without the need to type all properties each time
let chapoliColorado = {
    name: "Chapolin Colorado",
    str: 2,
    pwr: 1,
    spd: 1,
    end: 1
};

let naruto = {
    name: "Naruto",
    str: 4,
    pwr: 5,
    spd: 5,
    end: 5
};

let ironMan = {
    name: "Iron Man",
    str: 3,
    pwr: 4,
    spd: 4,
    end: 5
};

let blackPanter = {
    name: "Black Panter",
    str: 3,
    pwr: 1,
    spd: 3,
    end: 4
};

let spiderMan = {
    name: "Spider Man",
    str: 4,
    pwr: 3,
    spd: 4,
    end: 4
};

let heroCollection = [chapoliColorado,naruto,ironMan,blackPanter,spiderMan];

// This function will print to the page the hero's name

// //In this game, I'll split all the activities in small functions, making them
// compose with each other (functional programming)
let printName = (hero)=>{
    return hero.name
}

// var x =document.getElementsByClassName("card__soldier").addEventListener("click",function(){alert("Coco")});
