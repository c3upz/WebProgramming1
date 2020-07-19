(function () {
	var template = document.getElementById("template");

	// remove template from the page, since it is only a template
	var parent = template.parentNode;
	parent.removeChild(template);

	// Create an XMLHttpRequest object
	var r1 = new XMLHttpRequest();

	// Set onreadystatechange
	r1.onreadystatechange = function () {
		if (r1.readyState === XMLHttpRequest.DONE && r1.status === 200) {
			var myContactList = JSON.parse(this.responseText);
			//console.log(myContactList);
			populateContacts(myContactList);

		} else {
			console.log("request not ready");
		}
	}

	// Open and send requests

	// This function takes the list of contacts and clones a new element from the template with the value of each contact
	function populateContacts(contacts) {
		for (let i = 0; i < contacts.length; i++) {
			var node = template.cloneNode(true);
			node.id = contacts[i].id;
			document.getElementsByClassName("card-body")[0].append(node);
			//!NOTE: cannot use the line of code below bc it does not allow me to add an index
			//document.getElementById("index").innerHTML = (i + 1); 
			document.querySelectorAll("#index")[i].innerHTML = i + 1;
			document.querySelectorAll('input[name="name"]')[i].value = contacts[i].name;
			document.querySelectorAll('input[name="email"]')[i].value = contacts[i].email;
		}

	}

	// submits a request with the search query for the filtered list of contacts
	function search() {
		// clear the current contacts list
		while (parent.lastChild)
			parent.removeChild(parent.lastChild);

		//get the search query and return the contacts
		var searchQuery = "http://students.engr.scu.edu/~adiaztos/resources/contacts.php?query=";
		searchQuery += document.getElementById("searchField").value;
		r1.open("POST", searchQuery, true);
		r1.send();

	}

	// assign the search function as the click handler for search button
	document.getElementById("searchBtn").onclick = () => {
		search();
	};

})();