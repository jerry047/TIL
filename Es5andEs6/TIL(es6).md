### creating constructor using class
```javascript
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  
  // static function doesn't need to be initiated with object rather can be use directly with class
  static addNumbers(x, y) {
    return x + y;
  }
}
// using static function 
Person.addNumbers(1,2);
```

### inheritance using es6 method
```javascript
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);  // this inherits the property of parent class

    this.phone = phone;
    this.membership = membership;
  }
}
```
