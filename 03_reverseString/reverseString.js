const reverseString = function(input) {
    "use strict";
    if(input!==input.trim())input=input.trim()

    const splittedText= input.split("");
    console.log(input)
    const reversedArray=splittedText.reverse()
    
    
    const convertedArray=reversedArray.join("")
    
    return convertedArray

};

debugTest=reverseString(" qwe")
console.log(debugTest)

// Do not edit below this line
module.exports = reverseString;
