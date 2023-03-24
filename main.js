let b;
let month= parseInt(prompt("Enter a Month"));
if(month<=2 && month<5){
	b="it's Summer Season";
}
else if(month<=6 && month<9){
	b="it's Fall Season";
}
else{
	b="it's Winter Season";
}
document.write("<h2>"+b);