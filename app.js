

//pyramid problem
var x = "";
for (var i = 0;i <=6;i++){
    x += "#";
    console.log(x);  
}

//fizzbuzz problem
for (var x = 1;x<=100;x++){
    if (x%3==0 && x%5==0){
        console.log('FizzBuzz');
    }

    else if(x%3 == 0){
        console.log('Fizz');
    }

    else if(x%5 == 0){
        console.log('Buzz');
    }
    else{
        console.log(x);
    }
}

//chess board loop
var size = 8, board ="";

for (var y = 0;y<size;y++){
    for (var x=0; x<size;x++){
        if(y%2==0 && x%2==0){
            board += " ";
        }
        else if(y%2==0 && x%2!=0){
            board += "#";
        }
        else if(y%2!=0 && x%2==0){
            board += "#";
        }
        else{
            board += " ";
        }
    }
    board += "\n";
}

console.log(board);



//simple min function
function min(a,b){
    if (a<b){
        return a;
    }
    else if(b<a){
        return b;
    }
    else{
        return "they are even";
    }
}
console.log(min(9,9));


//recursive even checker function
function oddEven(num){
    if (num == 0){
        return "even";
    }
    else if (num ==1){
        return "odd";
    }
    else {
        return oddEven(Math.abs(num)-2);
    }
}
console.log(oddEven(-50));



//Bean counting problem
var word="boBoqueteBeBe";

function countBs(input){
    var count = 0;
    for (var x=0;x<input.length;x++){
        if (input[x]=='B'){
            count+=1;
        }
    }
    return count;
}

console.log(countBs(word));



function countChar(phrase,letter){
    var count = 0;
    for (var x=0;x<phrase.length;x++){
        if (phrase[x]==letter){
            count+=1;
        }
    }
    return count;
}

console.log(countChar("meu pau ta duro","a"));


//Multiples of 3 and 5
var listNum = [], total=0;
for (var i=1;i<1000;i++){
    if (i%3===0 && i%5===0){
        listNum.push(i);
    }
    else if(i%3===0){
        listNum.push(i);
    }
    else if(i%5===0){
        listNum.push(i);
    }
}

for (var i=0;i<listNum.length;i++){
    total +=listNum[i];
}

console.log(total);


//even fibonacci numbers
var fibit = [];
function fibo(a, b){
    while (b<4000000){
        fibit.push(a);
        fibit.push(b);
        a+=b;
        b+=a;
    }
}
fibo(0,1);
var sum=0;
for (var i=0;i<fibit.length;i++){
    if(fibit[i]%2==0){
        sum+=fibit[i];
    }
}

console.log(sum);



//Largest prime factor
// with a very large number its almost impossible to make this calculation
//so we use the square root of the number
var preList = [];
var list = [];
for (var i=0;i<Math.sqrt(600851475143);i++){
    if(600851475143%i===0){
        preList.push(i);
    }
}

for (var i = 0;i<preList.length;i++){
    var count = [];
    for (var x=0;x<preList[i];x++){
        if (preList[i]%x===0){
            count.push(x);
        }
    }
    if (count.length<=2){
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


//eloquent js - objects


function addEntry(events, didITurnIntoASquirrel){
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}

var journal = [{coco:{mijo:4,urina:5},bosta:2,titica:3}];

console.log(journal.length);

console.log(typeof journal);

