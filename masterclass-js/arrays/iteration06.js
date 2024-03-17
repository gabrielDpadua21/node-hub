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

const totalContributors = frameworks.reduce((total, item) => {
	return total += item.contributors;
}, 0);

console.log(totalContributors);
