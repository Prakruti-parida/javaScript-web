/* function:-
    defination - a javascript function is a block of code designed to perform a paticular task.
    a javascript function is executed when something invoked it(call it).
*/

//function sayName(){
//    console.log("T");
 //   console.log("I");
 //   console.log("N");
 //   console.log("A");
//}
//sayName();
// sayName - reference
// () - execution

//function addTwoNumber(nummber1,number2){ // parameter
//    console.log(nummber1+number2)
//}
// addTwoNumber(3, "a"); // argument 

//function addTwoNumber1(number1,number2){
 //   let result = number1 + number2;
 //   return result;

//}
 //const result=addTwoNumber1(3,5);
 //console.log("result:",result);

 //loginUserMessage();

function loginUserMessage(username="mama"){
    if(!username)//! convert true to false or false to true
    {
        console.log("please enter your username")
        return
    }
    return `${username} just logged in`;

}
console.log(loginUserMessage("rudra"));
console.log(loginUserMessage("pina"));

function calculatePrice(val1,val2,...num1) { //...- rest operator
    return val1; //multiple value can't return ones a time
}     
console.log(calculatePrice(200,300,400,500));  


const user ={
    username: "riya" ,
    price : 400
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);



