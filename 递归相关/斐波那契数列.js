let count = 0;
function fn(n) {
	count++;
	if(n == 1 || n == 2){
		return 1;
	} else {
		return fn(n - 1) + fn(n - 2)
	}
}
console.log(fn(100),count);