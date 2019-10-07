city.oninput = () => {
	localStorage.setItem('city', city.value)
};

if (localStorage.getItem('city')) { 
	city.value = localStorage.getItem('city');
	btn_change.style.display = 'block';
	city.disabled = true;

	btn_change.onclick = () => {
		localStorage.removeItem('city');
		city.value='';
		city.disabled = false;
		btn_change.style.display = 'none';
	}
};

