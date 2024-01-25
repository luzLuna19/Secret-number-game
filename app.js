let secretNumber = 0;
let attempts = 0;
let generatedNumbersList = [];
let maxNumber = 10;

function assignTextToElement(elemento, texto) {
	let elementHTML = document.querySelector(elemento);
	elementHTML.innerHTML = texto;
	return;
}

function verifyAttempt() {
	let userNumber = parseInt(document.getElementById('userNumber').value);
	console.log({ attempts });

	if (attempts >= 5) {
		if (secretNumber !== userNumber) {
			return assignTextToElement('p', 'Alcanzaste el máximo de intentos');
		}
	} else {
		if (userNumber > secretNumber) {
			assignTextToElement('p', 'El número es menor');
		} else if (userNumber < secretNumber) {
			assignTextToElement('p', 'El número es mayor');
		} else if (secretNumber === userNumber) {
			document.getElementById('reiniciar').removeAttribute('disabled');
			return assignTextToElement(
				'p',
				`Acertaste el número en ${attempts} ${attempts == 1 ? 'vez' : 'veces'}`,
			);
		}
		attempts++;  
		cleanBox(); 
	}
	return;
}

function cleanBox() {
	document.querySelector('#userNumber');
	document.querySelector('#userNumber').value = '';
}

function restartGame() {
	//Limpiar caja
	cleanBox();
	//Indicar mensajes de Inicio
	//Generar número aleatorio
	//Reiniciar número de intentos
	initialConditions();
	//Deshabilitar boton "Nuevo Juego"

	document.getElementById('reiniciar').setAttribute('disabled', true);
}

function generateSecretNumber() {
	let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;

	console.log(generatedNumber);
	console.log(generatedNumbersList);

	if (generatedNumbersList.length == maxNumber) {
		assignTextToElement('p', 'Ya se sortearon todos los números');
	} else {
		if (generatedNumbersList.includes(generatedNumber)) {
			return generateSecretNumber();
		} else {
			generatedNumbersList.push(generatedNumber);
			return generatedNumber;
		}
	}
}
function showAttempts() {}

function initialConditions() {
	assignTextToElement('h1', 'Juego del número secreto');
	assignTextToElement('p', `Ingresa un número del 1 al ${maxNumber}`);
	secretNumber = generateSecretNumber();
	attempts = 1;
}

initialConditions();
