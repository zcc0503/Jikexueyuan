function grade() {
	var stutent = document.getElementById("score").value;
	if(!stutent.trim()) {
		console.log("您输入的有误，请重新输入");
		alert("您输入的有误，请重新输入");
	} else if(stutent > 100) {
		console.log("您输入的有误，请重新输入");
		alert("您输入的有误，请重新输入");
	} else if(stutent <= 100 && stutent > 90) {
		console.log("一等生");
		alert("一等生");
	} else if(stutent <= 90 && stutent > 80) {
		console.log("二等生");
		alert("二等生");
	} else if(stutent <= 80 && stutent > 70) {
		console.log("三等生");
		alert("三等生");
	} else if(stutent <= 70 && stutent > 60) {
		console.log("四等生");
		alert("四等生");
	} else if(stutent <= 60 && stutent > 50) {
		console.log("五等生");
		alert("五等生");
	} else if(stutent <= 50 && stutent > 40) {
		console.log("六等生");
		alert("六等生");
	} else if(stutent <= 40 && stutent > 30) {
		console.log("七等生");
		alert("七等生");
	} else if(stutent <= 30 && stutent > 20) {
		console.log("八等生");
		alert("八等生");
	} else if(stutent <= 20 && stutent > 10) {
		console.log("九等生");
		alert("九等生");
	} else if(stutent <= 10 && stutent > 0) {
		console.log("十等生");
		alert("十等生");

	}
}