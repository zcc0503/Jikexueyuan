$(document).ready(function() {
	$(window).on("load", function() {
		imgLocation();
		var dataImg = {
			"data": [{
				"src": "img/039c33d71aef1bdc28c96b45bf78e0d5_20X58PICzs8.jpg"
			}, {
				"src": "img/0f6ccd7f05a8dd0584e3cd58a557c38f_ffead3189f0148f201ef6c7dbf1e9c69.jpg"
			}, {
				"src": "img/1e04bf1da6a1af1721c09f69267d110a_t0119e2c70257f7c94e.jpg"
			}, {
				"src": "img/28709359e8ae5932afd29e4690f70c58_b2903e1af323f8c001fc767f8e0af853.jpg"
			}, {
				"src": "img/320b89de22d9634504a40a9988641d4a_64r58PICkWp_1024.jpg"
			}, {
				"src": "img/33ba2c9c90e377031e95fc33344101af_20140626144616_3BXAW.thumb.700_0.jpeg"
			}, {
				"src": "img/5d59a6d6f3bc898fdd0103c2b92ce4b0_2442.jpg_wh300.jpg"
			}]
		};
		window.onscroll = function() {
			if(scrollside()) {
				$.each(dataImg.data, function(index, value) {
					var box = $("<div>").addClass("box").appendTo($("#container"));
					var content = $("<div>").addClass("content").appendTo(box);
					//	console.log("./img/"+$(value).attr("src"));
					$("<img>").attr("src", $(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
			window.onresize=function(){
				imgLocation();
			}
		};
	});
});

function scrollside() {
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	var documentHeight = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return(lastboxHeight, scrollHeight + documentHeight) ? true : false;
}

function imgLocation() {
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width() / boxWidth);
	var boxArr = [];
	box.each(function(index, value) {
		value.style.cssText='';
		//	console.log(index + "--" + value);
		var boxHeight = box.eq(index).height();
		if(index < num) {
			boxArr[index] = boxHeight;
			//	console.log(boxHeight);
		} else {
			var minboxHeight = Math.min.apply(null, boxArr);
			//	console.log(minboxHeight);
			var minboxIndex = $.inArray(minboxHeight, boxArr);
			//console.log(minboxIndex);
			//	console.log(value);
			$(value).css({
				"position": "absolute",
				"top": minboxHeight,
				"left": box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] += box.eq(index).height();
		}
	});
}