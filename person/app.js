const personBtn = document.getElementById("showPerson");

personBtn.addEventListener("click", () => {
    const person = new Person();
	readPerson(person);
	printPerson(person);
});

function readPerson(p) {
	p.firstName = document.getElementById("firstName").value;
	p.lastName = document.getElementById("lastName").value;
	p.course = document.getElementById("course").value;
	p.sectionNumber = document.getElementById("section").value;
	p.role = document.getElementById("role").value;
}

function printPerson(p) {    
	document.getElementById("displayPerson").innerHTML = p.printCourseInfo();
}
