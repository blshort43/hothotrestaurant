var tables = [];
var waiting = [];

$("#addBtn").on('click', function() {
	console.log("Woooooo");
	var new_cust = {

		name: $('#name').val().trim(),
		phoneNumber: $('#phone').val().trim(),
		email: $('#email').val().trim(),
		uniqueId: $('#uniqueid').val().trim() 
	};

	if (tables.length > 5) {
		tables.push(new_cust);
	}

	else {
		waiting.push(new_cust);
	}

	$.post('/api/customers')
		.done(function (data) {
			console.log(data);
		});

});