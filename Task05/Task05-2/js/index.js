var userInput = "";
//输出按钮
function showInput(input) 
{
	userInput+=input;
	document.getElementById("count").value = userInput;
}
//计算结果
function showResult() 
{
	var value = document.getElementById("count").value;
	if(value.split("/")[1] && value.split("/")[1] == 0){
		alert("分母不能为0");
		value = 0;
	}
	var numresult = eval(value);
	document.getElementById("count").value = parseFloat(numresult.toFixed(2));
	userInput=numresult;
}
