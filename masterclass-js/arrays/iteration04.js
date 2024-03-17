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

const result = frameworks.some(item => item.name.includes("js"));
console.log(result);

const every = frameworks.every(item => item.name.includes("js"));
console.log(every);
