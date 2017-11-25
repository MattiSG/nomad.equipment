var languages = [
	"German",
	"English",
	"Spanish",
	"Portuguese",
	"Italian",
	"Dutch",
	"French",
	"Russian",
	"Chinese"
];

console.log(require('./countries_from_languages.js')(languages).join('\n  - '));
