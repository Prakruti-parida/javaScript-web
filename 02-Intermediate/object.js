// object are super important for grouping the data and functionalities.so we can to a lot of things in objects of js.
// object are constructed in key and value pair.
// let mycars={
//   BMW:"series 7";
//   Audi:"Q7";
// }
    const jsUser={
        name:"prakruti",
        email:"prakriti2007@google.com",
        age:"22",
        location:"odisha",
        isLogged:"false",
        isLoggedinDays:["monday","wednesday","friday"]
    }

console.log(jsUser.name);
console.log(jsUser["email"]);


jsUser.greetings=function(){
    console.log("Hello future elon musk");
}
jsUser.greetingTwo=function(){
    console.log(`Hello jsUser,${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());

const tinderUser={}
    tinderUser.id="1234",
    tinderUser.email="sunny@gmail.com",
    tinderUser.name="sunny"
console.log(tinderUser);

const regularUser={
    email:"prakruti@gmail.com",
    fullname:{
        userfullName:{
            firstName:"prakruti",
            LastName:"parida",
        }
    }
}    
console.log(regularUser.fullname.userfullName.firstName);
console.log(regularUser.fullname.userfullName.LastName);
console.log(regularUser.fullname);
console.log(regularUser.email);

const obj1={
    1:'a',
    1:'b',
}
const obj2={
    3:'a',
    4:'b',
}
const obj3={
    5:'a',
    6:'b',
}
const obj4={obj1,obj2,obj3}
console.log(obj4);
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)
//object destructuring

const course={
    courseName:"Last minute placement",
    price:12345,
    courseInstructor:"prakruti",
}
const {courseInstructor : Teacher}=course
console.log(Teacher);