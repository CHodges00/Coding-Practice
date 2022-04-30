
////////////////// CODEWARS//////////////////
// This code does not execute properly. Try to figure out why.

// function multiply(a, b){
//      a * b
// }
/////////////// SOLUTION //////////////
// function multiply(a, b){
//     return a * b
// }
// console.log(multiply(2,4))






// COUNT VOWELS IN STR
/////////////// SOLUTION //////////////
// function getCount(str) {
//     var vowelsCount = 0;
//     for(var i = 0; i < str.length; i++){
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//             vowelsCount ++;
//         }
//     }
//     return vowelsCount;
// }
//
// console.log(getCount('abracadabra'))
//

for( let i=1; i<=100; i++ ){
    if (i%15 === 0){
        console.log("fizzbuzz")
    }else if (i%3 === 0){
        console.log("fizz")
    }else if (i%5 === 0){
        console.log("buzz")
    }else
        console.log(i)
}

