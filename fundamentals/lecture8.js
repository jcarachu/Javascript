let val;

// Number to string
val = String(5);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4,5]);

//toString()
val = (5).toString();
val = (true.toString());

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4,5]);

// ParseInt
val = parseInt('100');
val = parseInt('100.20');
val = parseFloat('100.20');

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

// Type cohersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
// js converted val2 as string
// concat val1 with val2 as string literal

console.log(sum);
console.log(typeof sum); // 56 as string

console.log(typeof parseInt(sum));
