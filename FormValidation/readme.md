# Regular Expressions

- Methods we can use in RE
```javascript
re = /hello/i;
exec();    // returns result in an array or null
example:
re.exec('hello world');
test();    // returns true or false
example:
re.test('Hello');
match()  // Return result array or null
example:
const str = 'Hello There';
const result = str.match(re);
search()   // Returns index of the first match if not found retuns -1
example:
const str = 'Brad Hello There';
const result = str.search(re);
replace()   // Return new string with some or all matches of a pattern
example:
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
```

- metacharacter symbols used in RE
```javascript
^   // starts from
$   // Ends with
i   // for case insensitive
g   // for global search
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 
```

- Brackets [ ] - Character Sets
```javascript
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit
```

- Braces { } - Quantifiers
```javascript
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times
```

- Paretheses ( ) - Grouping
```javascript
re = /^([0-9]x){3}$/    // Used to group 
```

- Shorthand Character Classes
```javascript
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary
```

- Assertions
```javascript
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y
```
