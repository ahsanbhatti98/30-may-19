/*
   function names can NOT have:
   - spaces
   - any special characters except _
   function names CAN have:
   - letters
   - numbers
   function naming convention is: firstSecondThirdFourth (called Camel Case)
*/
// function showAlert() {
//    console.log('Alert # 1');
//    console.log('Alert # 2');
//    console.log('Alert # 3');
//    console.log('Alert # 4');
// }

// function secondFunc() {
//    alert('Sarah Ahmed');
// }

// Single line comments

/*

This
is a
multi-line comment

*/

// An English paragraph has many SENTENCES. Each sentence ends with a FULL-STOP
// A Javascript code has many STATEMENTS. Each statement ends with a SEMI-COLON.

// Each JS statement is written on a separate line.


/* 
30-may-19

Problem Statement: show user input inside heading

1.Get  input element on which user typed something.
2.Get value of input.
3.Get heading element.
4.Change heading.

first we learn
1.how to get input of html in js.
2.how to get atrribute 
*/

function changeName(){
   //1. Get input element.
   // 2.Get value of input.
   // 3.Get heading.
   // 4.Change heading content
   // console.log(document.querySelector('input').value);
   // console.log(document.querySelector('h1').innerHTML = document.querySelector(;input).value;

   //   change heading + input value
   document.querySelector('span').innerHTML = document.querySelector ('input').value;
  
}
function color(){
   document.querySelector('h1').style="background-color:white"
}