
var foodname = document.getElementById("Foodname");
var foodquantity = document.getElementById("Foodquantity");
var useramount = document.getElementById("Useramount");
var print = document.getElementById("output");
var print1 = document.getElementById("output1");
var Empty = document.getElementById("empty");
var chatbox = document.getElementById("chatbox");
var receipt1 = document.getElementById("receipt");
var printreceipt = document.getElementById("receipthere");
var buttonreceipt = document.getElementById("buttonreceipt1");
var pop = document.getElementById("POP");
var pop1 = document.getElementById("POP1");
var pop2 = document.getElementById("POP2");
var setting = document.getElementById("setting");
var print2 = document.getElementById("itemsincart");
var print3 = document.getElementById("printheresold");
var additems = document.getElementById("additemshere")

var foodlist = {
'tapsilog': 70,
'hotsilog': 65,
'sisigsilog': 110,
'chicksilog': 120,
'bangsilog': 115,
'porksilog': 120,
'Food7': 200,
'Food8': 200

};

var total = 0;
var numbersofitem = 0;
var initialcart =[];
var cart = [];
var solditem = [];

function addtocart() {
var foodname1 = foodname.value;
var empty1 = Empty.value;
var amount = parseFloat(foodquantity.value);

	if(!(foodname1 == empty1)) {
		if(foodlist[foodname1]) {
			if(!isNaN(amount)) {
				if(amount > 0) {
					cart.push(amount, foodname1);
					print1.innerHTML = cart;
				} else {
 					alert("Input the amount properly");
				}
			} else {
				alert("Enter input on how many");
		}
	} else {
		alert("not in food list");
		}
	} else {
		alert("complete the form before submiting");
		}
	listitems();				
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
		foodname.value = "tapsilog";
		print1.innerHTML = cart;
		
		break;
					
	case 2:
		
		foodname.value = "hotsilog";
		print1.innerHTML = cart;
		break;
					
	case 3:
		foodname.value = "chicksilog";
		print1.innerHTML = cart;
		break;
					
	case 4:
		foodname.value = "sisigsilog";
		print1.innerHTML = cart;
		break;
					
	case 5:
		foodname.value = "bangsilog";
		print1.innerHTML = cart;
		break;
					
	case 6:
		foodname.value = "porksilog";
		print1.innerHTML = cart;
		break;
					
	case 7:
		foodname.value = "Food7";
		print1.innerHTML = cart;
		break;
					
	case 8:
		foodname.value = "Food8";
		print1.innerHTML = cart;
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
			print.innerHTML = "All Total of " + total + "₱ ";
						
		}
	}
}

function buy() {
	var Useramount = parseFloat(useramount.value);
	var change = Useramount - total;
	var Useramount1 = prompt("Useramount : ");
	if(Useramount1 >= total) {
		for(var i = 0; i <= cart.length; i++) {
			if(!isNaN(cart[i])) {
				numbersofitem += cart[i];
			}
		}
		alert("thank you for purchasing! here your receipt.");
		buttonreceipt.style.display = "flex";
		printreceipt.innerHTML = "the change is: " + change + '<br>' + " total item Purchased: " + numbersofitem;
		numbersofitem = 0;
		useramount.value -= total;
		print1.innerHTML = "";
		for(var u = 0; u <= cart.length; u++) {
			solditem.push(cart[u]);
		}
		cart = [];
		print3.innerHTML = solditem;
		receipt1.style.display = "flex";
	} else {
		alert(" sorry you don't have enough money ");
	}
}

var switch1 = 0;
function viewcart() {
	if(switch1 == 0) {
		pop1.style.display = "flex";
		switch1++;	
	} else if(switch1 == 1) {
		pop1.style.display = "none";
		switch1--;
	}
}


/* to show the settings */
function showsetting() {
	if(switch1 == 0) {
		setting.style.display = "flex";
		switch1++;
	} else if(switch1 == 1) {
		setting.style.display = "none";
		switch1--;
	}
}

function showpop() {
	if(switch1 == 0) {
		pop.style.display = "flex";
		switch1++;
	} else if(switch1 == 1) {
		pop.style.display = "none";
		switch1--;
	}
}

/* for the pop up the foodquantity plus and minus*/
function increaseordecrease(or) {
	var foodquantity1 = foodquantity.value;
	if(or == 0 && foodquantity1 > 0) {
		foodquantity.value--;
	} else if(or == 1) {
		foodquantity.value++;
	}
}

function X(which) {
	switch(which) {
					
	case 0:
		showpop();
		break;
	case 1:
		viewcart();
		break;

	}
}
var switch2 = 0;
function viewitems() {
	if(switch2 == 0) {
		pop2.style.display = "flex";
		switch2++;
	} else if(switch2 == 1) {
		pop2.style.display = "none";
		switch2--;
	}
}

var items = "";
var amountofitems = '';

function listitems() {
	for(var i = 0; i < cart.length; i++) {
		if(isNaN(cart[i])) {
			var I = i - 1;
			items += '<div class="itemsincart">' + cart[i] + '<p>' + cart[I] + " Pieces " + '</p>' + '</div>';
		}
		additems.innerHTML = items;
	}
	items ="";
}