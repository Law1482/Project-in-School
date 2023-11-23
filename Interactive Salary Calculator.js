//Made By Lawrence


var hourlyrate = document.getElementById("Hourlyrate");
var hoursworked = document.getElementById("Hoursworked");
var print = document.getElementById("printhere");
var username = document.getElementById("username");
var empty1 = document.getElementById("empty");
var invalid1 = document.getElementById("valid1");
var invalid2 = document.getElementById("valid2");


function Calculate() {

	var e = empty1.value;
	var hr = hourlyrate.value;
	var hw = hoursworked.value;
	var un = username.value;
	invalid1.innerHTML = "";
	invalid2.innerHTML = "";
	
	if(!(un === e || hr === e || hw === e)) {
		if(hr > 0) {
			if(hw > 0) {
				var totalsalary = hr * hw;
				print.innerHTML = "<b>Name : </b>" + un + "<br>" + "<b>Hourlyrate : </b>" + "Php" + hr + "<br>" + "<b>Hoursworked : </b>"  + hw + " Hour's" + "<br>" + "<b>Total Salary per day : </b>" + "Php" + totalsalary;	
		    } else {
		    	invalid2.innerHTML = "<b>Invalid hours worked</b>";
		    	hoursworked.value = "";
		    	print.innerHTML = " ";
		    }
	    } else {
	    	invalid1.innerHTML = "<b>Invalid hourly rate</b>";
	    	hourlyrate.value = "";
	    	print.innerHTML = " ";
	    }
	} else {
		alert("please fill before Calculate it.");
		print.innerHTML = " ";
	}	
}