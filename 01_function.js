//JavaScript full [17/07/2026]

//FUNCTIONs

//closure - fnc ke ander jo return kare outer val
function abcd() {
    let val = 0;
    return function(){
        console.log(val);
    }
}

//IIFE immediate fnc call ();
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
console.log(bmi(69, 1.7).toFixed(2)); //upto decimal places


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
console.log(password); //give error as password is Private