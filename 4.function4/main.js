function countWords(message) {
	// wirte your code here
	n = message.split(" ") //split() 方法用于把一个字符串分割成字符串数组。
	r = n.length; //n=Good,morning,,I,love,JavaScript
	return r;
}
countWords('Good morning, I love JavaScript.'); // should return 5
