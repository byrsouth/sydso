import { HistoryComponent } from "./components/history.component.js";
import { SkillComponent } from "./components/skilll.component.js";
import { BusinessReferenceComponent } from "./components/BusinessReferenceComponent.js";

import { HistoryDetail } from "./types.js";
import { PersonlInfoComponent } from "./components/personalInfo.component.js";

document.getElementById("createResume").addEventListener("click", buildResume2);
const codingSkills = [];
const employmentDetails = [];
const educationDetails = [];
const businessReferences = [];

const addNewSkillBtn = document.getElementById("addNewSkillBtn");
const addEmploymentBtn = document.getElementById("addEmploymentBtn");
const addEducationBtn = document.getElementById("addEduBtn");
const addBizRefBtn = document.getElementById("addBizRefBtn");

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
    let employmentDetail = new HistoryDetail();
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
  const detailId = `eduDetail_${educationDetails.length}`;
  const details = document.getElementById(detailId).value;
  const startDate = document.getElementById(`startDate_${detailId}`).value;
  const endDate = document.getElementById(`endDate_${detailId}`).value;

  if (details) {
    let educationDetail = new HistoryDetail();
    educationDetail.id = detailId;
    educationDetail.startDate = startDate;
    educationDetail.endDate = endDate;
    educationDetail.details = details;

    educationDetails.push(educationDetail);
    console.log(educationDetail);
    createEducationInput();
  } else {
    alert("Must fill in education history");
  }
});

addBizRefBtn.addEventListener("click", () => {
  const bizRefId = `name_bizRef_${businessReferences.length}`;
  createBusinessReferenceInput();
});

function createSkillInput() {  
  const id = `skill_${codingSkills.length}`; 
  const skillInput =  new SkillComponent(id,  "Enter skill");
  document.getElementById("codingSkills").appendChild(skillInput.renderComponent());
}

function createEmploymentInput() {
  const empDetailId = `empDetail_${employmentDetails.length}`;
  const employmentHistoryComponent = new HistoryComponent(empDetailId,"Please describe your work experiences." );
  document.getElementById("empHistory").appendChild(employmentHistoryComponent.renderComponent()); 
}

function createEducationInput() {
  const eduDetailId = `eduDetail_${educationDetails.length}`;
  const educationHistoryComponent = new HistoryComponent(eduDetailId,  "Please describe your education.");
  document.getElementById("eduHistory").appendChild(educationHistoryComponent.renderComponent());
}

function createBusinessReferenceInput() {
  const bizRefId = `"bizRef_${businessReferences.length}`;
  const bizRefComponent = new BusinessReferenceComponent(bizRefId);
  document.getElementById("bizRef").appendChild(bizRefComponent.renderComponent());
}

function createPersonalInfo(){
  const personalInfoComponent  = new PersonlInfoComponent();
  document.getElementById('personalInfo').appendChild(personalInfoComponent.renderComponent());
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
createBusinessReferenceInput();
createPersonalInfo();