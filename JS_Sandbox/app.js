// basic shit

var obj = {
    a:1,
    b:2
};

console.table(obj);

console.error('this is error');

// console.clear();


//gives the time duration to execute certain line of js codes
console.time('hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('hello');

let val;
val = 5;
console.log(typeof val);
console.log(val.toFixed(2)); /* can be used for numbers */
console.log(val); 
val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length); /* can be used for string and array */

val = Math.round(2.6);
console.log(val);
val = Math.floor(5.8);
val = Math.ceil(4.4);

console.log(val)

val = Math.floor(Math.random() * 20);

console.log(val);

// string concatination using concat method

var firstName = "brandon";
var lastName = "ingram";

val = firstName.concat(' ', lastName);

console.log(val);

val = firstName.indexOf('a');

console.log(val);

val = firstName.charAt('2');

console.log(val);

//using slice in string
val = firstName.slice(0, 2);

console.log('firstname: ', val);

// values for template string
const name = 'zion';
const age = '19';
const profession = 'nba';
var html;

//using template string

html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Profession: ${profession}</li>
    <li>${age >  20 ? 'not a teenager' : 'still a teenager'}</li>
    </ul>
`;

document.body.innerHTML = html;

var arr = [2,3,43,65,42];

//sorting
val = arr.sort(function (x, y) {
    return x - y;
  });

  console.log(val);

//find
function under20(arr){
    return arr < 20;
};

val = arr.find(under20);

console.log('number under 20: ', val);

val = Array.isArray(arr);

val = arr.splice(1,2);

console.log(val);
console.log(arr);

const birthday = new Date('5-1-1996');

console.log(birthday);

//loops 

for(let i = 0; i<10; i++){
    if(i === 2){
        console.log('This is number two');
        continue;
    };

    if(i === 5){
        break;
    }
    console.log('number: ', i);
}

//foreach loops for array

const bikes = ['yamaha', 'suzuki', 'honda', 'bmw', 'ninja'];

bikes.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

//MAP in object inside an array

const users = [
    {id: 1, name: 'sara'},
    {id: 2, name: 'algo'},
    {id: 3, name: 'grim'}
]

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);

//for in loop for objects

const player = {
    firstName: 'Zion',
    lastName: 'WilliamSon',
    age: 19
}

for(let x in player){
    console.log(`${x} : ${player[x]}`)
}

//windows object

//for innerheight and innerwidth
window.innerHeight;
window.innerWidth;

//for outer height and outerwidth
window.outerHeight;
window.outerWidth;

//for scroll points
window.scrollX; /* for horizontal scrolling */
window.scrollY; /* for vertical scrolling */ 

//location object
 window.location;

 //redirect
// window.location.href = 'http://google.com';

 //reload
//  window.location.reload();

//Navigator object
window.navigator;
window.navigator.platform; /* used for platform specific task */