function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}

window.onload = function(){
	var para = document.createElement("p");
	var info = "nodeName: ";
	info += para.nodeName;
	info += " nodeType: ";
	info += para.nodeType;
	var txt = document.createTextNode("Hello Shit!");
	var txt2 = document.createTextNode("Are you ready?");
	var myBr = document.createElement("br");
	para.appendChild(txt);
	para.appendChild(myBr);
	para.appendChild(txt2);
	//alert(info);

	var para2 = document.createElement("p");
	var text1 = document.createTextNode("This is ");
	para2.appendChild(text1);
	var emphasis = document.createElement("em");
	var text2 = document.createTextNode("my");
	emphasis.appendChild(text2);
	para2.appendChild(emphasis);
	var text3 = document.createTextNode(" content.");
	para2.appendChild(text3);

	var testdiv = document.getElementById("testdiv");
	//alert(testdiv.innerHTML);
	testdiv.appendChild(para);
	testdiv.appendChild(para2);
}