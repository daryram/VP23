exports.dateNowET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let hournow = timeNow.getHours();
	let minutenow = timeNow.getMinutes();
	let secondnow = timeNow.getSeconds();
	let completeDate = dateNow + "." + (monthNow + 1) + "." + yearNow;
	return completeDate;
}

//console.log (yearNow);
//console.log("Täna on: " + dateNow + "." + (monthNow + 1) + "." + yearNow);

//console.log("täna on: " + hournow + "." + minutenow + "." + secondnow);