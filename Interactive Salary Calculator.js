var hourlyrate = document.getElementById("Hourlyrate");
var hoursworked = document.getElementById("Hoursworked");
var print = document.getElementById("printhere");
var username = document.getElementById("username");
var empty1 = document.getElementById("empty");


function Calculate() {
	var e = empty1.value;
	var hr = hourlyrate.value;
	var hw = hoursworked.value;
	var un = username.value;
	if(!(un === e || hr === e || hw === e)) {
		if(!(hr < 0 || hw < 0)) {
		var totalsalary = hr * hw;
		print.innerHTML = "Name : " + un + "<br>" + "Hourlyrate : " + hr + "<br>" + "Hoursworked : "  + hw + "<br>" + "Total Salary per day : " + totalsalary;	
	    } else {
	    	alert("cant be negative");
	    	hourlyrate.value = "";
	    	hoursworked.value = "";
	    }
	} else {
		alert("please fill before Calculate it.");
	}	
}
