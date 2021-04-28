function zmienKolor() {
	var elementZHTMLa = document.getElementById("moj-div");
	var p = document.createElement("p");
	var node = document.createTextNode("cos");
	p.appendChild(node);
	elementZHTMLa.appendChild(p);
	
	elementZHTMLa.style.background = "#00FF00";
}