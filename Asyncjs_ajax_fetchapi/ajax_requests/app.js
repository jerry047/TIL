//Event listen
document.getElementById('get-data').addEventListener('click', getData);
document.getElementById('get-data-json').addEventListener('click', getDataJson);

function getData(){
    var xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);
    
    xhr.onload = function() {
        let data;
        if(this.status === 200){
            data = this.responseText;
            // console.log(data);
                // console.log(singledata);
                document.querySelector('.data').innerHTML = data;
        }
    }
    xhr.send();
}

function getDataJson(){
    var xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.json', true);
    
    xhr.onload = function() {
        let data;
        if(this.status === 200){
            data = JSON.parse(this.responseText);
            // console.log(data);
            data.forEach(function(singledata){
                // console.log(singledata);
                document.querySelector('.data-json').innerHTML += `<ul><li>${singledata.name}</li></ul>`;
            })
            
        }
    }
    xhr.send();
}