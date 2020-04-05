const http = new easyHTTP();

//GET POSTS
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    if(err) {
        console.log(err);
    }else {
        console.log(response);
    }  
});