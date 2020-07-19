(function () {
	// Add the click handler for the button
	$("button").click(function () {
		$("#allUpper").empty(); // clearing the div before I add the content I need
		$("#allUpper").append($("#myInput").val().toUpperCase());

		$("#allLower").empty(); // clearing the div before I add the content I need
		$("#allLower").append($("#myInput").val().toLowerCase());

		$("#redText").empty(); // clearing the div before I add the content I need
		$("#redText").append($("#myInput").val());
		$("#redText").css("color", "red");

		$("#flashyText").empty(); // clearing the div before I add the content I need
		$("#flashyText").append($("#myInput").val());
		$("#flashyText").addClass("flashy");
	});

})();