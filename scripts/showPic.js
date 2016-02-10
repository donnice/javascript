function showPic(whichpic){
	
//alert(whichpic.width);
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	document.getElementById('placeholder').width = "400";
	document.getElementById('placeholder').height = "300";
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	alert(description.childNodes.firstChild.nodeValue);

}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}

window.onload = countBodyChildren;