document.getElementById("createResume").addEventListener("click", buildResume2);
const codingSkills = [];
const employmentDetails = [];
const educationDetail = null;
const skillForm = document.getElementById("codingSkills");

const addNewSkillBtn = document.getElementById("addNewSkillBtn");
const addEmploymentBtn = document.getElementById("addEmploymentBtn");
const addEducationBtn = document.getElementById("addEduBtn");

addNewSkillBtn.addEventListener("click", () => {
  const input = document.getElementById(`skill_${codingSkills.length}`);
  if (input.value === "") {
    const skill = document.getElementById(`skill_${codingSkills.length}`).value;
    codingSkills.push(skill);
    createSkillInput();
    console.log(codingSkills);
  } else {
    alert("Must fill in skill");
  }
});

addEmploymentBtn.addEventListener("click", () => {
  const detailId = `empDetail_${employmentDetails.length}`;
  const details = document.getElementById(detailId).value;
  const startDate = document.getElementById(`startDate_${detailId}`).value;
  const endDate = document.getElementById(`endDate_${detailId}`).value;

  if (details) {
    employmentDetail = {
      id: "",
      startDate: "",
      endDate: "",
      details: "",
    };

    employmentDetail.id = detailId;
    employmentDetail.startDate = startDate;
    employmentDetail.endDate = endDate;
    employmentDetail.details = details;

    employmentDetails.push(employmentDetail);
    console.log(employmentDetail);
    createEmploymentInput();
  } else {
    alert("Must fill in employment history");
  }
});

addEducationBtn.addEventListener("click", () => {
  educationDetail = document.getElementById("educationDetail");
});

function createSkillInput() {
  const span = document.createElement("span");
  const input = document.createElement("input");
  input.id = `skill_${codingSkills.length}`;
  input.placeholder = "Enter skill";
  span.appendChild(input);
  skillForm.appendChild(span);
}

function createEmploymentInput() {
  const empDetailId = `empDetail_${employmentDetails.length}`;
  const employmentHistoryComponent = historyComponent(
    empDetailId,
    "Please describe your work experiences."
  );
  document.getElementById("empHistory").appendChild(employmentHistoryComponent);
}

function createEducationInput() {
  const eduDetailId = "educationDetail";
  const educationHistoryComponent = historyComponent(
    eduDetailId,
    "Please describe your education."
  );
  document.getElementById("eduHistory").appendChild(educationHistoryComponent);
}

function historyComponent(id, placeholder) {
  const span = document.createElement("span");
  const startDatePicker = document.createElement("input");
  const endDatePicker = document.createElement("input");
  const historyTextArea = document.createElement("textarea");
  const div = document.createElement("div");

  const startDateLabel = document.createElement("label");
  const startDateLabelText = document.createTextNode("Start Date ");
  startDateLabel.appendChild(startDateLabelText);

  const endDateLabel = document.createElement("label");
  const endDateLabelText = document.createTextNode("End Date ");
  endDateLabel.appendChild(endDateLabelText);

  endDatePicker.type = "date";
  endDatePicker.id = `endDate_${id}`;

  startDatePicker.type = "date";
  startDatePicker.id = `startDate_${id}`;

  span.appendChild(startDateLabel);
  span.appendChild(startDatePicker);

  span.appendChild(endDateLabel);
  span.appendChild(endDatePicker);

  historyTextArea.id = id;
  historyTextArea.class = "historyDetials";
  historyTextArea.rows = 10;
  historyTextArea.cols = 60;
  historyTextArea.placeholder = placeholder;

  div.appendChild(span);
  div.appendChild(historyTextArea);

  return div;
}

function buildResume() {
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
    "<html>\n<head>\n<title>Welcome</title>\n<link rel='stylesheet' href='resume.css'>\n</head>\n<body>\n<div id='guestName'>";

  myText += userCdSkills + " ";
  myText += "<h3>Work Ethic</h3>";
  myText += userWrkEthic + " ";
  myText += "<h3>Writing Skills</h3>";
  myText += userWritingSkills;
  myText += "</div>";

  myText += "<div id='techSkills'>";
  myText += "<h1>Technical Skills</h1>";
  myText += userTechSkills + " ";
  myText += userTechSkills2 + " ";
  myText += "</div>";

  myText += "<div id='edu'>";
  myText += "<h1>Educational Background</h1>";
  myText += userEDU + " ";
  myText += "</div>";

  myText += "<div id='empHistory1'>";
  myText += "<h1>Work History</h1>";
  myText += userStartDate1 + "  " + userEndDate1 + ", ";
  myText += userEmpDetails1;
  myText += "</div>";

  myText += "<div id='empHistory2'>";
  myText += userStartDate2 + "  " + userEndDate2 + ", ";
  myText += userEmpDetails2;
  myText += "</div>";

  myText += "<div id='empHistory3'>";
  myText += userStartDate3 + " " + userEndDate3;
  myText += userEmpDetails3;
  myText += "</div>";

  myText += "<div id='bzRef'>";
  myText += "<h1>Business References</h1>";
  myText += userRef;
  myText += "</div>\n</body>\n</html>";

  flyWindow = window.open(
    "about:blank",
    "myPop",
    "width=800,height=400,left=400,top=400"
  );
  flyWindow.document.write(myText);
}

function buildResume2() {
  flyWindow = window.open(
    "about:blank",
    "myPop",
    "width=1600,height=1000,left=400,top=400"
  );
  buildStartHTML(flyWindow);
  buildNameSection(flyWindow);
  buildContactSection(flyWindow);

  buildHTMLEnd(flyWindow);
}

function buildStartHTML(flyWindow) {
  flyWindow.document.write(
    "<html>\n<head>\n<title>Web 115 Final Project</title>\n<link rel='stylesheet' href='project.css'>\n</head>\n<body>\n"
  );
}

function buildHTMLEnd() {
  flyWindow.document.write("</div>\n</body>\n</html>");
}

function buildNameSection(flyWindow) {
  userName = document.getElementById("fullName").value;
  flyWindow.document.write(`<div id='guestName'>${userName}</div>`);
}

function buildContactSection(flyWindow) {
  userCity = document.getElementById("city").value;
  userState = document.getElementById("state").value;
  userZip = document.getElementById("zipCode").value;
  userPhone = document.getElementById("phoneNumber").value;
  userEmail = document.getElementById("email").value;

  userSocialMedia = document.getElementById("socialMedia").value;
  userPortfolio = document.getElementById("portfolio").value;

  const myText = `<div id='contact'>${userCity},${userState} ${userZip} &#9830; ${userPhone} &#9830; ${userEmail}
                      ${userSocialMedia} &#9830; ${userPortfolio}</div>`;
  flyWindow.document.write(myText);
}

function buildSkillsSection(flyWindow) {
  const myText = "<div id='skills'>";
  myText += "<h1>Skills</h1>";
  myText += "<h3>Coding Skills</h3>";
  flyWindow.document.write(myText);
}

createSkillInput();
createEmploymentInput();
createEducationInput();
