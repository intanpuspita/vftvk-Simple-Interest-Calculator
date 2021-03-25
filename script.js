function compute() {
	// Get value by element Id
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	// Validate principal (amount) value
	if(principal < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}
  
  	// Count interest and real year
	var interest = principal * years * rate / 100;
	var yearStr = parseInt(new Date().getFullYear()) + parseInt(years);

	// Display interest result
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + "</mark>, <br/>at an interest rate of <mark>" + rate + 
    	"%</mark>. <br/>You will receive an amount of <mark>" + interest + "</mark>, <br/>in the year <mark>" + yearStr + "</mark>";
    
}

function printSliderValue() {
	// Get value by element Id
	var rate = document.getElementById("rate").value;
	var rateValue = document.getElementById("rate-value");

	// Display rate value
	rateValue.innerHTML = rate + "%";
}