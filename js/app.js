console.log('hello world'); 
  
    addText.textContent = "Hello world";  //la division addtext contien "hello world"
    

 	var suprimId = document.getElementById("remove"); 
 	suprimId.remove();
 	console.log(suprimId);
 

 	var changeColor = document.getElementById('changeColor');
 	console.log(changeColor);
 	changeColor.style.backgroundColor = "red";

 	var balise = document.getElementById("addChildren");
 	balise.innerHTML = "<p></p><p><p><p>";
 	console.log(balise);

 	

 



