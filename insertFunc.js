function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
	window.onload = function(){
		var para = document.createElement("p");
		var info = "nodeName: ";
		info += para.nodeName;
		info += " nodeType: ";
		info += para.nodeType;
		alert(info);
		/*
		var testdiv = document.getElementById("testdiv");
		alert(testdiv.innerHTML);*/
	}
}