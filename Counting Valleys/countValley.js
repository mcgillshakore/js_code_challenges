/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let totalValleys = 0;
    let elevation = 0;
    for(let i=0; i< steps; i++){
        if(path[i]=="D"){
            elevation--;
        }else{
            if(elevation==-1){
                totalValleys++;
            }
            elevation++;
        }
    }
    return totalValleys;
}
let path = "UDDDUUDDUUDUDDU".split('')
console.log(path)
let steps = path.length
console.log(steps)
console.log(countingValleys(steps, path))