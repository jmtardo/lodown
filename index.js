'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
* filter: Designed to filter values in a collection based on a test. 
* Takes a collection, Array or Object, and passes each value 
* in the collection through a test Function. The test Function returns 
* true if the value passes the test, false otherwise. Values that pass 
* the test are collected and returned in an output Array.
* 
* @param {Array or Object} collection: The collection to filter.
* @param {Function} test: The Function to be applied to each value in 
* the collection. The test Function must return a Boolean based on some 
* logic which tests the value given to it. This function is a test. 
* 
* @return {Array}: An Array containing the filtered collection values. 
* The Array will contain only the values that passed the test.
* 
* Usage: 
* 
*      const letters = ['a', 'b', 'b', 'c'];
*      const onlyBs = filter(letters, function(letter) {
*          return letter === 'b';
*      });
*      console.log(onlyBs); // -> ['b', 'b']
*/

 function filter(arr, fun) {
    let pass = [];
    
    each(arr, function(el, i, arr) {
        if (fun(el, i, arr)) {
            pass.push(el);
        }
    });
    return pass;
 }
 
 // filter example call, returns all odd numbers
 //filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 !== 0; });
 
 module.exports.filter = filter; 


/** identity: Designed to return the same value as the argument. Used as a "default iterator" or "No-Op"
* @param {anything} - can take anything as an argument and will return the same value back. 
*    
* @return - will return @param unchanged
*   
* Usage:
*    identity(5) === 5
*    identity({a: "b"}) === {a: "b"}
*/

function identity(anything) {
    return anything;
}
 // identity example call,
// identity(true); //=> true 

  
 /** more identity example code
 var number = 1;  number === identity(number);  // => true
 */
 
  module.exports.identity = identity;
  
  
  /** typeOf: Designed to return the data type of the argument. It tests for primative and complex types.
   * This is useful because sometimes you need to know the type of an element in order to process it. 
* 
*   @param {Anything} - can take anything as an argument and tests it for data type. 
*  
*   @ return - returns the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Usage:
*  typeOf(134) -> "number"
*  typeOf("javascript") -> "string"
*  typeOf([1,2,3]) -> "array"
* typeOf(typeOf); -> "function"
* typeOf({}); -> "object"
*/

function typeOf(anything){
   if( Array.isArray(anything)) return "array";
   if(anything === null) return "null";
   return typeof anything;
}
 // typeOf example call,
// typeOf(12); // => 'number'

module.exports.typeOf = typeOf;

 

/** first: Designed to return the first element of an array or elements of an array up to a number. 
*  
*   @param {array} - provides the array to use
*  @param {number} - number < 0 returns 1st element. Passing a number will return those 
*                    numbered elements of the array. 
* @return 
*    If <array> is not an array, it will return and empty [] 
*           first("banana",3) => [] 
*   If <number> is not given or not a number, return just the first element in <array>.
*           first(["ant","bat","cat"]) => 'ant'   
*   Returns the first <number> items of <array>
*           first(["ant","bat","cat"], 2) =>  ['ant', 'bat' ]
* Usage:
*    first(["ant","bat","cat"], 1) -> "ant"
*    first(["ant","bat","cat"], 2) -> ["ant", "bat"]
*    first(["ant","bat","cat"], "bananas") -> ["ant","bat","cat"]
*/

 function first(array, num) {
    if (!Array.isArray(array) || num < 0) return [];
    if (!num) return array[0];
    return array.slice(0, num);
}
 // first example calls,
// first(["ant","bat","cat"]); //=> 'ant'
// first(["ant","bat","cat"], 1); //= ['ant']

module.exports.first = first;

/** last: Designed to return the last element of an array or final elements of an array up to a number. 
*  
*  @param {array} - provides the array to use
*  @param {number} - number < 0 returns last element. Passing a number will return those 
*                    numbered elements of the array starting at the end of the array. 
* @return 
*   If <array> is not an array, it will return and empty [] 
*           first("banana",3) => [] 
*   If <number> is not given or not a number, return just the last element in <array>.
*           first(["ant","bat","cat"]) => 'cat'   
*   Returns the last <number> items of <array> starting at end of array
*           first(["ant","bat","cat"], 2) =>  [ 'bat', 'cat' ]
* Usage:
*    last(["ant","bat","cat"], 2) -> ["bat","cat"]
*    last(["ant","bat","cat"], "bananas") -> ["cat","bat","ant"]
*/

 function last(array, num) {
    if(!Array.isArray(array) || num < 0) return [];
    if(!num) return array[array.length-1]; 
    return array.slice(-num);
    
}
 // last example call,
// last(["ant","bat","cat"]); //=> 'cat'

module.exports.last = last;

/**  indexOf: Designed to return the first occurance of the value index found in an array. 
*          Tests if value is included in the array 
*          If the value is not present, it will return -1.
* 
* @param {array} - provides the array to use 
* @param {value} - sets the value index of the array to be returned
* 
* @return 
*   1) Return the index of <array> that is the first occurrance of <value>
*           indexOf(["ant","bat","cat"], "cat") -> 2
*   2) Return -1 if <value> is not in <array>
*           indexOf(["ant","bat","cat"], "dog") -> -1
*  
*  
*/



function indexOf(arr, val) {
    if(!arr.includes(val)) return -1;
    let output = -1; //truthy/falsey switch 
   
    each(arr, function(el, i) {
        if(el === val && output === -1 ) {
            output = i;
        } 
    });
    
  return output;  
}

 // indexOf example call,
// indexOf(["ant","bat","cat"], "ant"); // => 0 

module.exports.indexOf = indexOf;


  /**  reject: Designed to be the opposite of filter.
* Returns the elements of a collection that do not pass a test. 
* Values not passing are collected and returned into an output Array. 
* 
*@ param {Array of Object} is the collection being tested for rejection. 
* @param {function} is the test. This function is applied to each value in the collection. 
* Returns a Boolean value based on the test. 
* 
* @return {Array} Returns an Array containing the rejected values from the test function. 
* Will only contain values that failed the test. 
* Usage:
*    reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

    function reject(arr, fun) {
        let noPass = [];
         filter(arr, function(el, i, arr) {
            if (!fun(el, i, arr)) {
                noPass.push(el);
            }
        });
        return noPass;
    }
    
 // reject example call,    
 // reject([1,2,3,4,5], function(e){return e%2 === 1}); => [2,4] returns numbers that are not odd!
 
module.exports.reject = reject;

 /**  partition: Designed to create an array of elements split into two arrays.
* The first array contains elements that passed a test, 
* the second contains elements that did not pass the test. 
* Uses Filter & Reject functions to divided the array. 
* 
* @param: {Array} - the collection of elements being tested. 
* Will be decided into 2 different arrays inside of 1 array- ie [ [1,2,3], [4,5,6] ]
* The 1st array will be elements that returned truthy, the 2nd array returns falsy
* 
* @param: {Function} - the Test called on each element in the array. It passes the arguments
*                    element, key, {array} 
* 
* @return: Returns an array of arrays (a true one and a false one)
* 
* Usage:
*   partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
    function partition(arr, fun) {

        var bothArray = [];
        bothArray.push(filter(arr, fun)) + bothArray.push(reject(arr, fun));
            return bothArray;
        }
        
    // 1-line Partition! 
    // partition = (list, test) => [filter(list, test), reject(list, test)];

//example partition call
//partition([1,2,3,4,5], function(element,index,arr){return element % 2 === 1;});
// =>  [ [ 1, 3, 5 ], [ 2, 4 ] ]  array[0] contains elements passed, array[1] contains failures

module.exports.partition = partition;



/**  unique: Designed to return an array that does not contain any duplicates. 
 * Uses indexof to pull out unique instances of each element. 
* 
*  @param: {Array} - the input array to be searched for occurances of an element. 
* 
*  @return: Returns a new array that does not contain any duplicates 
*  
* Usage:
*    unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

    function unique(arr) {
        var noDupl = [];
        filter(arr, function(value, i, arr) {
            if (indexOf(arr, value) === i) noDupl.push(value);
        });
        return noDupl;
    }
    
//example unique call    

// unique(["banana", "banana", "cat", "monkey", "monkey"]) 
//=> [ 'banana', 'cat', 'monkey' ] noDups! 

module.exports.unique = unique;

/** map: Designed to create a new array of values which have undergone a 
 * transformation in a function using each to process each action onto the collection's elements. 
*
* @param {collection} - the array or object collection that will be used in the function
* 
* @param {function} - the action to be applied to the collection 
*
* @return: returns the value of each function call into a new array & returns that array
*
* Usage:
*    map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

   function map(col, fun) {

        var mappedArray = [];
        each(col, function(el, i, arr) {
            mappedArray.push(fun(el, i, arr));
        });
        return mappedArray;
    }
    
//example map call  
//map([1,2,3,4], function(e){return e + 20}) 
// => [ 21, 22, 23, 24 ] - adds 20 to each element & returns new array 

 module.exports.map = map;
 
 
 /** pluck: Designed to extract a list of property values out of 
  * a collection that has been processed using map
  * 
* @param {array of objects (arr)} - the collection to be examined and taken from
*   
* @param {property} - the property where the value will be taken from. 
*  
* @return - returns an array of values from the property's of a collection 
* Usage:
*  pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


  function pluck(arr, prop) {
        return map(arr, function(el, i, arr) {
            return arr[i][prop];
        });
    }
    
//one line pluck
// pluck = (arr, prop) =>  map(arr, (el, i, arr) => arr[i][prop]); 
    
module.exports.pluck = pluck;
     
/**  contains: Designed to search for values in a collection and 
 * returns a true Boolean if that value is present. Uses indexOf to search for instances. 
*  
* 
* @param {array} - the array being examined 
* 
* @param {value} - the value being searched for 
* 
* @return: Returns true if <array> contains <value>, Returns false if not found. 

* Usage:
*    contains([1,"two", 3.14], "two") -> true
*/


    function contains(arr, val) {
        return indexOf(arr, val) !== -1 ? true : false;
    }

module.exports.contains = contains;

 /** every: Designed to test all elements of a collection. 
  * Returns true if all elements pass, stops if 1 element returns false. 
*  
*   @param {collection(col)} - the collection to be tested
*   
*   @param {function} - the test function 
* 
*   @return: returns true if all elements pass test, returns false if 1 element fails 
* 
* Usage:
*    every([2,4,6], function(e){return e % 2 === 0}) -> true
*    every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

    function every(col, test) {
        if(test === undefined) test = identity;
        if(Array.isArray(col)) {
            for (let i = 0; i < col.length; i++) {
                if(!test(col[i], i, col)) return false;
            }
        } else {
            for (let key in col) {
                if(!test(col[key], key, col)) return false;
            }
        }
        return true;
    }  
    
module.exports.every = every;

 /** some: Designed to test a collection for true elements. Stops if 1 element returns true. 
* 
* @ param {collection (col)} - the collection being tested
* 
* @ param {function (test)} - the function used to test the collection for true elements
* 
* @return : Returns true if at least one element passes the test and stops. 
*           Returns false if false for all elements. 
* Usage:
*   some([1,3,5], function(e){return e % 2 === 0}) -> false
*   some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
     
   function some(col, test) {
        if(test === undefined) test = identity;
        if(Array.isArray(col)) {
            for (let i = 0; i < col.length; i++) {
                if(test(col[i], i, col)) return true;
            }
        } else {
            for (let key in col) {
                if(test(col[key], key, col)) return true;
            }
        }
        return false;
    }
    
module.exports.some = some;

/**reduce: Designed to reduce all elements of a collection into a 
* single value in a series passes through the collection. 
*
* @param {array} - the collection being reduced into a single value
* 
* @param {function} - the method of reduction (add, sub, multi, etc)
*       for every element in <collection> passing the arguments:
*       previous result, element, index
*       Use the return value of <function> as the "previous result"
*       for the next iteration
*       After the last iteration, return the return value of the final <function> call
* 
* @param {seed} - the starting value for reduction 
*  uses {seed} as the "previous result" on the very first iteration
*  If no <seed> was given, use the first element/value of <collection> as <seed>
* 
*
* Usages:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) 
*     -> 6
*/
   //  const sum = _.reduce([1, 2, 3], function(a, b) {return a + b; });
     
    function reduce(array, combine, seed) {
         let 
            combined = seed,
            i = 0;
         if(combined === undefined) {
             combined = array[0];
             i = 1;
         }
         for(; i < array.length; i++) {
             combined = combine(combined, array[i], i, array);
         }
         return combined;
     }
     
module.exports.reduce = reduce;


/**extend: Designed to copy all properties in an orginal, source, object 
* and transfer them to a different, targeted, object. 
* Copy by reference and copied in-order.
* 
* @param: {object1} - where properties from object 2 will be copied to
* 
* @param: {object2} - the orginal source of properties
* 
* @param: {...theArgs} - a rest parameter that places any remaining params into an array 
*                       the array can be accessed by using a for-loop.
* 
* @return: returns data properties copied from object2 (and other possible objs) into object1 - 
*               returns an updated object1
* 
* Usage:
*   var data = {a:"one"};
*   extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

   function extend(object1, object2, ...theArgs){
    for (var keys in object2){
        object1[keys] = object2[keys];
    }
    for (var i = 0; i < theArgs.length; i++) {
        for (var keys in theArgs[i]) {
            object1[keys] = theArgs[i][keys];
        }
    }
    
    return object1;
} 


module.exports.extend = extend;