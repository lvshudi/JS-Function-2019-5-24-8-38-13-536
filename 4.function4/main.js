function countWords(message) {
	// wirte your code here
	n = message.split(" ") //split() �������ڰ�һ���ַ����ָ���ַ������顣
	r = n.length; //n=Good,morning,,I,love,JavaScript
	return r;
}
countWords('Good morning, I love JavaScript.'); // should return 5
