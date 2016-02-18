function showPic(whichpic){
	
//alert(whichpic.width);
	if(!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return true;
	placeholder.setAttribute("src",source);
	document.getElementById('placeholder').width = "400";
	document.getElementById('placeholder').height = "300";
	var text = whichpic.getAttribute("title")? whichpic.getAttribute("title"):"";
	if(!document.getElementById("description")) return false;
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	//alert(description.childNodes.firstChild.nodeValue);
	return false;

}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}

//window.onload = countBodyChildren;