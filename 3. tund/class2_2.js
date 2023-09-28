const FirstName = "Daria";
const LastName = "Bayram";
const dateInfo = require("./dateTime_et")
//lisame failisüsteemi mooduli
const fs = require("fs");
let folkWisdom = [];

fs.readFile("txtfiles/vanasonad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else{
		//console.log(data);
		folkWisdom = data.split(";");
		//console.log(folkWisdom); ´- paneb need ritta
		//console.log("Vanasõnu on " + folkWisdom.length); - loendab alla mitu neid on
		onScreen();
	}
}); //readFile lõppeb

const onScreen = function(){
	console.log(FirstName + " " + LastName);
	//console.log(Date());
	console.log(dateInfo.dateNowET());
	//console.log("Tänane tarkus: " + folkWisdom[Math.floor(Math.random() * folkWisdom.length)]);
	//kõige tavalisem tsükkel (loop)
	for (let i = 0; i < folkWisdom.length; i ++){
		console.log((i + 1) + ") " + folkWisdom[i]);
	}
	//console.log(Time());
	console.log("Kell on: " + dateInfo.timeNowET());
	console.log("On " + dateInfo.timeOfDayET() + ".");
	//console.log(dateInfo.monthsET); - kuude nimekirja viskab lehele
}