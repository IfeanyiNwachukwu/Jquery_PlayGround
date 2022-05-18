$(document).ready(function(){


function printText(){
    alert("function is working");
}

printText();

function printResult(a,b,z){
    var k = arguments.length
    alert(k);
}

printResult(5,9,8);

$('div').text(printResult.toString());









});