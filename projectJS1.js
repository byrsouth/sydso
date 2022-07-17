//document.getElementById("createResume").addEventListener("click", buildResume);
const codingSkills = [];
const employmentDetails = [];
const skillForm = document.getElementById('codingSkills');
const addNewSkillBtn = document.getElementById('addNewSkillBtn');
const addEmploymentBtn = document.getElementById('addEmploymentBtn');

addNewSkillBtn.addEventListener('click', () => {
	const input = document.getElementById(`skill_${codingSkills.length}`);
	if(input.value === '' ){
		alert("Must fill in skill");
	}else{
		const skill = document.getElementById(`skill_${codingSkills.length}`).value;
		codingSkills.push(skill);
		createSkillInput();
		console.log(codingSkills);
	}
});

addEmploymentBtn.addEventListener('click', () => {

	createEmploymentInput();
});

function buildResume() {
	userName = document.getElementById('fullName').value;
	userCity = document.getElementById('city').value;
	userState = document.getElementById('state').value;
	userZip = document.getElementById('zipCode').value;
	userPhone = document.getElementById('phoneNumber').value;
	userEmail = document.getElementById('email').value;
	userSocialMedia = document.getElementById('socialMedia').value;
	userPortfolio = document.getElementById('portfolio').value;

	// userCdSkills = document.getElementById("codingSkills").value;
	// userWrkEthic = document.getElementById("workEthic").value;
	// userWritingSkills = document.getElementById("writingSkills").values;
	// userTechSkills = document.getElementById("techSkills").value;
	// userTechSkills2 = document.getElementById("techSkills2").value;
	// userEDU = document.getElementById("eduBkgrd").value;
	// userStartDate1 = document.getElementById("startDate1").value;
	// userEmpDetails1 = document.getElementById("empDetails1").value;
	// userEndDate1 = document.getElementById("endDate1").value;
	// userStartDate2 = document.getElementById("startDate2").value;
	// userEndDate2 = document.getElementById("endDate2").value;
	// userEmpDetails2 = document.getElementById("empDetails2").value;
	// userStartDate3 = document.getElementById("startDate3").value;
	// userEndDate3 = document.getElementById("endDate3").value;
	// userEmpDetails3 = document.getElementById("empDetails3").value;
	// userRef = document.getElementById("busRef").value;

	myText =
		"<html>\n<head>\n<title>Welcome</title>\n<link rel='stylesheet' href='project.css'>\n</head>\n<body>\n<div id='guestName'>";
	myText += userName + ' ';
	myText += '</div>';

	myText += "<div id='contact'>";
	myText += userCity + ' ' + userState + ' ' + userZip + ' ';
	myText += userPhone + ' ' + userEmail + ' ';
	myText += userSocialMedia + ' ' + userPortfolio + ' ';
	myText += '</div>';

	myText += "<div id='skills'>";
	myText += '<h1>Skills</h1>';
	myText += '<h3>Coding Skills</h3>';
	myText += userCdSkills + ' ';
	myText += '<h3>Work Ethic</h3>';
	myText += userWrkEthic + ' ';
	myText += '<h3>Writing Skills</h3>';
	myText += userWritingSkills;
	myText += '</div>';

	myText += "<div id='techSkills'>";
	myText += '<h1>Technical Skills</h1>';
	myText += userTechSkills + ' ';
	myText += userTechSkills2 + ' ';
	myText += '</div>';

	myText += "<div id='edu'>";
	myText += '<h1>Educational Background</h1>';
	myText += userEDU + ' ';
	myText += '</div>';

	myText += "<div id='empHistory1'>";
	myText += '<h1>Work History</h1>';
	myText += userStartDate1 + '  ' + userEndDate1 + ', ';
	myText += userEmpDetails1;
	myText += '</div>';

	myText += "<div id='empHistory2'>";
	myText += userStartDate2 + '  ' + userEndDate2 + ', ';
	myText += userEmpDetails2;
	myText += '</div>';

	myText += "<div id='empHistory3'>";
	myText += userStartDate3 + ' ' + userEndDate3;
	myText += userEmpDetails3;
	myText += '</div>';

	myText += "<div id='bzRef'>";
	myText += '<h1>Business References</h1>';
	myText += userRef;
	myText += '</div>\n</body>\n</html>';

	flyWindow = window.open(
		'about:blank',
		'myPop',
		'width=800,height=400,left=400,top=400'
	);
	flyWindow.document.write(myText);
}

function createSkillInput() {
	const span = document.createElement('span');
	const input = document.createElement('input');
	input.id = `skill_${codingSkills.length}`;
	input.placeholder = 'Enter skill';
	span.appendChild(input);
	skillForm.appendChild(span);
}

function createEmploymentInput() {
	const span = document.createElement('span');
	const startDatePicker = document.createElement('input');
	const endDatePicker = document.createElement('input');
	const empDetails = document.createElement('textarea');
	const div = document.createElement('div');

	endDatePicker.type = 'date';
	endDatePicker.id = 'endDate';

	startDatePicker.type = 'date';
	startDatePicker.id = 'startDate';

	span.appendChild(startDatePicker);
	span.appendChild(endDatePicker);

	empDetails.id = `empDetail_${employmentDetails.length}`;
	empDetails.class = 'empDetials';
	empDetails.rows = 10;
	empDetails.cols = 60;
	empDetails.placeholder = 'Please describe your work experiences.';

	div.appendChild(empDetails);

	document.getElementById('empHistory').appendChild(span);
	document.getElementById('empHistory').appendChild(div);

}

createSkillInput();
createEmploymentInput();
