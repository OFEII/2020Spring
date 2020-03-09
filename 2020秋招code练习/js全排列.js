function permution (str) {
	let results = [];
	let strArr = str.split('');
	let cur = [];
	search(strArr, cur, results);
	return results;
}

function search (strArr, cur, results) {
	if (cur.length === strArr.length) {
		results.push(cur.slice(0));
		return;
	}
	for (let i = 0; i < strArr.length; i++) {
		if (cur.indexOf(strArr[i]) === -1) {
			cur.push(strArr[i]);
			search(strArr, cur, results);
			cur.pop();
		}
	}
	
}
console.log(permution('adx').join(' '))