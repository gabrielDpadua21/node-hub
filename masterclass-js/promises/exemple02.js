function sum(a, b) {
	return new Promise(function (resolve) {
		setTimeout(function() {
			resolve(a + b);
		}, 1000)
	});
}


sum(2, 2)
.then((result) => {
	console.log(result);
})


