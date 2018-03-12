let count = 0;
function fn(n, ac1=1, ac2=1) {
	count++;
	if(n <= 1)return ac2;
	return fn(n-1, ac2, ac1 + ac2)
}
console.log(fn(100),count);