document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
	link.addEventListener('click', () => {
		const menu = document.querySelector('#mainNav');
		if (menu.classList.contains('show')) {
			bootstrap.Collapse.getOrCreateInstance(menu).hide();
		}
	});
});
