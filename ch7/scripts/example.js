function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}

window.onload = function(){
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);

	var txt = document.createTextNode("Hello World!");
	para.appendChild(txt);
}
