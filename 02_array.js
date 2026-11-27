//ARRAY [17/07/2026]

//create
let marks = [10, 20, 40, 50];

//access
marks[0]; // 0th idx = 10

//let arr = new Array;

//modify
let arr = [1,2,3,4];
arr[3] = 5;


//methods
arr.push(30);
arr.pop();

arr.shift(); //pop val at start
arr.unshift(); //add val at start

let newarr = arr.slice(0, 4); //pop val (idx, no. of val remove[idx+1]) it create new arr
arr.splice(1, 0, "green", "blue"); //can also add val

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
let[a1,b1, , c] = arr;


//spread
let a = [1,2,3,4,5];
let b = [...arr];   //store all a val in it and if changes in b not effect in a