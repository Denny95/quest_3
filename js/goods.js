
var goods = {
	"21447" : {
		"id" : "1",
		"name" : "Apple",
		"cost" : "40",
		"img" : "img/apple.png"
	},
	"24856" : {
		"id" : "2",
		"name" : "Apricot",
		"cost" : "35",
		"img" : "img/apricot.png"
	},
	"23451" : {
		"id" : "3",
		"name" : "Banana",
		"cost" : "60",
		"img" : "img/banana.png"
	},
	"21253" : {
		"id" : "4",
		"name" : "Cherry",
		"cost" : "55",
		"img" : "img/cherry.png"
	},
	"22649" : {
		"id" : "5",
		"name" : "Kiwi",
		"cost" : "70",
		"img" : "img/kiwi.png"
	},
	"23417" : {
		"id" : "6",
		"name" : "Lemon",
		"cost" : "45",
		"img" : "img/lemon.png"
	},
	"28409" : {
		"id" : "7",
		"name" : "Pear",
		"cost" : "85",
		"img" : "img/pear.png"
	},
	"20673" : {
		"id" : "8",
		"name" : "Orange",
		"cost" : "60",
		"img" : "img/orange.png"
	},
	// "20182" : {
	// 	"id" : "9",
	// 	"name" : "Tomato",
	// 	"cost" : "40",
	// 	"img" : "img/tomato.png"
	// }
};

var out = "";

function toOut(){
	for(var key in goods){
		out+="<div class = 'col-md-3 col-sm-6 productItem' data-effect='pulse'>"
		+ "<div class = 'productImg'><img src='"+ goods[key].img + "'></div>"
		+"<h1>"+ goods[key].name + "</h1>"
		+"<p>"+ goods[key].cost + "</p>"
		// + "<img src='"+ goods[key].img + "'>"
		+"</div>";
	}

	$("#out").html(out);
};

$(document).ready(function($) {
	toOut();
});


// function sortByCost(){
// 	$(document).ready(function($) {
// 		toOut();
// 	});
// }

// for(var key in goods){
// 	out+="<div class = 'col-md-3 col-sm-6 productItem' data-effect='jello'>"
// 	+ "<div class = 'productImg'><img src='"+ goods[key].img + "'></div>"
// 	+"<h1>"+ goods[key].name + "</h1>"
// 	+"<p>"+ goods[key].cost + "</p>"
// 	// + "<img src='"+ goods[key].img + "'>"
// 	+"</div>";
// }

// // document.getElementById('out').innerHTML = out;

// function ready(){
// 	document.getElementById('out').innerHTML = out;
// }
// // document.body.innerHTML = out;

// document.addEventListener("DOMContentLoaded", ready);
