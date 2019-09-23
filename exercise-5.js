var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+" " + second + " " + third + " " +fourth + " " +fifth +" " + sixth +" " + seventh);

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = ""; // do your own!
var thirdWord = ""; // do your own!
var fourthWord = ""; // do your own!
var fifthWord = ""; // do your own!

for (let i = 4; i < word.length; i++){
  if(i > 3 && i < 14 ) {
    secondWord += word[i];
  }
  if(i > 14 && i < 17) {
    thirdWord += word[i];
  }
  if(i >17 && i < 20){
    fourthWord += word[i];
  }
  if(i > 20) {
    fifthWord += word[i];
  }
}
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // do your own!
var thirdWord3 = word3.substring(15, 17); // do your own!
var fourthWord3 = word3.substring(18, 20); // do your own!
var fifthWord3 = word3.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + exampleFirstWord4.length);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4.length);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4.length);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4.length);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWord4.length);