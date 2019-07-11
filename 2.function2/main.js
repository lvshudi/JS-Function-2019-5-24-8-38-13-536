function palindrome(message) {
	// wirte your code here
	var len = message.length;
	var str1 = "";
	for (var i = len - 1; i >= 0; i--) {
		str1 += message[i];
	}
	var result = (str1 == message);
	console.log(result);
	return result;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
