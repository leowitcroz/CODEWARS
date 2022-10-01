let dna = "GCAT";
 let dnaArray = dna.split("")

 for(let i = 0; i < dnaArray.length; i++){
    if(dnaArray[i] == "T"){
        dnaArray[i] = "U";
    }
 }
let rna = dnaArray.join("")

 console.log(rna)
 
 