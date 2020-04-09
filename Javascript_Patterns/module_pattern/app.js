//Basic Structure

//iife
(function() {
    //Declares private var and func

    return{ 
        //Declares public var and func
    }
})();

/*-------------------------*/


//Standard Module Pattern
const UICtrl = (function () {
    let text='hello world';

    function changeText () {
        let changeText = document.querySelector('h1');
        changeText.textContent = text;
    }

    return {
        callChangeText() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

//Revealing Module Pattern

const itemCntrl = (function() {
    let data = [];

    function add(item) { 
        data.push(item);
        console.log('item added...');
     }

     function get(id) {
         return data.find(item => {
             return item.id === id;
         });
     }

     return {
         add,
         get
     }
})();

itemCntrl.add({id: 1, name:'john'});
itemCntrl.add({id: 2, name:'make'});
console.log(itemCntrl.get(1));