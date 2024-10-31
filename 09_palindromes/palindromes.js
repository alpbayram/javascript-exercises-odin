const palindromes = function (string) {
let stringToArray=string.split("")
let filteredArray=stringToArray.filter((item)=> !/^[\.,;:!? ]$/.test(item))
let mappedFilteredArray=filteredArray.map(item=>item.toLowerCase())
let mappedArray=mappedFilteredArray.join("")
let reverseMappedArray=mappedFilteredArray.reverse().join("")



console.log(mappedArray)
console.log(reverseMappedArray)

if(mappedArray==reverseMappedArray){
    return true
}else{
    return false
}
console.log(stringToArray)
console.log(filteredArray)



};
console.log(palindromes("Lid off a daffodil."))
// Do not edit below this line
module.exports = palindromes;
