const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phonenumber');
const pass = document.querySelector('#pass');
const cPass = document.querySelector('#cpass');

// add event listener

form.addEventListener('submit', (event) => {
	event.preventDefault();
	validate();
})

// more email validation

const isEmail = (value) => {
	const atSymbol = value.indexOf('@');
	if(atSymbol < 1) return false;
	const dot = value.lastIndexOf('.');
	if(dot <= atSymbol + 2) return false;
	if(dot === value.lenght - 1) return false;
	return true;
}

// define validate function

const validate = () => {
	const usernameVal = document.querySelector('#username').value.trim();
	const emailVal = document.querySelector('#email').value.trim();
	const phoneVal = document.querySelector('#phonenumber').value.trim();
	const passVal = document.querySelector('#pass').value.trim();
	const cPassVal = document.querySelector('#cpass').value.trim();

// validate username

	if(usernameVal === '') {
		setErros(username, `User name can't be empty`);
	} else if(usernameVal.length < 3) {
		setErros(username, `User name min 3 char`);
	} else {
		setSussessMes(username);
	}

// email validate

	if(emailVal === ''){
		setErros(email, `Email can't be empty`);
	} else if(!isEmail(emailVal)) {
		setErros(email, `Email is invalid`);
	} else {
		setSussessMes(email);	
	}

// phone validation

	if(phoneVal === '') {
		setErros(phone, `Phone number can't be empty`);
	} else if(phoneVal.length <=  10) {
		setErros(phone, `Phone number must be more then 10 char`);
	} else {
		setSussessMes(phone);
	}

// password validation

	if(passVal === '') {
		setErros(pass, `Password can't be empty`);
	} else if(passVal.length <=  5) {
		setErros(pass, `Password must be more then 5 char`);
	} else {
		setSussessMes(pass);
	}


// conform password

	if(cPassVal === '') {
		setErros(cPass, `Confirm Password can't be empty`);
	} else if(cPassVal !== passVal) {
		setErros(cPass, `Confirm password isn't matching`);
	} else {
		setSussessMes(cPass);
	}



}


	function setErros(input, errormess) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerHTML = errormess;
	}

	function setSussessMes(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	}



	// function setErros(input, errormess) {
	// 	const formControl = input.parentElement;
	// 	const small = formControl.querySelector('small');
	// 	const wrong = formControl.querySelector('.wrong');
	// 	const anoinput = formControl.querySelector('input');
	// 	anoinput.style.borderColor = 'red';
	// 	small.style.visibility = 'visible';
	// 	wrong.style.visibility = 'visible';
	// 	small.style.color = 'red';
	// 	small.style.fontSize = '16px';
	// 	small.style.padding = '5px 0px 5px 0px';
	// 	small.innerHTML = errormess;
	// 	const right = formControl.querySelector('.right');
	// 	right.style.visibility = 'hidden';
	// }

	// function setSussessMes(input) {
	// 	const formControl = input.parentElement;
	// 	const anoinput = formControl.querySelector('input');
	// 	const right = formControl.querySelector('.right');
	// 	right.style.visibility = 'visible';
	// 	anoinput.style.borderColor = 'green';
	// 	const wrong = formControl.querySelector('.wrong');
	// 	wrong.style.visibility = 'hidden';
	// 	const small = formControl.querySelector('small');
	// 	small.style.visibility = 'hidden';
	// }