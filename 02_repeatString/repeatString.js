const repeatString = function (string, number) {
	string = String(string)
    let conString=""
    if(number<0){
       
        return "ERROR"
    }else{
        for (let i = 1; i <= number; i++) {
            conString = conString + string
        }
        return conString
    }
	
}
let sonuc = repeatString("hey",5)
console.log(sonuc)
// Do not edit below this line
module.exports = repeatString
