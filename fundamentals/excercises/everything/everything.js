function everything1(array, predicate)
{
	for (let element of array)
		if (!predicate(element))
			return false;
	return true;
}

function everything2(array, predicate)
{
	return !array.some(element => !predicate(element));
}

console.log(everything1([1,3,5], n => n < 10));
console.log(everything2([2,4,16], n => n < 10));
console.log(everything1([], n => n < 10));