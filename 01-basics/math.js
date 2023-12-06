const score=400
console.log(score);

const newScore=new Number(100);
console.log(newScore);

console.log(newScore.toString().length);
console.log(newScore.toFixed(4));

const otherNumber=125.8920;
console.log(otherNumber.toPrecision(4));

const demoNumber=1000000;
console.log(demoNumber.toLocaleString());

//----------------------------------------
console.log(Math);
console.log(Math.abs(-4));      //Give a negative to positive value
console.log(Math.round(4.6));   //Give Rounded value
console.log(Math.ceil(4.1));    //Give Highest value
console.log(Math.floor(4.2));   //Give lowest value

console.log(Math.random());
console.log(Math.random());

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);