exports.dateNowET = function(){
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let completeDate = dateNow + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
	return completeDate;
}


//monthNamesET[monthNow.getMonth()]
//console.log (yearNow);
//console.log("Täna on: " + dateNow + ". " + (monthNow + 1) + " " + yearNow);