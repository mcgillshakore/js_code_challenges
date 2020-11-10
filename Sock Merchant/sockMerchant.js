
function countPairs(n, ar) {
    const sockColor = {}; //colors in Array key: value
    let totalPairs = 0; // current numbers of Pairs
    ar.forEach((color) => { // iterate over array
        if (!sockColor[color]){ // if color doesn't exist
            sockColor[color] = 1; // add color to object with a value of 1
            return;
        }totalPairs++;// else increment the totalPairs by 1;
        delete sockColor[color]; // than delete color from object
    });
    return totalPairs; // return the number of pairs
}
const ar = [ 2, 3, 5, 5, 1, 1, 2, 2, 3, 2];
const n = ar.length;
// console.log(countPairs(n, ar));

function whatsTheIndex(a){
    for ( let i of a){
        let position = Math.abs(i) -1 // e.g.postion = 2 - 1
        if (a[position] < 0) return position + 1 // if 3 < 0 return 1 + 1 = 2
        a[position] = a[position] * -1 // a[position] = 1 * -1
        console.log(position)
    }
    return -1;
}
console.log(whatsTheIndex(ar))