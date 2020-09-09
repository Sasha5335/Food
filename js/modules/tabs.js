function tabs(tadsSelector, tabsContentSelector, tadsParentSelector, activClass) {

	const tabs = document.querySelectorAll(tadsSelector);
	const tabsContent = document.querySelectorAll(tabsContentSelector);
	const tabsParent = document.querySelector(tadsParentSelector);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove(activClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activClass);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains(tadsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}

			});
		}
	});
}

export default tabs;