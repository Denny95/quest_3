//Лист товаров
var goods = [
	{
		"id" : "1",
		"name" : "Kiwi",
		"cost" : "70",
		"img" : "img/kiwi.png"
		
		
	},
	{
		"id" : "2",
		"name" : "Pear",
		"cost" : "85",
		"img" : "img/pear.png"
		
	},
	{	"id" : "3",
		"name" : "Lemon",
		"cost" : "45",
		"img" : "img/lemon.png"
		
	},
	{
		"id" : "4",
		"name" : "Apple",
		"cost" : "40",
		"img" : "img/apple.png"
	},
	{
		"id" : "5",
		"name" : "Orange",
		"cost" : "60",
		"img" : "img/orange.png"
	},
	{
		"id" : "6",
		"name" : "Banana",
		"cost" : "60",
		"img" : "img/banana.png"
	},
	{
		"id" : "7",
		"name" : "Apricot",
		"cost" : "35",
		"img" : "img/apricot.png"
	},
	{
		"id" : "8",
		"name" : "Cherry",
		"cost" : "55",
		"img" : "img/cherry.png"
	},
	{
		"id" : "9",
		"name" : "Tomato",
		"cost" : "40",
		"img" : "img/tomato.png"
	}
];

var basket = [];

var orders = 0;

//Строка на вывод
var out = "";

//Вывод Листа товаров
function toOut(){
	for(var key in goods){
		out+="<div class = 'col-md-3 col-sm-6 productItem' data-effect='pulse'>"
		+ "<div class = 'productImg'><img src='"+ goods[key].img + "'></div>"
		+"<h1 class = 'goodName'>"+ goods[key].name + "</h1>"
		+"<p class = 'goodCost'>"+ goods[key].cost + "</p>"
		// + "<img src='"+ goods[key].img + "'>"
		+"</div>";
	}

	$("#out").html(out);
	out = "";
};

//Вывод Листа, передаваемого в функцию (для локального goodsTemp)
function toOutParam(itemsList){
	for(var key in itemsList){
		out+="<div class = 'col-md-3 col-sm-6 productItem' data-effect='pulse'>"
		+ "<div class = 'productImg'><img src='"+ itemsList[key].img + "'></div>"
		+"<h1 class = 'goodName'>"+ itemsList[key].name + "</h1>"
		+"<p class = 'goodCost'>"+ itemsList[key].cost + "</p>"
		+"</div>";
	}

	$("#out").html(out);
	out = "";
};

//Вывод корзины с добавленными товарами
function toOutBasket(){
	for(var key in basket){
		out+= "<div class = 'row basketItem'>"
		+"<div class = 'col-md-3 col-sm-12  nameBasket'>" +basket[key].goodName+ "</div>"
		+"<div class = 'col-md-4 col-sm-12  itemNumb'> <input type='number' class='numbBasket' value='"+basket[key].numbers+"'></div>"
		+"<div class = 'col-md-3 col-sm-12 itemCount'><label type='number' class='costBasket'>"+basket[key].goodCost+"</label></div>"
		+"<div class = 'col-md-2 col-sm-12 itemButtDel'><button class = 'delButt'>Del</button></div>"
		// +"<div class = 'col-md-12 col-sm-12 itemTotalCost'>"+doTotalCostBasket()+"</div>"
		+"</div>";
	}

	$("#basket").html(out);
	out = "";
}

//Вывод итоговых значений в корзине (стоимость)
function toOutTotalBasket(){

	out+= "<div class='col-md-12 col-sm-12 totalCost' id = 'totalCost'><p>Total cost is: </p><label>"+doTotalCostBasket()+"</label></div>";

	$("#totalCost").html(out);
	out = "";
}

//Очитсть содержимое товаров в html
function clearOut(){
	$("#out").empty();
};

function clearBasket(){
	basket = [];
	$("#basket").empty();
	toOutTotalBasket();
};

//Получить цену за единицу товара
function getGoodPrice(goodName){
	var goodPrice = 0;
	for(var key in goods){
		if(goodName == goods[key].name){
			goodPrice = goods[key].cost;
		}
	}
	return goodPrice;
}

// Функции сравнения стоимости товаров (для сортировки)
function compareAgeA_B(goodA, goodB) {
	return goodA.cost - goodB.cost; //стоимость от меньшего к большему
}

function compareAgeB_A(goodA, goodB) {
	return goodB.cost - goodA.cost; //стоимость от меньшего к большему
}
//Сортировка товаров по названию в алфавитном порядке (а-я, a-z)
function sortPersonByAlfavit_direct(){
	var massName = []; //массив имен товаров
	for(var key in goods){
		massName.push(goods[key].name);
	}

	massName.sort(); //сортируем массив имен товаров по алфавиту

	var goodsTemp = []; //временный лист товаров (для записи в цикле)

	for(var i = 0; i < massName.length; i++){
		for (var key in goods) {
			if(massName[i] == goods[key].name){
				goodsTemp.push(goods[key]); //записываем во временный лист товары в алфавитном прорядке
			}
		}
	}

	goods = goodsTemp;
	goodsTemp = null; //обнуляем временный лист
}

//делаем сортировку по алфавиту, затем делаем обратный массив (сортировка по алфавиту в обратном порядке)
function sortPersonByAlfavit_reverse(){
	sortPersonByAlfavit_direct();
	goods.reverse();
}

//Поиск товара по имени
function searchGoodByName(){
	var textSrch = $("#searchInp").val(); //получаем значение из инпута
	var goodsTemp = [];
	textSrch=textSrch.slice(0, 1).toUpperCase() + textSrch.slice(1); //первая буква в вехрем регистре

	clearOut();

//если инпут пустой -- выводим все
	if(textSrch  === ""){
		toOut();
		return 0;
	}

	for (var key in goods) {
//ЗДЕСЬ добавлять условия для результатов поиска

		if(textSrch === goods[key].name){
			goodsTemp.push(goods[key]);
		}

//если написать all(All)-- выводим все
		if(textSrch === "All"){
			toOut();
			return 0;
		}
	}
	toOutParam(goodsTemp);
	goodsTemp = null;
}

//Добавить товар в корзину
function addToBasket(goodName, numbers, goodCost){
	good = {goodName, numbers, goodCost};
	var price = goodCost;

	var doPush = true;
	if(basket.length != 0){ //Если массив не пустой
		doPush = true;
		for(var key in basket) {
			if(goodName === basket[key].goodName){
				basket[key].numbers= basket[key].numbers+1;
				basket[key].goodCost = price * basket[key].numbers;
				doPush=false;
			}
		}
		if(doPush == true){basket.push(good);}
	} else{
		basket.push(good);
	}
	
	toOutBasket();
	toOutTotalBasket();
}

//Посчитать стоимость товара при изменении количества в инпуте
function doCostBasket(nameBasket, numbBasket, costBasket){
	var price = getGoodPrice(nameBasket);
	for(var key in basket) {
		if(nameBasket == basket[key].goodName){
			// alert("go12");
			basket[key].numbers = numbBasket;
			basket[key].goodCost =  price * basket[key].numbers;
		}
	}
	toOutBasket();
	toOutTotalBasket();
}

//Посчитать итоговую стоимость в корзине
function doTotalCostBasket(){
	var totalCost = 0;
	for(var key in basket)
		totalCost+= Number(basket[key].goodCost);
	return totalCost;
}

//Удаление товара с корзины, 
function revomeBaskItm(nameBasket){ 
// без toOutBasket(), т.к. html строку удаляеться методом remove(), осталось только удалить элемент из массива

	var basketTemp = []; //перезапишем исходный массив без удаленного элемента
	for(var key in basket) {
		if(nameBasket != basket[key].goodName){
			basketTemp.push(basket[key]);

			/* неудачные варианты*/
			// basket.slice(); // не работает с объектами
			// basket.remove(0); // не работает
			// alert(basket.indexOf(basket[key])); //индекс находит
			// basket.shift(); //работает, удаляе первый элемент
			// basket[key].remove(); // не работает

			// delete basket[key]; // работает, но вместо удаленного элемента значение undef, и размер массива не меняеться.
		}
	}

	basket = basketTemp;
	basketTemp = [];
	toOutTotalBasket();
}

$(document).ready(function($) {
	toOut();

	$(".totalOrders").val(0);
	$(".totalOrders").html($(".totalOrders").val());

	$(".totalItems").val(goods.length);
	$(".totalItems").html($(".totalItems").val());

	$("#lowToHight").click(function(event) {
		clearOut();
		goods.sort(compareAgeA_B);
		toOut();

		animateimgElem();
	});

	$("#hightToLow").click(function(event) {
		clearOut();
		goods.sort(compareAgeB_A);
		toOut();

		animateimgElem();
	});

	$("#ASK").click(function(event) {
		clearOut();
		sortPersonByAlfavit_direct();
		toOut();

		animateimgElem();
	});

	$("#DESC").click(function(event) {
		clearOut();
		sortPersonByAlfavit_reverse();
		toOut();

		animateimgElem();
	});

	$("#searchInp").change(function(event) {
		searchGoodByName();
		animateimgElem();
	});

	$(".product").on('click', '.productItem', function(event) {
		var numbers = 1; // Количество товара в корзин по умолчанию

		addToBasket($(this).find('.goodName').text(),numbers ,$(this).find('.goodCost').text());
		// alert("hellos");
	});

	$(".basket").on('change', '.basketItem', function(event) {

		doCostBasket($(this).find('.nameBasket').text(), $(this).find('.numbBasket').val(), 
			$(this).find('.costBasket').text());
		// alert($(this).find('.nameBasket').text());
	});

	$(".basket").on('click', '.delButt', function(event) {
		var nameBasck = $(this).parents('.basketItem').find('.nameBasket').text();
		revomeBaskItm(nameBasck);

		 $(this).parents(".basketItem").remove();
	});

	$("#sendOrderButt").click(function(event) {
		if(basket.length!=0){
			orders++;
			clearBasket();
			$("#totalOrders").text(orders);
		} else{
			alert("Basket is empty!");
		}
	});


});