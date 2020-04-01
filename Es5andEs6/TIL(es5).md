

### To calculate age from dob
```javascript
 this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
```
### Prototype
- to create function within prototype
```javascript
//Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}
// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}
Person.prototype.calculateAge = function(){
  const diff =  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
```
- prototype method to check if value present or not
`mary.hasOwnProperty('firstName')`
- prototype inheritance
```javascript
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // this inherit the property of person

  this.phone = phone;
  this.membership = membership;
}
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
// Customer greeting after inheriting greeting prototype from person
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}
```
### using object.create to create object and access prototype
```javascript
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

//creating mary object with personPrototypes as its prototype
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

//to call prototype that was instantiated
mary.getsMarried('Thompson');

//can be seen in console using
console.log(marry.greeting());
```
- another way to use object.create to create object and access prototype
```javascript
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});
```
