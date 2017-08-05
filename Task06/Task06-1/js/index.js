var userInput = "";//输入
var jsfs = ""; //计算方式
var result = "0";//结果

//输出按钮
function showInput(inputNum, inputJsfs) //第一个输入数字，第二个输入计算方式
{
	if(inputJsfs != "") 
	{
		jsfs = inputJsfs;//赋值是为了计算
	}
	
	userInput =userInput+ inputNum + inputJsfs;
	document.getElementById("count").value = userInput;
}

/**
 * 
 * @param {Object} a
 */
/**
 * 
 * @param {Object} a
 */
function showSinResult(a)
{
	if (jsfs!="")
	{
		showResult();
	}
	else
	{
		result = userInput;
	}

	switch(a) 
	{
		case "sin":
			result = Math.sin(result);
			break;
		case "cos":
			result = Math.cos(result);
			break;
		case "tan":
			result = Math.tan(result);
			break;
		default:
			break;
	}
	
	//输出结果
	jsfs="";//计算方式
	userInput = "";//输入
	document.getElementById("count").value = parseFloat(result.toFixed(2));
}

//清空按钮
function cleanInput() {
	userInput = "";//输入
	jsfs = ""; //计算方式
	document.getElementById("count").value = "0";
}

//计算结果
function showResult() 
{
	var b = document.getElementById("count").value;

	if(b == "0") {
		alert("输入数字！");
	}
		
		
	var key = "/";
	if(jsfs == "/" && b.split(key)[1] == 0) {
		alert("分母不能为0！");
		cleanInput();
		return ;//跳出方法
	}
	
	if(jsfs == "") //计算方式
	{
		alert("请输入第二个数字！");
		return;//跳出方法
	}

	var userArrs = userInput.split(jsfs);
	if(userArrs[0] == "") 
	{
		alert("格式不合法，请重新输入！");
		cleanInput();
		return;
	}
	var num1 = parseFloat(userArrs[0]);//转换成浮点的字符串 浮点才能计算
	var num2 = parseFloat(userArrs[1]);//转换成浮点的字符串

	if(userArrs[1] == "") 
	{
		jsfs="";//计算方式
		userInput = parseFloat(num1.toFixed(2));
		document.getElementById("count").value = userInput;
		return;
	}

	switch(jsfs) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
		default:
			break;
	}
	//输出结果
	jsfs="";
	userInput = "";
	document.getElementById("count").value = parseFloat(result.toFixed(2));
}