const frameworks = [
	{
		name: "Angular.js",
		contributors: 1548
	},
	{
		name: "Ember.js",
		contributors: 746
	},
	{
		name: "Vue.js",
		contributors: 240
	}
]

const result = frameworks.filter((item) => {
	return item.contributors < 1000
});

console.log(result);
