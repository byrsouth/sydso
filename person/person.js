const personBtn = document.getElementById("showPerson");
//let displayPerson = document.getElementById("displayPerson")
personBtn.addEventListener("click", () => {
    let personID = {
        showInfo: function () {
            return this.firstName + " " + this.lastName + " " + "has the role of " + this.role + " in " + this.course + " section " + this.section + ".";
        }
    }
    let person = Object.create(personID);
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.course = document.getElementById("course").value;
    person.section = document.getElementById("section").value;
    person.role = document.getElementById("role").value;

    document.getElementById("displayPerson").innerHTML = person.showInfo();
});

// console.log(personID.showInfo());


