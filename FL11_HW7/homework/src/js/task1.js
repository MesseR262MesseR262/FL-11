let mail = prompt('Enter @mail', '');

let mailMinLength = 6;

let passwordMinLength = 5;

if (mail === '' || mail === null) {
	alert('Canceled')
} else if (mail.length < mailMinLength) {
	alert('I dont know any emails having name length less than 6 symbols')
} else if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
	let password = prompt('Enter the password', '');

	if (password === '' || password === null) {
		alert('Canceled')
	} else if (mail==='user@gmail.com' && password!=='UserPass' || mail==='admin@gmail.com' && password!=='AdminPass'){
		alert('Wrong password')
	} else {
		let change = confirm('Do you want to change your password?');

		if (change === false) {
			alert('You have failed the change.')
		} else if (change === true) {
			let password = prompt('Enter the old password', '');

			if (mail==='user@gmail.com' && password==='UserPass' || mail==='admin@gmail.com' && password==='AdminPass'){
				let new_password = prompt('Enter the new password', '');

				if (new_password.length < passwordMinLength) {
					alert('It’s too short password. Sorry.')
				} else {
					let checked_passwored = prompt('Enter the new password again', '');

					if (checked_passwored !== new_password) {
						alert('You wrote the wrong password.')
					} else {
						alert('You have successfully changed your password.')
					}
				}
			} else {
				alert('You wrote the wrong password.')
			}
		} 
	}
} else {
	alert('I don’t know you')
}