
var foodname = document.getElementById("Foodname");
var foodquantity = document.getElementById("Foodquantity");
var useramount = document.getElementById("Useramount");
var print = document.getElementById("output");
var print1 = document.getElementById("output1");
var Empty = document.getElementById("empty");
var foodlist = {
'Food1': 100,
'Food2': 200,
'Food3': 200,
'Food4': 200,
'Food5': 200,
'Food6': 200,
'Food7': 200,
'Food8': 200

};

var total = 0;
var numbersofitem = 0;
var cart = [];

function addtocart() {
var foodname1 = foodname.value;
var empty1 = Empty.value;
var amount = parseFloat(foodquantity.value);

	if(!(foodname1 == empty1)) {
		if(foodlist[foodname1]) {
			if(!isNaN(amount)) {
				cart.push(amount, foodname1);
				print.innerHTML = cart;
			} else {
				alert("Enter input on how many");
		}
	} else {
		alert("not in food list");
		}
	} else {
		alert("complete the form before submiting");
		}				
	}

function resetcart() {
	cart = [];
	foodname.value = "";
	foodquantity.value = "";
	useramount.value = "";
	total = 0;
	numbersofitem = 0;
	print.innerHTML = cart;
}

function button(foods){
	switch(foods) {

	case 1:
		cart.push(1, "Food1");
		foodname.value = "Food1";
		print.innerHTML = cart;
		break;
	case 2:
		cart.push(1, "Food2");
		foodname.value = "Food2";
		print.innerHTML = cart;
		break;
	case 3:
		cart.push(1, "Food3");
		foodname.value = "Food3";
		print.innerHTML = cart;
		break;
	case 4:
		cart.push(1, "Food4");
		foodname.value = "Food4";
		print.innerHTML = cart;
		break;
	case 5:
		cart.push(1, "Food5");
		foodname.value = "Food5";
		print.innerHTML = cart;
		break;
	case 6:
		cart.push(1, "Food6");
		foodname.value = "Food6";
		print.innerHTML = cart;
		break;
	case 7:
		cart.push(1, "Food7");
		foodname.value = "Food7";
		print.innerHTML = cart;
		break;
	case 8:
		cart.push(1, "Food8");
		foodname.value = "Food8";
		print.innerHTML = cart;
		break;
	}
}

function calculate(condition) {
	total = 0;
	for(var i = 0; i <= cart.length; i++) {
		if(foodlist[cart[i]]) {
			var I = i - 1;
			var subtotal = foodlist[cart[i]] * cart[I];
			total+=subtotal;
		}
		if(condition == 0){
			print.innerHTML = total;
		}
	}
}

function buy() {
	var Useramount = parseFloat(useramount.value);
	var change = Useramount - total;
	
	if(Useramount >= total) {
		for(var i = 0; i <= cart.length; i++) {
			if(!isNaN(cart[i])) {
				numbersofitem += cart[i];
			}
		}

		print1.innerHTML = "thank you for purchasing! the change is:" + change + " total item Purchased: " + numbersofitem;
		numbersofitem = 0;
		useramount.value -= total;
	} else {
		print.innerHTML = " sorry you don't have enough money ";
	}
}
