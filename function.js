document.write("Remove negative values using array function"+"<br>");

document.write("Given array:[-23,-20,-17,-12,-5,0,1,5,12,19,20]"+"<br>")
var a=[-23,-20,-17,-12,-5,0,1,5,12,19,20];

let res=a.filter(function(value,index,array){
	return value>=0;
})
document.write("Output:"+res);




