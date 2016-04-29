window.onload = function(){
	var sidebar = document.getElementById("sidebar");
	var menu_btn = document.getElementById("menu");
	var mask = document.getElementById('mask');


	menu_btn.onclick = function(){
		sidebar.className = 'slide-in';
		mask.style['display'] = "block";
	}

	mask.onclick = function(){
		mask.style['display'] = 'none';
		sidebar.className = "";
	}


}

