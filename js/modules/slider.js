function slider() {
	const slides = document.querySelectorAll('.offer__slide');
	const slider = document.querySelector('.offer__slider');
	const prevBtn = document.querySelector('.offer__slider-prev');
	const nextBtn = document.querySelector('.offer__slider-next');
	const totalBtn = document.querySelector('#total');
	const currentBtn = document.querySelector('#current');
	let slideIndex = 1;

	showSlides(slideIndex);

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
	}
	else {
		total.textContent = slides.length;
	}

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach(item => item.style.display = 'none');
		slides[slideIndex - 1].style.display = 'block';

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		}
		else {
			total.textContent = slideIndex;
		}
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	slider.style.position = 'relative';

	const indicators = document.createElement('ol');
	const dots = [];

	indicators.classList.add('carousel-indicators');
	indicators.style.cssText = `
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 15;
			display: flex;
			justify-content: center;
			margin-right: 15%;
			margin-left: 15%;
			list-style: none;
		`;
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.style.cssText = `
				box-sizing: content-box;
				flex: 0 1 auto;
				width: 30px;
				height: 6px;
				margin-right: 3px;
				margin-left: 3px;
				cursor: pointer;
				background-color: #fff;
				background-clip: padding-box;
				border-top: 10px solid transparent;
				border-bottom: 10px solid transparent;
				opacity: .5;
				transition: opacity .6s ease;
			`;
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	prevBtn.addEventListener('click', () => {
		plusSlides(-1);
		dots.forEach(dot => dot.style.opacity = '0.5');
		dots[slideIndex - 1].style.opacity = 1;
	});

	nextBtn.addEventListener('click', () => {
		plusSlides(1);
		dots.forEach(dot => dot.style.opacity = '0.5');
		dots[slideIndex - 1].style.opacity = 1;
	});
}

export default slider;