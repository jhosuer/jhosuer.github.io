function overLay() {
	menu = document.querySelector('.overlayOne');
	menuTwo = document.querySelector('.overlayTwo');
	menuThree = document.querySelector('.overlayThree');
	menuFour = document.querySelector('.overlayFour');
	menuFive = document.querySelector('.overlayFive');
	menuSix = document.querySelector('.overlaySix');
	overLayOneMenu = document.querySelector('.bottomNav');
	overLayTwoMenu = document.querySelector('.bottomNavTwo');
	overLayThreeMenu = document.querySelector('.bottomNavThree');
	overLayFourMenu = document.querySelector('.bottomNavFour');
	overLayFiveMenu = document.querySelector('.bottomNavFive');
	overLaySixMenu = document.querySelector('.bottomNavSix');

	menu.addEventListener('click', function() {
		menu.style.borderTop = '1px solid #ffffff';
		menu.style.borderRight = '1px solid #ffffff';
		menu.style.borderLeft = '1px solid #ffffff';
		menu.style.padding = '5px';
		overLayOneMenu.style.borderTop = '1px solid #ffffff';
		if(overLayOneMenu.style.display === 'none' || overLayOneMenu.style.display === '' || 
			overLayTwoMenu.style.display == 'block' ||  overLayThreeMenu.style.display == 'block' ||
			overLayFourMenu.style.display == 'block' || overLayFiveMenu.style.display == 'block' || 
			overLaySixMenu.style.display == 'block') {

			overLayTwoMenu.style.display = 'none';
			overLayThreeMenu.style.display = 'none';
			overLayFourMenu.style.display = 'none';
			overLayFiveMenu.style.display = 'none';
			overLaySixMenu.style.display = 'none';
			overLayOneMenu.style.display = 'block';	
			menuTwo.style.border = 'none';
			menuThree.style.border = 'none';
			menuFour.style.border = 'none';
			menuSix.style.border = 'none';
			menuFive.style.border = 'none';
		} else {
			overLayOneMenu.style.display = 'none';
			menu.style.border = 'none';
		}
		
	});

	menuTwo.addEventListener('click',function() {
		menuTwo.style.borderTop = '1px solid #ffffff';
		menuTwo.style.borderRight = '1px solid #ffffff';
		menuTwo.style.borderLeft = '1px solid #ffffff';
		menuTwo.style.padding = '5px';
		overLayTwoMenu.style.borderTop = '1px solid #ffffff';
		if(overLayOneMenu.style.display === 'block' || overLayTwoMenu.style.display === '' || 
			overLayTwoMenu.style.display == 'none' || overLayThreeMenu.style.display === 'block' ||
			overLayFourMenu.style.display == 'block' || overLayFiveMenu.style.display == 'block' ||
			overLaySixMenu.style.display == 'block') {

			overLayOneMenu.style.display = 'none';
			overLayThreeMenu.style.display = 'none';
			overLayFourMenu.style.display = 'none';
			overLayFiveMenu.style.display = 'none';
			overLaySixMenu.style.display = 'none';
			overLayTwoMenu.style.display = 'block';	
			menu.style.border = 'none';
			menuThree.style.border = 'none';
			menuFour.style.border = 'none';
			menuFive.style.border = 'none';
			menuSix.style.border = 'none';

		} else {
			overLayTwoMenu.style.display = 'none';
			menuTwo.style.border = 'none';
		}

	});

	menuThree.addEventListener('click',function() {

		menuThree.style.borderTop = '1px solid #ffffff';
		menuThree.style.borderRight = '1px solid #ffffff';
		menuThree.style.borderLeft = '1px solid #ffffff';
		menuThree.style.padding = '5px';
		overLayThreeMenu.style.borderTop = '1px solid #ffffff';
		if(overLayOneMenu.style.display === 'block' || overLayThreeMenu.style.display === '' || 
			overLayTwoMenu.style.display == 'block' || overLayThreeMenu.style.display == 'none' || 
			overLayFourMenu.style.display == 'block' || overLayFiveMenu.style.display == 'block' ||
			overLaySixMenu.style.display == 'block') {

			overLayOneMenu.style.display = 'none';
			overLayTwoMenu.style.display = 'none';
			overLayFourMenu.style.display = 'none';
			overLayFiveMenu.style.display = 'none';
			overLaySixMenu.style.display = 'none';
			overLayThreeMenu.style.display = 'block';	
			menu.style.border = 'none';
			menuTwo.style.border = 'none';
			menuFour.style.border = 'none';
			menuSix.style.border = 'none';
			menuFive.style.border = 'none';
		} else {
			overLayThreeMenu.style.display = 'none';
			menuThree.style.border = 'none';
		}

	});

	menuFour.addEventListener('click',function() {
		menuFour.style.borderTop = '1px solid #ffffff';
		menuFour.style.borderRight = '1px solid #ffffff';
		menuFour.style.borderLeft = '1px solid #ffffff';
		menuFour.style.padding = '5px';
		overLayFourMenu.style.borderTop = '1px solid #ffffff';
		if(overLayOneMenu.style.display === 'block' || overLayThreeMenu.style.display === 'block' || overLayFourMenu.style.display === '' || 
			overLayTwoMenu.style.display === 'block' || overLayFourMenu.style.display === 'none' || overLayFiveMenu.style.display === 'block'
			|| overLaySixMenu.style.display === 'block') {

			overLayOneMenu.style.display = 'none';
			overLayTwoMenu.style.display = 'none';
			overLaySixMenu.style.display = 'none';
			overLayThreeMenu.style.display = 'none';	
			overLayFourMenu.style.display = 'block';	
			overLayFiveMenu.style.display = 'none';	
			menu.style.border = 'none';
			menuTwo.style.border = 'none';
			menuSix.style.border = 'none';
			menuThree.style.border = 'none';
			menuFive.style.border = 'none';
		} else {
			overLayFourMenu.style.display = 'none';
			menuFour.style.border = 'none';
		}

	});

	menuFive.addEventListener('click',function() {
		menuFive.style.borderTop = '1px solid #ffffff';
		menuFive.style.borderRight = '1px solid #ffffff';
		menuFive.style.borderLeft = '1px solid #ffffff';
		menuFive.style.padding = '5px';
		overLayFiveMenu.style.borderTop = '1px solid #ffffff';
		if(overLayOneMenu.style.display === 'block' || overLayThreeMenu.style.display === 'block' || overLayFiveMenu.style.display === '' || 
			overLayTwoMenu.style.display === 'block' || overLayFiveMenu.style.display === 'none' || overLayFourMenu.style.display == 'block'
			|| overLaySixMenu.style.display == 'block') {

			overLayOneMenu.style.display = 'none';
			overLayTwoMenu.style.display = 'none';
			overLayThreeMenu.style.display = 'none';
			overLaySixMenu.style.display = 'none';
			overLayFiveMenu.style.display = 'block'	
			overLayFourMenu.style.display = 'none'	
			menu.style.border = 'none';
			menuTwo.style.border = 'none';
			menuThree.style.border = 'none';
			menuSix.style.border = 'none';
			menuFour.style.border = 'none';
		} else {
			overLayFiveMenu.style.display = 'none';
			menuFive.style.border = 'none';
		}

	});
		menuSix.addEventListener('click',function() {
		menuSix.style.borderTop = '1px solid #ffffff';
		menuSix.style.borderRight = '1px solid #ffffff';
		menuSix.style.borderLeft = '1px solid #ffffff';
		menuSix.style.padding = '5px';
		overLaySixMenu.style.borderTop = '1px solid #ffffff';
		if(overLayOneMenu.style.display === 'block' || overLayThreeMenu.style.display === 'block' || overLaySixMenu.style.display === '' || 
			overLayTwoMenu.style.display === 'block' || overLaySixMenu.style.display === 'none' || overLayFourMenu.style.display == 'block'
			|| overLayFiveMenu.style.display == 'block') {

			overLayOneMenu.style.display = 'none';
			overLayTwoMenu.style.display = 'none';
			overLayThreeMenu.style.display = 'none';
			overLayFiveMenu.style.display = 'none';
			overLaySixMenu.style.display = 'block'	
			overLayFourMenu.style.display = 'none'	
			menu.style.border = 'none';
			menuTwo.style.border = 'none';
			menuThree.style.border = 'none';
			menuFive.style.border = 'none';
			menuFour.style.border = 'none';
		} else {
			overLaySixMenu.style.display = 'none';
			menuSix.style.border = 'none';
		}

	});
}

overLay();