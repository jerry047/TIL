const http = new EasyHttp;

//GET users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

//Create user data
const user = {
    name: 'John Doe',
    username: 'JohnDoe',
    email: 'johndoe@gmail.com'
}
const user1 = {
    name: 'mary jane',
    username: 'mary',
    email: 'jane@gmail.com'
}

//Post user
http.post('https://jsonplaceholder.typicode.com/users', user)
.then(data => console.log(data))
.catch(err => console.log(err));

//Update user
http.put('https://jsonplaceholder.typicode.com/users/1', user1)
.then(data => console.log(data))
.catch(err => console.log(err));


//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2', user)
.then(data => console.log(data))
.catch(err => console.log(err));