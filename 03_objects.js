//OBJECTS [18/07/2026]

//let obj = {}; //Blank obj

let obj1 = {
    name: "Nipurn", //key: value structure
    age: 20,
    corse: "CSE",
};

obj.age; //access by .
obj['age']; //access by []
 
let aa = "name"
obj[aa] //shows Nipurn which is present in obj

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

for(let key in obj){
    console.log(key);
    console.log(key, obj[key]); // print key & key's val
};

Object.keys(obj); //put all object's keys in arr

Object.entries(obj); //array's of arr

let obje = {...obj}; //Copies obj in obj2

Object.assign({price: Infinity}, obj); //also copies the obj but we can add new things by{price: Infinity}

//if we copy nested obj by spread{...obj} after change in obj2 it will change automatically in obj1 so we use deep clone
let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "bhopal",
    },
};

let obj2 = {...obj};
obj2.address.city = "Indore";

//Deep Clone

JSON.stringify(obj) //convert obj content in string
JSON.parse(obj); //reverse the above string to normal

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



