

//pyramid problem
var x = "";
for (var i = 0; i <= 6; i++) {
    x += "#";
    console.log(x);
}

//fizzbuzz problem
for (var x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log('FizzBuzz');
    }

    else if (x % 3 == 0) {
        console.log('Fizz');
    }

    else if (x % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(x);
    }
}

//chess board loop
var size = 8, board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if (y % 2 == 0 && x % 2 == 0) {
            board += " ";
        }
        else if (y % 2 == 0 && x % 2 != 0) {
            board += "#";
        }
        else if (y % 2 != 0 && x % 2 == 0) {
            board += "#";
        }
        else {
            board += " ";
        }
    }
    board += "\n";
}

console.log(board);



//simple min function
function min(a, b) {
    if (a < b) {
        return a;
    }
    else if (b < a) {
        return b;
    }
    else {
        return "they are even";
    }
}
console.log(min(9, 9));


//recursive even checker function
function oddEven(num) {
    if (num == 0) {
        return "even";
    }
    else if (num == 1) {
        return "odd";
    }
    else {
        return oddEven(Math.abs(num) - 2);
    }
}
console.log(oddEven(-50));



//Bean counting problem
var word = "boBoqueteBeBe";

function countBs(input) {
    var count = 0;
    for (var x = 0; x < input.length; x++) {
        if (input[x] == 'B') {
            count += 1;
        }
    }
    return count;
}

console.log(countBs(word));



function countChar(phrase, letter) {
    var count = 0;
    for (var x = 0; x < phrase.length; x++) {
        if (phrase[x] == letter) {
            count += 1;
        }
    }
    return count;
}

console.log(countChar("meu pau ta duro", "a"));


//Multiples of 3 and 5
var listNum = [], total = 0;
for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        listNum.push(i);
    }
    else if (i % 3 === 0) {
        listNum.push(i);
    }
    else if (i % 5 === 0) {
        listNum.push(i);
    }
}

for (var i = 0; i < listNum.length; i++) {
    total += listNum[i];
}

console.log(total);


//even fibonacci numbers
var fibit = [];
function fibo(a, b) {
    while (b < 4000000) {
        fibit.push(a);
        fibit.push(b);
        a += b;
        b += a;
    }
}
fibo(0, 1);
var sum = 0;
for (var i = 0; i < fibit.length; i++) {
    if (fibit[i] % 2 == 0) {
        sum += fibit[i];
    }
}

console.log(sum);



//Largest prime factor
// with a very large number its almost impossible to make this calculation
//so we use the square root of the number
var preList = [];
var list = [];
for (var i = 0; i < Math.sqrt(600851475143); i++) {
    if (600851475143 % i === 0) {
        preList.push(i);
    }
}

for (var i = 0; i < preList.length; i++) {
    var count = [];
    for (var x = 0; x < preList[i]; x++) {
        if (preList[i] % x === 0) {
            count.push(x);
        }
    }
    if (count.length <= 2) {
        list.push(preList[i]);
    }
}

console.log(list.pop());


//Largest palindrome product


// var num;

// var numList = [];
// var temp =0;
// for (var i=999;i>0;i--){
//     for (var x=999;x>0;x--){
//         num = x*i;
//         var numStr = String(num);
//         var revNum = numStr.split("").reverse().join("");
//         if (numStr === revNum && numStr.length>4 && num>temp){
//             temp = num;
//         }
//     }
// }

// console.log(temp);

//Smallest multiple

// function multiTest(num){
//     var count = 0;
//     for (var i=2;i<=20;i++){
//         if(num%i===0){
//             count +=1;
//         }
//     }
//     if (count===19){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// var test = 20;

// while (multiTest(test)!==true){
//     test+=20;
// }

// console.log(test);


//Sum square difference
// var first = 0;
// for (var y=1;y<=100;y++){
//     first += y*y;
// }
// console.log(first);

// var second = 0, secondSquare = 0;
// for (var x=1;x<=100;x++){
//     second += x;
// }

// secondSquare = second*second;

// console.log(secondSquare-first);


///////////////////////
//eloquent js - objects
/////////////////////////

function range(start, end) {
    var list = [];

    for (var y = start; y <= end; y++) {
        list.push(y);
    }

    return list;
}
console.log(range(0, 10));


function sume(arr) {
    var total = 0;

    for (var x = 0; x < arr.length; x++) {
        total += arr[x];
    }
    return total;
}
console.log(sume(range(0, 10)));

function stepRange(start, end, step) {
    var list = [];
    var step = step || 1;
    if (start >= end) {
        for (var y = start; y >= end; y += step) {
            list.push(y);
        }
    }
    else {
        for (var x = start; x <= end; x += step) {
            list.push(y);
        }
    }

    return list;
}

console.log(stepRange(10, -5, -2));


///////////////////////
//REVERSING AN ARRAY
/////////////////////

var list = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(arr) {
    var list2 = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        list2.push(arr[i]);
    }
    return list2;
}

console.log(reverseArray(list));

function reverseArrayInPlace(arr) {
    var list3 = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        item = arr.pop();
        list3.push(item);
    }

    for (var x = 0; x <= list3.length - 1; x++) {
        arr[x] = list3[x];
    }
    return arr;
}

console.log(reverseArrayInPlace(list));


////////////////////////////////
//A LIST
///////////////////////////////


var myArray = [1, 2, 3];
function arrayToList(arr) {
    var list = {};
    for (var i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    //list will be equal to {value: last index of the array, 
    //                       rest: actual value of list
    //(that is "null" at the beggining and then its updated)}

    return list;
};

console.log(arrayToList(myArray));

function listToArray(list) {
    var newArray = [];
    var list = list;
    while (list.rest) {
        newArray.push(list.value);
        list = list.rest;
    }
    return newArray;
}

console.log(listToArray(arrayToList(myArray)));

function prepEnd(element, list) {
    var newlist = listToArray(list);
    newlist.unshift(element);
    return arrayToList(newlist);

    //this function must return a new list with the element
    //in front of the inputed list
};

console.log(prepEnd("coco", arrayToList(myArray)));

////////////////////////////////////////////////////
//THIS IS NOT MY SOLUTION
//////////////////////////////////////////////////
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////



//////////////////////////////////////////////////
//THIS IS THE BOOK SOLUTION FOR THE PROBLEMS
function arrayToList2(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray2(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend2(value, list) {
    return { value, rest: list };
}
///////////////////////////////////////////////////
////////////////////////////////////////////////////

//DEEP COMPARISON (mine)
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || typeof a != "object" || b == null || typeof b != "object") {
        return false;
    }

    else {
        /*loop over every key in both objects and then compare them
        using recursion - deep equal function*/
        for (var propsInA in a) {
            var keyA = a[propsInA];
        }
        for (var propsInB in b) {
            var keyB = b[propsInB];
        }
        return deepEqual(keyA, keyB);
    }
};

var um = { key: 1, inner: { lock: 1, third: { chave: 3 } } }, uno = { key: 1, inner: { lock: 1, third: { chave: 2 } } };

console.log(deepEqual(um, uno));



////////////////////////////////////////////
//HIGHER ORDER FUNCTIONS
//////////////////////////////////////////////

//FLATENING////////////
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arr.reduce(function (acc, curr) {
    curr.forEach(ele => acc.push(ele));
    return acc;
}, []));

//Here I could have used acc.concat(curr) instead of push()
////////////////////////


//MOTHER-CHILD////////////////
var ancestry = [
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
];

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

//byName creates a map with person.name as the key and the entire person obj
//as the value

let mothers = ancestry.filter(person => person.mother != null)
    .map(person => person.mother);

let data = ancestry.filter(person => person.mother != null)
    .map(person => [person.name, person.born, person.mother])
    .filter(person => person[2] in byName);

let final = data.map(arr => {
    arr.push(byName[arr[2]].born);
    return arr
});

let finalAges = final.map(arr => arr[1] - arr[3])
    .reduce((a, b) => a + b, 0) / data.length;

console.log(finalAges);

//BOOK'S SOLUTION
// function average(array) {
//     function plus(a, b) { return a + b; }
//     return array.reduce(plus) / array.length;
//   }

// var byName = {};
// ancestry.forEach(function(person) {
//     byName[person.name] = person;
// });

// var differences = ancestry.filter(function(person) {
//     return byName[person.mother] != null}).map(function(person)
//     {
//         return person.born - byName[person.mother].born;
//   });

//   console.log(average(differences));
////////////////////////////////////////


//HISTORICAL LIFE EXPECTANCY
/////////////////////////

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
    var groups = {};
    array.forEach(function (element) {
        var groupName = groupOf(element);
        if (groupName in groups)
            groups[groupName].push(element);
        else
            groups[groupName] = [element];
    });
    return groups;
}

var byCentury = groupBy(ancestry, function (person) {
    return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
    var ages = byCentury[century].map(function (person) {
        return person.died - person.born;
    });
    console.log(century + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


//EVERY AND THEN SOME
////////////////////////
function every(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (!predicate(array[i]))
            return false;
    }
    return true;
}

function some(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]))
            return true;
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
  // → false