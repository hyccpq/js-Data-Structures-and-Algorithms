class Arrlist {
	constructor(arr=[]){
		this.arr = arr;
	}
	mergeSort () {
		let array = Arrlist.mergeSortRec(this.arr);
		console.log(array);
		return array;
	}
	static mergeSortRec(arr){
		let length = arr.length;
		if(length === 1){
			console.warn(arr);
			return arr
		}
		let mid = Math.floor(length/2),
			left = arr.slice(0,mid),
			right = arr.slice(mid,length);
		return this.merge(this.mergeSortRec(left),this.mergeSortRec(right));
	}
	static merge(left,right){
		console.log(`${left}--${right}`);
		let result = [],
			il = 0,
			ir = 0;
		while (il < left.length && ir < right.length) {
			if(left[il] < right[ir]){
				result.push(left[il++]);
			} else {
				result.push(right[ir++]);
			}
		}
		while (il < left.length){
			result.push(left[il++]);
		}
		while (ir < right.length){
			result.push(right[ir++]);
		}
		console.log(result);
		return result;
	}
}

const arrL = new Arrlist();
arrL.mergeSort([3,2,5]);
