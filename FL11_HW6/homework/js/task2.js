let a = +prompt('Enter a', '');
let b = +prompt('Enter b', '');
let c = +prompt('Enter c', '');

if (a + b < c || b + c < a || a + c < b) {

	console.log('Triangle doesn’t exist')

} else if (a === b && a === c && b === c) {

	console.log('Triangle is equivalent ')

} else if (a === b || b === c || a === c) {

	console.log('Triangle is isosceles')

} else if (a !== b && a !== c && b !== c) {

	console.log('Triangle is normal')
	
}