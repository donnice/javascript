function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
	window.onload = function(){
		var testdiv = document.getElementById("testdiv");
		alert(testdiv.innerHTML);
	}
}