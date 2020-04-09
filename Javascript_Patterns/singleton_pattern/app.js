const Singleton = (function() {
    let instance;

    function createInstance() {
        const obj = new Object({name: 'john'});
        return obj;
    }

    return {
        getInstance: function () {
            if(!instance) {
                 instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceA === instanceB); // true proves that cannot have more that one instance with this pattern