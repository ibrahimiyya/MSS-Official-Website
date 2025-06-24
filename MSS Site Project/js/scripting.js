let numberOne = document.querySelector("#one1");
let numberTwo = document.querySelector("#one2");
let numberThree = document.querySelector("#three3");
let nextButton = document.querySelector(".Next");
let nextButton2 = document.querySelector(".Next1");
let submitButton = document.querySelector(".submit");
let psnDetails = document.querySelector(".personal_details");
let prtDetails = document.querySelector(".parental_detail");
let eduDetails = document.querySelector(".educational_detail");

function nextFunction1() {
	numberTwo.setAttribute("class", "newStep");
	numberOne.setAttribute("class", "stepChild");
	nextButton.setAttribute("class", "Next1");
	nextButton2.setAttribute("class", "Next");
	psnDetails.setAttribute("class", "personal_detail");
	prtDetails.setAttribute("class", "parent_details");
	console.log(psnDetails);
	console.log(prtDetails);
	console.log(eduDetails);
}
function nextFunction2() {
	numberTwo.setAttribute("class", "stepChild");
	numberOne.setAttribute("class", "stepChild");
	numberThree.setAttribute("class", "newStep");
	nextButton.setAttribute("class", "Next1");
	nextButton2.setAttribute("class", "Next1");
	submitButton.setAttribute("class", "Next");
	prtDetails.setAttribute("class", "personal_detail");
	eduDetails.setAttribute("class", "educational_details");
}
function submitFunction() {
	//numberThree.setAttribute("class", "stepChild");
	eduDetails.setAttribute("class", "educational_details");
	
}


