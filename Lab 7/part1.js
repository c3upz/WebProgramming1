(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";

	// Create an XMLHttpRequest object
	var r1 = new XMLHttpRequest();

	// Handle succesful responses

	r1.onreadystatechange = function () {
		if (r1.readyState === XMLHttpRequest.DONE && r1.status === 200) { //if its enters this if statement we know the request is sucessful
			console.log("request is sucessful");
			document.getElementById("sample1").innerHTML = "<p>" + this.responseText + "</p>";

		} else {
			console.log("request not sucessful");
		}
	};
	// Get sample1.php
	r1.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample1.php", true);
	r1.send();

	// Create an XMLHttpRequest object
	var r2 = new XMLHttpRequest();

	// Handle succesful responses

	r2.onreadystatechange = function () {
		if (r2.readyState === XMLHttpRequest.DONE && r2.status === 200) { //if its enters this if statement we know the request is sucessful
			console.log("request is sucessful");
			document.getElementById("sample2").innerHTML = "<p>" + this.responseText + "</p>";

		} else {
			console.log("request not sucessful");
		}
	};
	// Get sample2.php
	r2.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample2.php", true);
	r2.send();


	// Create an XMLHttpRequest object
	var r3 = new XMLHttpRequest();

	// Handle succesful responses
	r3.onreadystatechange = function () {
		if (r3.readyState === XMLHttpRequest.DONE && r3.status === 200) {
			var response = JSON.parse(this.responseText);
			var nameList = '';
			for (let i = 0; i < response.friends.length; i++) {
				nameList += "<li>" + response.friends[i].name + "</li>\n";

			}
		} else {
			console.log("request not sucessful");
		}
		document.getElementById("sample3").append(document.createElement("ul"));
		document.querySelector("#sample3 ul").innerHTML = nameList;
	};

	// Get sample3.php
	r3.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample3.php", true)
	r3.send();

})();