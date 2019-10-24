function decode(string){
  let decoded = "";
  let stringArr = string.split(" ");
  for (let i in stringArr){
    let letter = checkLetter(stringArr[i]);
    decoded += letter;
  } 
  console.log(decoded);
 }

decode("craft block argon meter bells brown croon droop.");

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