### To create table in console
```javascript
var obj = {
    a:1,
    b:2
};

console.table(obj);
```

### gives time taken to execute cetain line of js code in console
```javascript
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
```

### Type Conversion
```javascript
parseInt(); //change the value to integer
parseFloat(); //change the value to decimal
String(); //change the value to string
val.toString(); //method to change the value to string
tofixed(); //round number to specific number of decimal
```

### Math
```javascript
Math.random(); //gives random value
Math.round(2.6); //gives round of value = 3
Math.floor(5.8); //gives round of lower value = 4
Math.ceil(4.4); //gives round of higher value = 5
```

### Strings
- string concatination
```javascript
var firstName = "brandon";
var lastName = "ingram";

val = firstName.concat(' ', lastName);
```
- slice in string <br>
`firstName.slice(0, 2); // gives selected item between index 0 and 2`
- template string
```javascript
//value for template string
const name = 'zion';
const age = '19';
const profession = 'nba';
var html;

html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Profession: ${profession}</li>
    <li>${age >  20 ? 'not a teenager' : 'still a teenager'}</li>
    </ul>
`;
document.body.innerHTML = html;
```

### sorting
```javascript
val = arr.sort(function (x, y) {
    return x - y;
  });
```

### to check if it is array 
`Array.isArray(arr)`

### loops
- for loop
```javascript
for(let i = 0; i<10; i++){
    if(i === 2){
        console.log('This is number two');
        continue;
    };

    if(i === 5){
        break;
    }
    console.log('number: ', i);
```
- for each loop for arrays
```javascript
const bikes = ['yamaha', 'suzuki', 'honda', 'bmw', 'ninja'];

bikes.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});
```
- map in object inside an array
```javascript
const users = [
    {id: 1, name: 'sara'},
    {id: 2, name: 'algo'},
    {id: 3, name: 'grim'}
]

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);
```
- for in loops for object
```javascipt
const player = {
    firstName: 'Zion',
    lastName: 'WilliamSon',
    age: 19
}

for(let x in player){
    console.log(`${x} : ${player[x]}`)
}
```

### location object
-to reload the page
`window.location.reload();'

### Navigator object
```javascript
window.navigator.platform; /* used for platform specific task */
```
