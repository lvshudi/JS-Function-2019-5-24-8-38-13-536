var str1 = '';
function reverseString(message) {
	// wirte your code here
	if (message.length > 0) { //判断传入的参数是否为空；
		for (var i = message.length - 1; i >= 0; i--) {
			str1 += message.charAt(i); //charAt(i);这个函数是返回字符串中下标为i的那个字符；
		}
		console.log(str1);
		return str1;
	} else {
		return "请输入字符串";
	}
}
reverseString('hello'); // should return 'olleh'
