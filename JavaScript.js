
var foodname = document.getElementById("Foodname");
var foodquantity = document.getElementById("Foodquantity");
var useramount = document.getElementById("Useramount");
var print = document.getElementById("output");
var print1 = document.getElementById("output1");
var Empty = document.getElementById("empty");
var chatbox = document.getElementById("chatbox");
var receipt = document.getElementById("receipt");
var printreceipt = document.getElementById("receipthere");
var buttonreceipt = document.getElementById("buttonreceipt1");
var pop = document.getElementById("POP");
var pop1 = document.getElementById("POP1");
var setting = document.getElementById("setting");
var print2 = document.getElementById("itemsincart");
var foodlist = {
'tapsilog': 100,
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
					pop.style.backgroundimage = "url('images/hotsilog.png')";
		break;
					
	case 2:
		cart.push(1, "Food2");
		foodname.value = "Food2";
		print1.innerHTML = cart;
		break;
					
	case 3:
		cart.push(1, "Food3");
		foodname.value = "Food3";
		print1.innerHTML = cart;
		chatbox.style.display = "flex";
		break;
					
	case 4:
		cart.push(1, "Food4");
		foodname.value = "Food4";
		print1.innerHTML = cart;
		break;
					
	case 5:
		cart.push(1, "Food5");
		foodname.value = "Food5";
		print1.innerHTML = cart;
		break;
					
	case 6:
		cart.push(1, "Food6");
		foodname.value = "Food6";
		print1.innerHTML = cart;
		break;
					
	case 7:
		cart.push(1, "Food7");
		foodname.value = "Food7";
		print1.innerHTML = cart;
		break;
					
	case 8:
		cart.push(1, "Food8");
		foodname.value = "Food8";
		print1.innerHTML = cart;
		chatbox.style.display = "flex";
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
		chatbox.style.display = "flex";
		print.innerHTML = "thank you for purchasing! here your receipt.";
		buttonreceipt.style.display = "flex";
		printreceipt.innerHTML = "the change is: " + change + " total item Purchased: " + numbersofitem;
		numbersofitem = 0;
		useramount.value -= total;
		print1.innerHTML = "";
		for(var u = 0; u <= cart.length; u++) {
			solditem.push(cart[u]);
		}
		cart = [];
	} else {
		print.innerHTML = " sorry you don't have enough money ";
	}
}

var feature = document.getElementById("features");
var cc = 0;
function showfeatures() {
	
	if(cc == 0) {
	feature.style.display = "flex";
	cc = 1;
  }
  if(cc == 1) {
  	feature.style.display = "none";
  	cc = 0;
  }
}
var switch1 = 0;
function viewcart() {
	if(switch1 == 0) {
		pop1.style.display = "flex";
		print2.innerHTML = cart;
		switch1++;
					
	} else if(switch1 == 1) {
		pop1.style.display = "none";
		print2.innerHTML = " ";
		switch1--;
	}


}
/* for show the receipt*/
var c = 0;
function showreceipt() {

	if(c == 0) {
	receipt.style.display = "flex";
	c++;
} else if(c == 1) {
		receipt.style.display = "none";
		c--;
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