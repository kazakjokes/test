// let num=20;

// function showFirstMessage(text){
//     alert(text);
//     num=10;
// }

// showFirstMessage("Hola, amigos!");
// console.log(num);



// let calc = function (a,b) {
//     return (a+b);
// }

let calc = (a,b) => a+b;


console.log(calc(5,7));

console.log(calc(3,4));

function retVar() {
    let num=50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

console.log(parseInt(twelve));
console.log(parseFloat(twelve));