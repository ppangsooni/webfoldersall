
var numberdisplay = document.getElementById("numberDisplay");
var numberdisplayResult=document.getElementById("result");


function addOutput(number){
    numberdisplay.value = numberdisplay.value + number;
}

function calculate(){
    var result = eval(numberDisplay.value);   
    numberdisplay.value=result;
    numberdisplayResult.value=result;
}
function reset(){
    var numberdisplay=document.getElementById("numberDisplay");
    numberdisplay.value="";
    var numberdisplayResult=document.getElementById("result");
    numberdisplayResult.value="";

}
function del(){
    var numberdisplay=document.getElementById("numberDisplay");
    numberdisplay.value=numberdisplay.value.substring(0,numberdisplay.value.length-1);
}