let a1 = +prompt('Enter a1', '');
let a2 = +prompt('Enter a2', '');
let b1 = +prompt('Enter b1', '');
let b2 = +prompt('Enter b2', '');
let c1 = +prompt('Enter c1', '');
let c2 = +prompt('Enter c2', '');

if (c1 === (a1 + b1)/2 && c2 === (a2 + b2)/2) {
	console.log(true)
} else {
	console.log(false)
}