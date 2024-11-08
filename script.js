function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerCase1 = s1.toLowerCase();
	const lowerCase2 = s2.toLowerCase();
    let index = lowerCase1.indexOf(lowerCase2);
	return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
