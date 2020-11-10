const s = "AAABBBAABB";
        //012345678
// "ABABABAB"
// 6

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let totalDel = 0;
    let a = s.split("")
    // console.log(a)
    for (let i = 0; i < a.length; i++){ // first index 0
        // console.log(`This is the first loop ${a[i]}`)
        // for(let j=0; j < a.length; j++){// second index 1
        //     console.log(`This is the second loop ${a[j]}`)
        // }
        // console.log(`This is the first index of my array ${a[i]}${i} and this is the second index ${a[i + 1]}${i + 1}`)
        if(a[i] === a[i +1]){
            totalDel++;
        }
    }
    return totalDel;
}

console.log(alternatingCharacters(s))
// alternatingCharacters(s)
