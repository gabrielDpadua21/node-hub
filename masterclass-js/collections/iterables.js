const languages = ["Fortran", "Lisp", "COBOL"];
for (let i in languages) {
	console.log(`${i} - ${languages[i]}`);
};
for(let lang of languages) {
	console.log(lang)
};
languages.forEach((lang) => {
	console.log(lang);
});
