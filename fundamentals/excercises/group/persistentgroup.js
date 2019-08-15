class PersistentGroup {
	constructor(members)
	{
		this.members = members;
	}
	
	add(value)
	{
		if (this.has(value))
			return this;
		return new PersistentGroup(this.members.concat([value]));
	}
	
	delete(value)
	{
		if (!this.has(value)) 
			return this;
		return new PersistentGroup(this.members.filter(m => m !== value));
	}
	
	has(value)
	{
		return this.members.includes(value);
	}
}

PersistentGroup.empty = new PersistentGroup([]);
let a = PersistentGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));