let a = "abdcfa"
let b = "becdafa"

//let endResult = 1


// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let count = 0;
    const obj = {};
    let bigger = a.length >= b.length ? a : b
    let smaller = a.length < b.length ? a : b

      for( char of bigger){
        obj[char] = (obj[char] || 0) + 1;
      }
      
      for( char of smaller){
          if (obj[char] && obj[char] > 0){
              obj[char]--;
              count++;
          }
      }
      let sub_one = (smaller.length - count);
      let sub_two = (bigger.length - smaller.length);

      return (2 * sub_one) + sub_two;
}

console.log(makeAnagram(a, b))