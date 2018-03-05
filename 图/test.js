(function test(a,i) {
	let b = a*1.2;
	i++;
	if(i === 40){
		console.log(b);
		return;
	}
	return test(b+14000,i);
})(14000,1);
