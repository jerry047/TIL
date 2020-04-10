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
            {id: 0, name: 'Steak Dinner', calories: '1200'},
            {id: 1, name: 'Cookie', calories: '400'},
            {id: 2, name: 'Eggs', calories: '300'}
        ],
        currentItem: null,
        totalCalories: 0
    }

    //Public Methods
    return {
        getitems: function () {
            return data.items;
          }
    }
    return {
        logdata: function() {
            return data;
        }
    }
})();

//UI Controller
const UICntrl = (function() {
    
    const UISelectors = {
        itemList: '#item-list'
    }

    //Public methods
    return {
        populateItemList: function (items) {
            let html = '';
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: <em>${item.calories} Calories</em>
                     <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                     </a>
                    </strong>
            </li>`;
            })

            //Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
          }
    }
    
})();

//App Controller
const App = (function(ItemCntrl, UICntrl) {


    //Public methods
    return {
        init: function() {

            //Fetch items from data structure
            const items = ItemCntrl.getitems();

            //Populate list with items
            UICntrl.populateItemList(items);
        }
    }
    
})(ItemCntrl, UICntrl);

//Initialize app
App.init();