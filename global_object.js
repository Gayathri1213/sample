/*Filename */
console.log(__filename);
/*Directoryname*/
console.log(__dirname);
/*set time*/
function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setTimeout(printHello, 2000);
 /*Clear time*/
 function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 2000);
 
 // Now clear the timer
 clearTimeout(t);
 /*set interval*/
 function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setInterval(printHello, 2000);
 /*Console methods*/
 console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")     