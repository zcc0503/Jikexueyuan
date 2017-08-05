
window.onload=function()//加载js运行函数
{  
	var a = localStorage.getItem("dd");//获得本地参数	
    changeTheme(a);//执行参数
}  

 function changeTheme(b) 
 {
     var element = document.getElementsByClassName("hp");//查找hp来赋值给element
   for (var j = 0; element.length > j; j++) {//通过for来赋值
        element[j].style.background = b;
    }

    element = document.getElementsByClassName("gl");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderColor = b;
    }

    element = document.getElementsByClassName("box1");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderColor = b;
    }

	element = document.getElementsByClassName("hot");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderColor = b;
    }

    element = document.getElementsByClassName("hot1");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderColor = b;
    }
    
    localStorage.setItem("dd", b);//放themecolor的值并获取 //本地存东西的地方 放东西的方法、放地方的名字（位置）、要放的东西
}
