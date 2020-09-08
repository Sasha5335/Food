function forms() {
	const form = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Мы скоро с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	form.forEach(item => {
		bindPostData(item);
	});

	const postData = async/*ожидание результата*/(url, data) => {
		const res = await/*работает в паре с async*/ fetch(url, {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	};

	function bindPostData(form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
					display: block;
					margin: 0 auto;
				`;
			// form.append(statusMessage);
			form.insertAdjacentElement('afterend', statusMessage);

			// const request = new XMLHttpRequest();
			// request.open('POST', 'server.php'); //настройка запроса

			// request.setRequestHeader('Content-type', 'multipart/form-data');
			// request.setRequestHeader('Content-type', 'application/json');
			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});


			// request.send(json); //отправка данных

			// request.addEventListener('load', () => {
			// 	if (request.status === 200) {
			// 		console.log(request.response);
			// 		showThanksModal(message.success);
			// 		form.reset();
			// 		statusMessage.remove();
			// 	} else {
			// 		showThanksModal(message.failure);
			// 	}
			// });
		});
	}

	function showThanksModal(message) {
		const prewvModalDialog = document.querySelector('.modal__dialog');

		prewvModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
				<div class="modal__content">
					<div class="modal__close" data-close>&times;</div>
					<div class="modal__title">${message}</div> 
				</div>
			`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prewvModalDialog.classList.add('show');
			prewvModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));
}

module.exports = forms;