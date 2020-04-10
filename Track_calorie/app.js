//Storage Controller

//Item Controller
const ItemCntrl = (function() {
    //Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structure / State
    const data = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: '1200'},
            // {id: 1, name: 'Cookie', calories: '400'},
            // {id: 2, name: 'Eggs', calories: '300'}
        ],
        currentItem: null,
        totalCalories: 0
    }

    //Public Methods
    return {
        getitems: function () {
            return data.items;
          },
        addItem: function (name, calories) {
            let ID;
            //Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Calories to number
            calories = parseInt(calories);

            //Create new item
            newItem = new Item(ID, name, calories);
            
            //Add to items array
            data.items.push(newItem);

            return newItem;
        },
        getTotalCalories: function() {
            let total = 0;

            //loop through item and add calories
            data.items.forEach(function(item){
                total += item.calories;
            });

            //Set total calories in data structure
            data.totalCalories = total;

            //Return total
            return data.totalCalories;
        },
        logdata: function() {
            return data;
        }
    }
})();

//UI Controller
const UICntrl = (function() {
    
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    //Public methods
    return {
        populateItemList: function (items) {
            let html = '';
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                     <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                     </a>
            </li>`;
            })

            //Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
          },
          getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
          },
          addListItem: function (item) { 
            //Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            //Create li element
            const li = document.createElement('li');
            //Add class
            li.className = 'collection-item';
            //Add Id
            li.id = `item-${item.id}`;
            //Add Html
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
               <i class="edit-item fa fa-pencil"></i>
            </a>
            `;
            //Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
           },
           clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
           },
           hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
           },
           showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
           },
          getSelectors: function () { 
              return UISelectors;
           }
    }
    
})();

//App Controller
const App = (function(ItemCntrl, UICntrl) {
    //Load event listeners
    const loadEventListeners = function () {
        //Get UISelectors
        const UISelectors = UICntrl.getSelectors();

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    //Add item submit
    const itemAddSubmit = function(e) {
        //Get form input from UI Controller
        const input = UICntrl.getItemInput();

        //Check for name and calorie input
        if(input.name !== '' && input.calories !== '') {

            //Add item 
            const newItem = ItemCntrl.addItem(input.name, input.calories);

            //Add item to UI List
            UICntrl.addListItem(newItem);

            //Get total Calories
            const totalCalories = ItemCntrl.getTotalCalories();

            //Add total calories to UI
            UICntrl.showTotalCalories(totalCalories);

            //Clear input fields
            UICntrl.clearInput();
        }

        e.preventDefault();
    }

    //Public methods
    return {
        init: function() {

            //Fetch items from data structure
            const items = ItemCntrl.getitems();

            //Check if any items
            if(items.length === 0) {
                UICntrl.hideList();
            }else {
                //Populate list with items
                UICntrl.populateItemList(items);
            }

             //Get total Calories
             const totalCalories = ItemCntrl.getTotalCalories();

             //Add total calories to UI
             UICntrl.showTotalCalories(totalCalories);

            //Load event listeners
            loadEventListeners();
        }
    }
    
})(ItemCntrl, UICntrl);

//Initialize app
App.init();