
var foodname = document.getElementById("Foodname");
var foodquantity = document.getElementById("Foodquantity");
var useramount = document.getElementById("Useramount");
var print = document.getElementById("output");
var print1 = document.getElementById("output1");
var Empty = document.getElementById("empty");
var foodlist = {
				'Food1': 100,
				'Food2': 200,
				'Food3': 300
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
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function button() {
				cart.push(1, "Food1");
				print.innerHTML = cart;
				foodname.value = "Food1";
				
				
}
function buy() {
				var Useramount = useramount.value;
				var change = Useramount - total;
				
				for(var i = 0; i <= cart.length; i++) {
								if(!isNaN(cart[i])) {
												numbersofitem += cart[i];
								}
				}
				
				if(Useramount >= total) {
								print1.innerHTML = "thank you for purchasing the change:" + change + "total item Purchased: " + numbersofitem;
				} else {
								print.innerHTML = "sorry you don't have enough money"
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