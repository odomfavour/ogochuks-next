// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// in javaScript

function duplicateCount(text){
    const charCount = {}
    let duplicates = 0;
    
    for(let char of text.toLowerCase()){
      charCount[char] = (charCount[char] || 0) + 1;
      
    }
    for (let char in charCount) {
      if(charCount[char] > 1) {
        duplicates++
      }
    }
    
    return duplicates
  }

  // same can be done for fibonacci too
  function tribonacci(signature,n){
  //your code here
  for(let i = 3; i < n; i++ ) {
    signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
  }
  
  return signature.slice(0, n)
 }

 function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let num = Math.sqrt(sq);
  if(Number.isInteger(num)) {
    return Math.pow(num + 1, 2)
  }
  return -1;
}