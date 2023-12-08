/* Arrow function - In ES6 major update had done. It changes the old syntax fo function declaration and tried to reduce the 
   length of a code.
   In arrow function we need a variable to declare it and majorly used => this operator to define arrow function.
*/
//old syntax of a function

function addTwoNos(num1,num2){
     return num1 + num2;
}

console.log(addTwoNos(5,5));
//arrow function
const user = {
    userName :"prakruti",
    location :"kendrapara",
    welcomeMessage :function(){
        console.log(`${this.userName},Good Morning`);
        console.log(this)
    }
}
//console.log(user);
user.welcomeMessage();
user.userName="Tina";
user.welcomeMessage();


const person = {
    name :"rudra",
    age :"18",
    logingDays : ["sunday","monday","friday","wednesday"],
    userName :{
        userDetails :{
            lname :"prakruti",
            fname :"parida",
        }
    }
};
//console.log(person.userName.userDetails.fname);
//console.log(person);

const userDetails =() =>{
    let userName = "web_bocket"
    console.log(userName);
}

userDetails();

const addTwoNo = (num1,num2) =>{
    return num1+num2;
}

console.log(addTwoNo(4,6));


const addNos =  (num1,num2) =>num1+num2; //if there is only one line code then we can 
//remove the function body means({}) curly braces.
console.log(addNos(54,34));

 
const addTwo = () => ({userName :"webbocket"})
console.log(addTwo());







