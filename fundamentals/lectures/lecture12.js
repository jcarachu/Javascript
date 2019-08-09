// Create some arrays
const numbers =[43,56,33,23,44,36,5];
const numbers2 =new Array(22,45,33,76,54);
const fruit = ['Apple','Banana','Orange', 'Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if its array
val = Array.isArray('Hello');

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

/* Mutating Arrays */
// Append
numbers.push(250);

// Prepend
numbers.unshift(120);

// Take of from end
numbers.pop();

// Splice values
numbers.splice(2,2)

// Reverse the array
numbers.reverse();

// Concatinate arrays
val = numbers.concat(numbers2);

// Sort arrays
val = fruit.sort();
val = numbers.sort();

// Use the 'compare function'
val = numbers.sort(function(x,y){
  return x - y;
})

// Reverse sort numbers
val = numbers.sort(function(x,y) {
  return y - x;
})

// Find
function under50(num)
{
  return num < 50;
}

val = numbers.find(under50);
console.log(numbers);
console.log(val);
