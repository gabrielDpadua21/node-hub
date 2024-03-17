function sum(a, b) {
	return new Promise(function (resolve, reject) {
		if(!a || !b) return reject('Invalid input');
		setTimeout(function() {
			resolve(a + b);
		}, 1000)
	});
}

console.time('performance');
sum(2, 2)
.then((result) => {
	console.log(result);
	console.timeEnd('performance');
})
.catch(err => {
	console.log(err)
});


