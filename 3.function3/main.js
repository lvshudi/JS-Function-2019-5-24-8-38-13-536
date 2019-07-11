function alphabetSort(message) {
	var arr = new Array(message.length);
	// wirte your code here
	for ( i = 0; i < message.length; i++) {
		arr[i] = message.charAt(i);
	}
	arr = arr.sort(function(a,b) {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1
		} else {
			return 0;
		}
	});
	message = arr.join("");
	console.log(message);
	return message;
}
alphabetSort('hello'); // should return 'ehllo'
