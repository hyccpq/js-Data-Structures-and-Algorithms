const aplusb = function (a, b) {
	if(b === 0)return a;
	let xor = a ^ b;
	let and = (a & b) << 1;
	return aplusb(xor, and)
}

console.log(aplusb(7, 6));