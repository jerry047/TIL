//Storage Controller
const StorageCntrl = (function(){

    //Public Methods
    return {
        storeItem: function(item){
            let items;

            //Check if any items in LS
            if(localStorage.getItem('items') === null) {
                items = [];
                //Push new item 
                items.push(item);
                //Set LS
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                //Get data present in LS
                items = JSON.parse(localStorage.getItem('items'));

                //Push the new item
                items.push(item);

                //Reset LS
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function () { 
            let items;
            if(localStorage.getItem('items') === null){
                 items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
         },
         updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index){
                if(updatedItem.id ===item.id){
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
         },
         deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index){
                if(id ===item.id){
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
         },
         clearAllItemsFromStorage: function() {
             localStorage.removeItem('items');
         }
    }
})();

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
        // items: [
        //     // {id: 0, name: 'Steak Dinner', calories: '1200'},
        //     // {id: 1, name: 'Cookie', calories: '400'},
        //     // {id: 2, name: 'Eggs', calories: '300'}
        // ],
        items: StorageCntrl.getItemsFromStorage(),
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
        getItemById: function (id) { 
            let found = null;
            //Loop through items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            })
            return found;
         },
         updateItem: function (name, calories) {
            //Calories to number
            calories = parseInt(calories);

            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found;
         },
         deleteItem: function(id) {
            //Get ids
            ids = data.items.map(function(item){
                return item.id;
            });

            //Get index
            const index = ids.indexOf(id);

            //Remove item 
            data.items.splice(index, 1);
         },
         clearAllItems: function () {
            data.items = [];
         },
         setCurrentItem: function(item) {
            data.currentItem = item;
         },
         getCurrentItem: function () {
            return data.currentItem;
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
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        cleartBtn: '.clear-btn',
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
           updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Turn Node List to Array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                       <i class="edit-item fa fa-pencil"></i>
                    </a>
                    `;;
                }
            });
           },
           deleteListItem:function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
           },
           clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
           },
           addItemToForm: function (param) {
            document.querySelector(UISelectors.itemNameInput).value = ItemCntrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCntrl.getCurrentItem().calories;
            UICntrl.showEditState();
             },
            removeItems: function(){
                let listItems = document.querySelectorAll(UISelectors.listItems);

                //Turn Node list into an array
                listItems = Array.from(listItems);

                listItems.forEach(function(item){
                    item.remove();
                });
            },
           hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
           },
           showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
           },
           clearEditState: function() {
               UICntrl.clearInput();
               document.querySelector(UISelectors.updateBtn).style.display = 'none';
               document.querySelector(UISelectors.deleteBtn).style.display = 'none';
               document.querySelector(UISelectors.backBtn).style.display = 'none';
               document.querySelector(UISelectors.addBtn).style.display = 'inline';
           },
           showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
          getSelectors: function () { 
              return UISelectors;
           }
    }
    
})();

//App Controller
const App = (function(ItemCntrl, StorageCntrl, UICntrl) {
    //Load event listeners
    const loadEventListeners = function () {
        //Get UISelectors
        const UISelectors = UICntrl.getSelectors();

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        //Disable submit on enter
         document.addEventListener('keypress', function(e){
             if(e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
             }
         })

        //Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        //Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        //Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        //Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICntrl.clearEditState);

        //Clear items event
        document.querySelector(UISelectors.cleartBtn).addEventListener('click', clearAllItemsClick);
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

            //Store in local Storage
            StorageCntrl.storeItem(newItem);

            //Clear input fields
            UICntrl.clearInput();
        }

        e.preventDefault();
    }

    //Click edit item
    const itemEditClick = function(e) {
        if(e.target.classList.contains('edit-item')) {
            //Get list item id (item-0, item-1)
            const listId = e.target.parentNode.parentNode.id;

            //Break into an array
            const  listIdArr = listId.split('-');

            //Get the actual id
            const id = parseInt(listIdArr[1]);

            //Get item
            const itemToEdit = ItemCntrl.getItemById(id);

            //Set current item
            ItemCntrl.setCurrentItem(itemToEdit);

            //Add item to form
            UICntrl.addItemToForm();
        }

        e.preventDefault();
    }

    //Update item submit
    const itemUpdateSubmit = function (e) { 

        //Get item input
        const input = UICntrl.getItemInput();

        //Update item
        const updatedItem = ItemCntrl.updateItem(input.name, input.calories);

        //Update UI
        UICntrl.updateListItem(updatedItem);

        //Get total Calories
        const totalCalories = ItemCntrl.getTotalCalories();

        //Add total calories to UI
        UICntrl.showTotalCalories(totalCalories);

        //Update local Storage
        StorageCntrl.updateItemStorage(updatedItem);

        UICntrl.clearEditState();

        e.preventDefault();
     }

     //Delete button event
     const itemDeleteSubmit = function(e) {
        //Get Current Item
        const currentItem = ItemCntrl.getCurrentItem();

        //Delete from data structure
        ItemCntrl.deleteItem(currentItem.id);

        //Delete from UI
        UICntrl.deleteListItem(currentItem.id);

        //Get total Calories
        const totalCalories = ItemCntrl.getTotalCalories();

        //Add total calories to UI
        UICntrl.showTotalCalories(totalCalories);

        //Delete from LS
        StorageCntrl.deleteItemFromStorage(currentItem.id);

        UICntrl.clearEditState();

        e.preventDefault();
     }

     //Clear All items event
     const clearAllItemsClick = function(){
         //Delete All items from data structure
         ItemCntrl.clearAllItems();

         //Get total Calories
        const totalCalories = ItemCntrl.getTotalCalories();

        //Add total calories to UI
        UICntrl.showTotalCalories(totalCalories);

         //Remove from UI
         UICntrl.removeItems();

         //Clear from LS
         StorageCntrl.clearAllItemsFromStorage();

         //Hide UL
         UICntrl.hideList(); 
     }

    //Public methods
    return {
        init: function() {

            //Clear edit state / set initial state
             UICntrl.clearEditState();

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
    
})(ItemCntrl, StorageCntrl, UICntrl);

//Initialize app
App.init();