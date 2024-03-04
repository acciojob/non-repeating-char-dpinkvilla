function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount={};
	// let nonrepeatedchar=[] or ' ' ;//for knowing more two or more non repeated characters in string

	for(let char of str){
		charCount[char]=(charCount[char]||0)+1;
	}
	for(let char of str){
		if(charCount[char]===1){
			return char;
			// nonrepeatedchar+=char// 		
		}
	}
	return null;
	// return nonrepeatedchar;//you need comment above return statement for this to work
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
