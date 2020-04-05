const http = new easyHTTP();

//GET POSTS
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    if(err) {
        console.log(err);
    }else {
        console.log(response);
    }  
});

//Create Data
const data = {
    title: 'Custom-post',
    body: 'this is a custom post'
};

//Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err) {
        console.log(err);
    }else {
        console.log(post);
    } 
})

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err) {
        console.log(err); 
    }else {
        console.log(post);
    }  
})