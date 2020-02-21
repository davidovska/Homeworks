// / Exercise 01
// Part 01 - Create a Person constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// Part 02 - Create a Student constructor function that inherits from Person 
// function Student(academyName, studentId, firstName, lastName, age) {
//     Object.setPrototypeOf(this, new Person(firstName, lastName, age))
//     this.academyName = academyName;
//     this.studentId = studentId;

//     this.study = function() {
//         console.log(` The student ${this.firstName} is studying in the ${this.academyName}`);
//     }
// }

function Student(academyName, studentId, person) {
    Object.setPrototypeOf(this, person)
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function() {
        console.log(` The student ${this.firstName} is studying in the ${this.academyName}`);
    }
}

// First Student Object
let studentOne = new Student(`SEDC`, 12345, new Person(`Clara`, `Cucco`, 35));
studentOne.getFullName();
studentOne.study();
console.log(studentOne);


// Second Student Object
let studentTwo = new Student(`SEDC`, 987, new Person(`Anna`, `Gambero`, 40));
studentTwo.getFullName();
studentTwo.study();
console.log(studentTwo);


// Exercise 02
studentOne.__proto__.getAcademyName = function(student) {
        return student.academyName;

    }
    // let person1 = new Person(`Pina`, `Perovska`, 19);
console.log(studentOne.getAcademyName(studentOne));

// no parametar (student)
studentTwo.__proto__.getAcademyName = function() {
    return this.academyName;
}
console.log(studentTwo.getAcademyName(studentTwo));


//Part 01 - DesignStudent
function DesignStudent(isStudentOfTheMonth, student) {
    Object.setPrototypeOf(this, student)
    this.student = isStudentOfTheMonth;

    this.attendAdobeExam = function() {
        console.log(` The student ${this.firstName} is doing an adobe exam!`)
    }
}

let student1 = new DesignStudent(true, new Student(`SEDC`, 2412, new Person(`Ivan`, `Ivanovski`, 33)));
student1.attendAdobeExam();


// Part 02 - CodeStudent
function CodeStudent(hasIndividualProject, hasGroupProject, student) {
    Object.setPrototypeOf(this, student)
    this.indiviualProject = hasIndividualProject;
    this.groupProject = hasGroupProject

    this.doProjectType = function() {
            return `${this.indiviualProject ? `hasIndividualProject` : `hasGroupProject` }`;
    }
}
let student2 = new CodeStudent(true, false, new Student(`SEDC`, 2210,new Person(`Robert`, `Rizzo`, 36)));
console.log(student2.doProjectType());

// Part 03 - NetworkStudent
function NetworkStudent(academyPart, student) {
    Object.setPrototypeOf(this, student)
    this.academyPart = academyPart;

    this.attendCiscoExam = function() {
        console.log(` The student ${this.firstName} is doing an cisco exam!`);
    }
}

let student3 = new NetworkStudent(2,new Student( `SEDC`, 587,new Person(`Ognen`, `Vangelov`, 35)));
student3.attendCiscoExam();