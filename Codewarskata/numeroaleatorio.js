let array = [1,4,5,"string",'43',2,true];
let arrayAleatorio = array[Math.floor(Math.random()* array.length)]
console.log(arrayAleatorio);
if(typeof arrayAleatorio == "string"){
    console.log("isso é uma string")
}
if(typeof arrayAleatorio == "boolean"){
    console.log("isso é um booleano")
}
if(typeof arrayAleatorio == "number"){
    console.log("isso é um numero")
}

