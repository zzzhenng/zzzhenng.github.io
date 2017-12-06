

function f(){
	var x = document.querySelectorAll(".box");
//initial color
	for(var i = 0;i<9;i++){
		x[i].style.backgroundColor='';
	}
//random number(0-8)
	var num=[];
	for(var i = 0; i<3; i++){
		 var p = Math.floor(Math.random() * 9);
		 num[i] = p;
		 for(var j = 1;j<num.length;j++){
		 	if(num[j-1] == p){
				i-=1;
				break;		 			
		 	}
		 }
		 
	}
	
// getRandomColor
	var letters = '0123456789ABCDEF';
	var colorArr = [];
	for(var i = 0;i<3;i++){
		var color = '#';
		for(var j =0; j<6; j++){
			color+=letters[Math.floor(Math.random()*16)];
		}
		if(color == '#E78326'){
			i-=1;
		}
		colorArr[i]=color;
	}

	// console.log(x[num[0]]);
	x[num[0]].style.backgroundColor=colorArr[0];
	x[num[1]].style.backgroundColor=colorArr[1];
	x[num[2]].style.backgroundColor=colorArr[2];
	

}

// btn2 reset color
function reset(){
	var x = document.querySelectorAll(".box");
//initial color
	for(var i = 0;i<9;i++){
		x[i].style.backgroundColor='';
	}
}
document.getElementById('btn2').addEventListener('click',reset);

