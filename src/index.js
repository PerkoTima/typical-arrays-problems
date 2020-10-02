
exports.min = function min (array) {
	if(array === undefined || array.length === 0){
		return 0
	}else{
		array.sort((a, b) => a - b)
		return array[0];
	}  
}

exports.max = function max (array) {
	if(array === undefined || array.length === 0){
		return 0
	}else{
		array.sort((a, b) => a - b);
		return array[array.length - 1];
	}
	
}

exports.avg = function avg (array) {
	let sumArr = 0
	let avgNum
	if(array === undefined || array.length === 0){
		return 0
	}
	else{
		for (let i = 0;i < array.length; i++){
			sumArr += array[i]
		}
		return avgNum = sumArr / array.length
	}
}
