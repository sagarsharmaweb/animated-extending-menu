window.addEventListener("load", function(){
	var time = 0;
	var nodes = document.querySelectorAll("nav.extend > a");
	for(var i=0; i<nodes.length; i++){
		nodes[i].style.animationDelay = time+"s";
		time += 0.2;
	}

	var nodes = document.querySelectorAll("nav.extend > *:first-child");
	for(var i=0; i<nodes.length; i++){
		nodes[i].addEventListener("click",function(){
			this.parentNode.classList.toggle("open");
		});
	}
});
