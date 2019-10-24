function decode(string){
  let decodedString = "";
  
  // split the stringArr based on any spaces found in the string
  let stringArr = string.split(" ");
  
  // loop through each word in the array, check the appropriate letter, and add the letter to the decodedString variabe. 
  for (let i in stringArr){
    let letter = checkLetter(stringArr[i]);
    decodedString += letter;
  } 
  console.log(decodedString);
 }

decode("craft block argon meter bells brown croon droop.");


// I put this logic into a seperate function to declutter the decode() method. 
function checkLetter(word){
 if (word[0] == "a"){
    return word[1];
  }
  else if (word[0] == "b"){
  return word[2];
  }
  else if (word[0] == "c"){
    return word[3];
  }
  else if (word[0] == "d"){
    return word[4];
  }
  else {
    return " ";
  }
}
