let array = [];
sumArray(array);

function sumArray(numbers){
    let armazena = 0;
    if(numbers == 0){
        return 0
    }

    for(let i =0; i < numbers.length; i++){
        armazena = numbers[i] + armazena;

    }


    console.log(armazena);
}