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

const result = frameworks.find(item => item.name === "Angular.js");

console.log(result);
