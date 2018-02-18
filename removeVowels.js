// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }
  

  function removeVowels(str){
  
    
    if(str.length === 0){
      return str; }
    return('aeiouAEIOU'.indexOf(str[0]) > -1) ? '' + removeVowels(str.slice(1)) : str[0] + removeVowels(str.slice(1))
   }
 

// function rV(str){
//     if(str === "a" ,str === "e" ,str === "i" ,str === "o" ,str === "u" ,str === "A" ,str === "E" ,str === "I" ,str === "O" , str === "U"){
//         return str.indexOf
//     }

// }


  console.log(removeVowels("yo whats up bruh"))