// Animation
const animationElements = document.querySelectorAll('.animation');
if (animationElements.length > 0) {
	const animate = () => {
		for (let i = 0; i < animationElements.length; i++) {
			const element = animationElements[i];
			const offsetHeight = element.offsetHeight;
			const topSetHeight =
				element.getBoundingClientRect().top + window.scrollY ||
				document.documentElement.scrollTop;
			let l = window.innerHeight - offsetHeight / 4;
			offsetHeight > window.innerHeight &&
				(l = window.innerHeight - window.innerHeight / 4),
				scrollY > topSetHeight - l && scrollY < topSetHeight + offsetHeight
					? element.classList.add('active')
					: element.classList.contains('reply') &&
					  element.classList.remove('active');
		}
	};
	window.addEventListener('scroll', animate);
	setTimeout(animate, 300);
}

// Menu burger
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
});

menuLink.forEach(e => {
	e.addEventListener('click', () => {
		document.body.classList.remove('lock');
		menuIcon.classList.remove('active');
		menuList.classList.remove('active');
	});
});

// Tabs
const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsBlock = document.querySelectorAll('.tabs__block');
tabsBtn.forEach(tabBtn => {
	tabBtn.addEventListener('click', () => {
		const a = document.querySelector(tabBtn.getAttribute('data-tab'));
		if (!tabBtn.classList.contains('active')) {
			tabsBtn.forEach(e => {
				e.classList.remove('active');
			});
			tabsBlock.forEach(e => {
				e.classList.remove('active');
			});
			tabBtn.classList.add('active');
			a.classList.add('active');
		}
	});
});

// Header anchor
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)
	anchor.addEventListener('click', e => {
		e.preventDefault();
		const block = anchor.getAttribute('href');
		document
			.querySelector(block)
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
window.onscroll = () => {
	document.body.scrollTop > 900 || document.documentElement.scrollTop > 900
		? document.querySelector('.header__menu').classList.add('active')
		: document.querySelector('.header__menu').classList.remove('active');
};

// Swiper-slider
const swiper = new Swiper('.block2__slider', {
	navigation: { prevEl: '.block2__prev', nextEl: '.block2__next' },
	loop: true,
	spaceBetween: 29,
	autoplay: { delay: 2500 },
	breakpoints: {
		320: { slidesPerView: 1 },
		680: { slidesPerView: 3 },
		992: { slidesPerView: 4 },
	},
});
