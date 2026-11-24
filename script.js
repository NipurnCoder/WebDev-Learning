console.log('use to message')
console.warn('use to warning')
console.error("use to error")

// variable no need to define type
var a = 20
var b = "Nipurn"

// print if find
console.log(a)
console.log(b)

// Pop Ups....!!

// show as a pop up Simple message to pop up on the top of website
alert("Message")

// need to give ans at pop up
//confirm("only pop up")

var ans = confirm("select one")
console.log(ans)

// to ask something
var output = prompt("Name")
//console.log(output)
console.log("User name", output)

// JS Datatypes

// - Premetives
//     - Numbers (1,2,3,24.44,344.343)
//     - String ('a', 'Nipurn')
//     - Boolean (true, false)
//     - undefined
//     - null
//     - Symbol
//     - NaN (not a number)

// - Reference
//     - Array
//     - Object
//     - Function

if(10 > 3){
    console.log("Correct")
} else {
    console.log("not correct")
}

// loops
// while
// for

// Operators
// == compare Val
// === compare val with data type

function hey(){
    console.log("Good Morning !")
}
hey()

//1st class Function
var abc = function(){
    console.log("hello")
}
abc()

//another way
var sdk = ()=>{
    console.log("kimonache")
}
sdk()

// let & conts used in ES5 version
// var is global variable
// let is also aprx same
// const (constant) val not changed

const groom = "Selmon"
const bride = "Kat"

//groom = "Vicky" errror as const not changed

console.log(groom, "Weds", bride)

//Array
var arr = [10, "Nipurn", 98.3, true]
console.log(arr)


//Functions - map filter reduce forEach
var arr = [10,20,30,50,40,60,10]
arr.forEach(function(ele){
    console.log('hi', ele)
})

// () functions
// {} objects
// [] array

var obj = {
    user: "Anshu",
    age: 19
}
console.log(obj.user)

//Array of Objects
var arr = [
    {name: "Anshu", age: 19},
    {name: "eush", age:29},
]
console.log(arr[1].name)

//DOM (Document Object Model)

// 4 pillars of DOM

// Selection of an Element
// Changing HTML
// Changing CSS
// Event Listener

// //1st
// var a = document.querySelector("h1")
// console.log(a)

// //2nd
// a.innerHTML = "Change"

// //3rd
// h1.style.color = "yellow"

//4th
var h1 = document.querySelector("h1")
h1.addEventListener('mouseenter', function(){
    h1.innerHTML = "ye kia howe"
    h1.style.color = "Yellow"
})
 



//JavaScript full [17/07/2026]

//FUNCTIONs

//closure - fnc ke ander jo return kare outer val
function abcd() {
    let val = 0;
    return function(){
        console.log(val);
    }
}

//IIFE
(function init(){
    console.log("This is IIFE function - Immediately fnc call")
})();

//Used to make private - a.getscore & a.setscore
let a = (function (){
    let score = 0;
    return {
        getscore: function(){
            console.log(score);
        },
        setscore: function(val){
            score = val;
        },
    };
})();


//BMI calc

function bmi(weight, height){
    return weight / (height * height);
}
console.log(bmi(69, 1.7).toFixed(2)); //upto 2 decimal places 'toFixed'


//reusable discount calc [HOF]

function discountCalc(discount){
    return function (price) {
        return price - price * (discount/100);
    };
}

let ten = discountCalc(10);
let twenty = discountCalc(20);

console.log(ten(1200));
console.log(twenty(1200));
 

//counter fnc (closures)

function counter(){
    let count = 0;
    return function (){
        count ++;
        return count;
    }
}

let c = counter(); //it has ability to hold the val
console.log(c()); //return 1
console.log(c()); //return 2

let d = counter(); // restart with 0
console.log(d()); // return 1


//IIFE to make secrete password

(function (){
    const password = "Secret Password";
    console.log(password);
})();
//console.log(password); //give error as password is Private


//ARRAY

//create
let marks = [10, 20, 40, 50];

//access
marks[0]; // 0th idx = 10

let arr11 = new Array

//modify
let arr = [1,2,3,4];
arr[3] = 5;


//methods
arr.push(30);
arr.pop();

arr.shift(); //pop val at start
arr.unshift(); //add val at start

let newarr = arr.slice(0,4); //pop val (idx, no. of val remove[idx+1]) it create new arr
arr.splice(1, 0, "green", "blue"); //it can also add val

arr.reverse();
arr.sort().reverse(); 
let src = arr.sort(function (a, b) {
    return a-b; //asce
        // b-a // desc
});
  
arr.forEach(function(val){
    console.log(val+5);
});


let newarr2 = arr.map(function(val){
    //console.log(val);
    if(val>10) return val;
});

let newarr3 = arr.filter(function(val){
    if(val > 4) return true; //if val follow condition then add in new arr
}); 

let ans = arr.reduce(function(accumulator, val){
    return accumulator + val;
}, 0); ///return sum by reduce the whole arr

let arr1 = [
    {id: 1, key: 1},//return this first found val
    {id: 2, key: 2},
    {id: 3, key: 1},//not this
];

let found = arr1.find(function(val){
    return val.key == 1;
});

arr.some(function(val){ //if condition satisfied return T
    return val > 80; 
});


arr.every(function(val){ //opposite of some
    return val>23;
});

//Destructuring
let arr3 = [1,2,3,4,5];
let[a1,b1, ,c1] = arr;


//spread
let a11 = [1,2,3,4,5];
let b = [...arr];   //store all a val in it and if changes in b not effect in a




//OBJECTS [18/07/2026]

let obj1 = {}; //Blanck obj

let objc = {
    name: "Nipurn", //key: value structure
    age: 20,
    corse: "CSE",
};

objc.age; //access by .
objc['age']; //access by []
 
let aa = "name"
objc[aa] //shows Nipurn which is present in objc

//deep obj
const user = {
    name: "Anshu",
    address: {
        city: "North East Delhi",
        pin: 110053,
        locations: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};

user.address.locations.lat;

//Destructuring
let {lat, lng} = user.address.locations;

for(let key in user){
    console.log(key);
    console.log(key, user[key]); // print key & key's val
};

Object.keys(user); //put all object's keys in arr

Object.entries(user); //array's of arr

let objct = {...user}; //Copies obj in objct

Object.assign({price: Infinity}, user); //also copies the obj but we can add new things by{price: Infinity}

//if we copy nested obj by spread{...obj} after change in obj2 it will change automatically in obj1 so we use deep clone
let obj = {
    name: "Arsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "bhopal",
    },
};

let obj20 = {...obj};
obj20.address.city = "Indore";

//Deep Clone

// JSON.stringify(obj) //convert obj content in string
// JSON.parse(obj); //reverse the above string to normal

let jsonString = JSON.stringify(obj);
let parsedObj = JSON.parse(jsonString);

let obj2 = JSON.parse(JSON.stringify(obj)); //changes occur in obj2 only not in obj

//optional chaining
obj?.address?.city; //if address exist return city if speling is changed of it so return undefined not give error

//computed properties -> if we want to add {admin: Anshu} in obj
let role = "admin";

let info = {
    name: "Nipurn",
    age: 20,
    address: {
        city: "New Delhi"
    },
    [role]: "Anshu", //here role = admin 
};



