/**
 * 点击切换事件
 * @param {Object} name
 */
function setContentTab(curr) //curr=3
{
	for(i = 1; i <= 4; i++) {
		var menu = $("#bdtab" + i);
		var cont = $("#con_bdtab_" + i);
		if(i == curr) {
			menu[0].className = "up";
			cont.css('display', 'block');
		} else {
			menu[0].className = "";
			cont.css('display', 'none');
		}
	}
}


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

    element = document.getElementsByClassName("div-input-bor");
    for (var j = 0; element.length > j; j++) {
        element[j].style.borderColor = b;
    }

    localStorage.setItem("dd", b);//放themecolor的值并获取 //本地存东西的地方 放东西的方法、放地方的名字（位置）、要放的东西
}