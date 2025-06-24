/*** Date function declaration ***/
function displayDate() {
	const weeks = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	const currentDate = new Date();
	const hijriDate = currentDate.toLocaleDateString('en-SA-u-ca-islamic', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	  });
	let week = weeks[currentDate.getDay()];
	let day = currentDate.getDate();
	let month = months[currentDate.getMonth()];
	let year = currentDate.getFullYear();
	let fullDate = day + " / " + month + " / " + year;
	const dayOfTheWeek = document.getElementById("dayInTheWeek");
	const geogianDates = document.getElementById("grogianDate");
	const hjrDATE = document.querySelector(".hijraContainer");
	hjrDATE.innerHTML = hijriDate;
	dayOfTheWeek.innerHTML = week;
	geogianDates.innerHTML = fullDate;
  
  console.log(fullDate);
  console.log(month);
  console.log(week);
  console.log(hijriDate); // Output will be in Hijri format
  //dayOfWeek.innerHTML = month;
}
/*** Date duplay and iteration function setup ***/
displayDate();
const date = new Date();



