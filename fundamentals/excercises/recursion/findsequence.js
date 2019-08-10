/*
	Starting from the number 1 and repeatedly either adding 5 or multiplying by 3, 
	an infinite set of numbers can be produced. Given a number find a sequence of
	additions and multiplications that produces that number
 */

function findsolution(target) {
	function find(current, history)
	{
		if(current == target)
		{
			return history;
		}
		else if (current > target)
		{
			return null;
		}
		else 
		{
			return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);	
		}
	}
	return find(1, "1");
}
console.log(findsolution(24));