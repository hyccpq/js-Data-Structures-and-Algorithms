let date = new Date();
let arr = [3,6,4,2,4,9,1,88,12,5]
let quick = function (arr,left,right) {
	let i = left,
		j = right;
	let a = arr.length;
	if(a > 1){
		let index = arr[Math.floor((i+j)/2)];
		// console.log(index);
		while (i < j){//???<=而不是<
			while (arr[i] < index){
				i++;
			}
			while (arr[j] > index){
				j--;
			}
			[arr[i],arr[j]] = [arr[j],arr[i]];
			i++;
			j--;
			// console.log(arr);
		}
		if(left < i-1){
			// console.log(i-1);
			quick(arr,left,i-1)
		}
		if(i < right){
			// console.log(i+'+'+right);
			quick(arr,i,right)
		}
	}
}


quick(arr,0,arr.length-1);
console.log(arr);
setTimeout(()=>{
	console.info(new Date - date);
},0)