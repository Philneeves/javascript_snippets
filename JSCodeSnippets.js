// Have the function FirstFactorial(num) take the num parameter being passed 
// and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). 
// For the test cases, the range will be between 1 and 18 and the input will always be an integer

function FirstFactorial(num) { 
    
    var factorial = 1;

 for (i = 1; i <= num; i++) {  
     
     
     
     factorial  = factorial * i;

}

    document.getElementById("answer").innerHTML = (factorial); 
    // displays the result of this function in the browser
         
}

// Cash Register begin

function ShoppingList() {

var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity,cost) { 
    	// original parameters were item and quantity. added cost to display cost in table
    	// doesn't affect the calculation
        switch (item) {
        case "Eggs x 6": this.add(0.98 * quantity); break;
        case "Milk 1 litre": this.add(1.23 * quantity); break;
        case "Magazine": this.add(4.99 * quantity); break;
        case "Dairy Milk Chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    }
    
}
cashRegister.scan(document.getElementById("b").value,document.getElementById("c").value,document.getElementById("j").value);
cashRegister.scan(document.getElementById("d").value,document.getElementById("e").value,document.getElementById("k").value);
cashRegister.scan(document.getElementById("f").value,document.getElementById("g").value,document.getElementById("l").value);
cashRegister.scan(document.getElementById("h").value,document.getElementById("i").value,document.getElementById("m").value);

	document.getElementById("bill").innerHTML = (cashRegister.total.toFixed(2)); 
	// toFixed(2) rounds up answer to 2 decimal places only
}

// Cash register end

// Fibonnaci for loop begin - doesn't result in the start with 0, 1 though

	// var a = 0;
	// var b = 1;
	// var result = b;
	// var arr = [];

	// for (i = 0; i <= 12; i++) {

	// 	result = a + b;

	// 	a = b;

	// 	b = result;

	// 	arr.push(result);

	// }

	// document.getElementById("fibo").innerHTML = arr;

// Fibonnaci for loop end

// Fibonnaci recursion begin - this is better version and starts with 0, 1

function fibon(num) {

	var num = num;
	var array1 = [];
	var array2 = [];

	for (i = 0; i <= num; i++) {

	function fib(num) {
		if (num == 0) {
			return 0;
		}

		if (num == 1) {
			return 1;
		}

		return fib(num - 2) + fib(num - 1);
		// the recursive function keeps calling itself
		// i.e. each time it calls it splits into two for each if statement
		// the numbers reduce on each split until they = 1 or 0
		// if ends up equalling/returns 0 that is cancelled out
		// if it ends up equalling/returns a 1 that is stored in the memory
		// each of those 1s add up to the corresponding fibonnaci number in the sequence
	}
		array1.push(" " + i); // as i increments it will 'push' the count into an array
		array2.push(" " + fib(i)); // as the result of the fib function increments it will 'push' the sequence into an array
		document.getElementById("count").innerHTML = array1;
		document.getElementById("recurse").innerHTML = array2;
	}
}
// Fibonnaci recursion end		

