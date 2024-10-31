const fibonacci = function (number) {
	let fibo = [1, 1];
	let counter = 2;
	
	while (number>counter) {
		fibo.push(fibo[parseInt(counter - 2)]+fibo[parseInt(counter-1)]);

		console.log(fibo[2]);

		counter++;
	}
	if(number==0){
        return 0
    }else if (number<0){
        return "OOPS"
    }else{
        return fibo[number-1]
    }

    
};
console.log(fibonacci("6"));
// Do not edit below this line
module.exports = fibonacci;
