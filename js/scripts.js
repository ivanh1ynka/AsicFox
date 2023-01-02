//Mobille burger menu
function burgerHeader() {
  const burger = document.querySelector('.burger')
  const header = document.querySelector('.header')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!header.classList.contains('active')) {
      header.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      header.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Burger breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      header.classList.remove('active') 
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerHeader()

function activeButton() {
	const button = document.querySelectorAll('.menu__item-link')

	button.forEach(button => {
		button.addEventListener('.click', function () {
			button.forEach(btn => btn.classList.remove('.menu__item-link-active'));
			button.classList.add('.menu__item-link-active');
		});
	});
}
activeButton()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)
;

function updateTimer() {
  future  = Date.parse("January 7, 2023 00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60)	);
  secs  = Math.floor( diff / (1000)	);
	
  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div class="timer__down-box"><h2 class="timer__down-box-title">' + d + '</h2><span class="timer__down-text">днів</span></div>' +
      '<div class="timer__down-box"><h2 class="timer__down-box-title">' + h + '</h2><span class="timer__down-text">годин</span></div>' +
      '<div class="timer__down-box"><h2 class="timer__down-box-title">' + m + '</h2><span class="timer__down-text">хвилин</span></div>' +
      '<div class="timer__down-box"><h2 class="timer__down-box-title">' + s + '</h2><span class="timer__down-text">секунд</span></div>' ;
}
setInterval('updateTimer()', 1000 );

function activeBtn() {
	const button = document.querySelectorAll('.timer__btn-button')

	button.forEach(button => {
		button.addEventListener('.click', function () {
			button.forEach(button => button.classList.remove('.timer__btn-button-active'));
			button.classList.add('.timer__btn-button-active');
		});
	});
}
activeBtn()
;

