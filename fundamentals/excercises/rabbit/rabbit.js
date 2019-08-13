function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}
var whiteRabbit = {type: "white", speak};
var hungryRabbit = {type: "hungry", speak};


var Rabbit = class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.toString = function() {
	return `a ${this.type} rabbit`;
};