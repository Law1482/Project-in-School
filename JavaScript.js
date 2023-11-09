
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
var cart1 = [];

function addtocart() {
var foodname1 = foodname.value;
var empty1 = Empty.value;
var amount = parseFloat(foodquantity.value);

	if(!(foodname1 == empty1)) {
		if(foodlist[foodname1]) {
			if(!isNaN(amount)) {
				cart.push(amount, foodname1);
				cart1.push(amount, foodname1);
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
	total = 0;
	numbersofitem = 0;
	print.innerHTML = cart;
	

}
function button1() {
	cart.push(1, "Food1");
	print.innerHTML = cart;
	foodname.value = "Food1";
	calculate1();
	
}
function button2() {
	cart.push(1, "Food2");
	print.innerHTML = cart;
	foodname.value = "Food2";
	calculate1();
	
}
function button3() {
	cart.push(1, "Food3");
	print.innerHTML = cart;
	foodname.value = "Food3";
	calculate1();
	
}
function button4() {
	cart.push(1, "Food4");
	print.innerHTML = cart;
	foodname.value = "Food4";
	calculate1()
	
}
function button5() {
	cart.push(1, "Food5");
	print.innerHTML = cart;
	foodname.value = "Food5";
	calculate1();
	
}
function button6() {
	cart.push(1, "Food6");
	print.innerHTML = cart;
	foodname.value = "Food6";
	calculate1();
	
}
function button7() {
	cart.push(1, "Food7");
	print.innerHTML = cart;
	foodname.value = "Food7";
    calculate1();
	
}
function button8() {
	cart.push(1, "Food8");
	print.innerHTML = cart;
	foodname.value = "Food8";
	calculate1();
	
}

function calculate1() {
	total = 0;
	for(var i = 0; i <= cart.length; i++) {
		if(foodlist[cart[i]]) {
			var I = i - 1;
			var subtotal = foodlist[cart[i]] * cart[I];
			total+=subtotal;
		}
	}
	
}

function calculate() {
	total = 0;
	for(var i = 0; i <= cart.length; i++) {
		if(foodlist[cart[i]]) {
			var I = i - 1;
			var subtotal = foodlist[cart[i]] * cart[I];
			total+=subtotal;
		}
	print.innerHTML = total;
	}
	
}
function buy() {
	var Useramount = useramount.value;
	var change = Useramount - total;
	
	for(var x = 0; x <= cart.length; x++) {
		if(foodlist[cart[x]]) {
			for(var u = 0; u <= cart1.length; u++) {
				if(cart[x] == cart1[u]) {
					var X = x - 1;
					var U = u - 1;
					cart1[U] += cart[X];
				} 
			}
		}
	}
	if(Useramount >= total) {
		for(var i = 0; i <= cart.length; i++) {
		if(!isNaN(cart[i])) {
			numbersofitem += cart[i];
		}
	}
			print1.innerHTML = "thank you for purchasing the change:" + change + " total item Purchased: " + numbersofitem;
			print.innerHTML = cart1;
			numbersofitem = 0;
	} else {
		print1.innerHTML = " "	;
		print.innerHTML = " sorry you don't have enough money ";
	}

	
}
