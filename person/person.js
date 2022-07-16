 Person = function() {
    this.firstName = '';
    this.lastName = '';
    this.course = '';
    this.sectionNumber = '';
    this.role = '';    
};

Person.prototype.printCourseInfo = function() {
    return this.firstName + ' ' + this.lastName + ' has the role of ' + this.role + ' in class ' + this.course + ' section '  + this.sectionNumber ;
}

Person.prototype.setFirstName = function(fname) {
    this.firstName = fname;
}

Person.prototype.getFirstName = function () {
    return this.firstName
}

Person.prototype.getLastName = function () {
    return this.lastName;
}

Person.prototype.getCourse = function () {
    return this.course;
}

Person.prototype.getSectionNumber = function () {
  return this.sectionNumber;
}


Person.prototype.getRole = function () {
    return this.role;
}

Person.prototype.getFullName = function () {
    return this.Fisrt + ' ' + this.LastName;
}


