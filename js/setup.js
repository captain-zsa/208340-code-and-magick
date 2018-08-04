var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupBlock = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open');

var escSetupClose = function (evt) {
	if(evt.keyCode === ESC_KEYCODE) {
		onSetupClose();
		evt.preventDefault();
	}
};

var onSetupClose = function () {
	setupBlock.classList.add('hidden');
	document.removeEventListener('keydown', escSetupClose);
};
var onSetupShow = function (evt) {
	setupBlock.classList.remove('hidden');
	document.addEventListener('keydown', escSetupClose);
};

setupOpen.addEventListener('click', onSetupShow);
setupOpen.addEventListener('keydown', function (evt) {
	if(evt.keyCode === ENTER_KEYCODE) {
		onSetupShow();
	}
});
setupClose.addEventListener('click', onSetupClose);
setupClose.addEventListener('keydown', function (evt) {
	if(evt.keyCode === ENTER_KEYCODE) {
		onSetupClose();
	}
});


var usersNames = [
	'Иван',
	'Хуан Себастьян',
	'Мария',
	'Кристоф',
	'Виктор',
	'Юлия',
	'Люпита',
	'Вашингтон'
];
var usersFnames = [
	'да Марья',
	'Верон',
	'Мирабелла',
	'Вальц',
	'Онопко',
	'Топольницкая',
	'Нионго',
	'Ирвинг'
];
var coatColor = [
	'rgb(101, 137, 164)',
	'rgb(241, 43, 107)',
	'rgb(146, 100, 161)',
	'rgb(56, 159, 117)',
	'rgb(215, 210, 55)',
	'rgb(0, 0, 0)'
];
var eyesColor = [
	'black',
	'red',
	'blue',
	'yellow',
	'green'
];
var fireColor = [
	'#ee4830',
	'#30a8ee',
	'#5ce6c0',
	'#e848d5',
	'#e6e848'
];

var users = [];
for (var i = 0; i<=4; i++) {
	var randName = parseInt(Math.random()*10),
		randFname = parseInt(Math.random()*10),
		randCoat = parseInt(Math.random()*10),
		randEyes = parseInt(Math.random()*10);
	if (randName >= usersNames.length) {
		randName = usersNames.length-2;
	}
	if (randFname >= usersFnames.length) {
		randFname = usersFnames.length-2;
	}
	if (randCoat >= coatColor.length) {
		randCoat = coatColor.length-2;
	}
	if (randEyes >= eyesColor.length) {
		randEyes = eyesColor.length-2;
	}
	users[i] = {
		name: usersNames[randName]+' '+usersFnames[randFname],
		coatColor: coatColor[randCoat],
		eyesColor: eyesColor[randEyes]
	};
}

var similarList = document.querySelector('.setup-similar-list');
var similarItem = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
for (var j = 0; j<users.length; j++) {
	var wizardElement = similarItem.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = users[j].name;
	wizardElement.querySelector('.wizard-coat').style.fill = users[j].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = users[j].eyesColor;

	similarList.appendChild(wizardElement);
}
document.querySelector('.setup-similar').classList.remove('hidden');



var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFire = document.querySelector('.setup-fireball-wrap');

var randomInteger = function (min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}
// изменение цвета мантии
var editCoat = function () {
	var coatColorNow = coatColor[randomInteger(0, coatColor.length-1)];
	wizardCoat.style.fill = coatColorNow;
};
// изменение цвета глаз
var editEyes = function () {
	var eyesColorNow = eyesColor[randomInteger(0, eyesColor.length-1)];
	wizardEyes.style.fill = eyesColorNow;
};
// изменение фаербола
var editFire = function () {
	var fireColorNow = fireColor[randomInteger(0, fireColor.length-1)];
	wizardFire.style.backgroundColor = fireColorNow;
	wizardFire.querySelector('[name=fireball-color]').value = fireColorNow;
};
wizardCoat.addEventListener('click', editCoat);
wizardEyes.addEventListener('click', editEyes);
wizardFire.addEventListener('click', editFire);