//puls button +1
function plusOne() {
	var x = document.getElementById("rangeN").value;
	if(x >= 6 && x < 18){
		x = parseInt(x) + 1;
	}

	var y = document.getElementById("rangeN").value = x;
	document.getElementById("playerNum").value = y;
}
//minus button -1
function minusOne() {
	var x = document.getElementById("rangeN").value;
	if( x > 6 && x <= 18){
		x = parseInt(x) - 1;
		
	}
	var y = document.getElementById("rangeN").value = x;
	document.getElementById("playerNum").value = y;
}
//scroll range plus or minus 1 and change input value
function plus() {
	var rangeNum = document.getElementById("rangeN").value;
	document.getElementById("playerNum").value = rangeNum;
}

//when input value changed, the range value same changed
function changeRange() {
	var playNum = document.getElementById("playerNum").value;
	document.getElementById("rangeN").value = playNum;
}

//judgment whether input is digit
function regexp() {
	var x = document.getElementById("playerNum").value;
	var y = /[0-9]/.test(x);
	if(!y) {
		alert("请输入数字!");
	}
}


//the range of player number
function f() {
	// get total player number
var player = document.getElementById('playerNum').value;
	//initialize killer and shuimin player number
	var killNum = 0;
	var shuiNum = 0;

	//reset
	$("#assign").empty();

	if(player <6 || player > 18) {
		alert("请输入6-18之间的数字!");

	} else if(player >=6 && player <=8) {
		killNum = 1;
		shuiNum = player - 1;
		killF(killNum);
		shuiF(shuiNum);	

	} else if(player >= 9 && player <= 11) {
		killNum = 2;
		shuiNum = player - 2;
		killF(killNum);
		shuiF(shuiNum);

	} else if(player >= 12 && player <= 15) {
		killNum = 3;
		shuiNum = player - 3;
		killF(killNum);
		shuiF(shuiNum);

	} else if(player >= 16 && player <= 18) {
		killNum = 4;
		shuiNum = player - 4;
		killF(killNum);
		shuiF(shuiNum);
	}
	
}

//output killnum
function killF(killnum) {

	for(var i = 0; i < killnum; i++) {
		$(document).ready(function(){
		$("#assign").append("<li><img src='img/killer.png'><span class='assign--info'>杀&nbsp;&nbsp;&nbsp;手&nbsp;1&nbsp;人</span></li>");
		});
	}
}
//output shuiren
function shuiF(shuinum){
	
	for(var i = 0; i< shuinum; i++) {
		$(document).ready(function(){
		$("#assign").append("<li><img src='img/shuimin.png'><span class='assign--info'>水&nbsp;&nbsp;&nbsp;民&nbsp;1&nbsp;人</span></li>");
		});
	}
}
//sort total player
document.getElementById("sort").addEventListener("click",sortNum);
function sortNum() {
	$(document).ready(function(){
		var x = $("li").toArray()
		var i;
		
		x.sort(function(a,b){return 0.5 - Math.random()});
	
		$("#assign").empty();
		for(i = 0; i < x.length; i++){
			var j = x[i].innerHTML;
			$("#assign").append("<li>" + j + "</li>")
		}
	});

}

// go back to previous page(main page)
function goBack() {
	window.history.back();
}

//
function viewId() {
	window.location.href = "id.html";
}