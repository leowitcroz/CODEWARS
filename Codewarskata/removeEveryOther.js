let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];

    for(let i = 0; i < arr.length; i++){
        newArr = arr.splice((i + 1), 1)
        
    }

    console.log(arr);
    