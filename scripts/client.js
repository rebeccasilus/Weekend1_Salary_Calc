$(document).ready(readyNow);

// let deleteEmployeeButton = $('<button>Delete Employee</button>');
// deleteEmployeeButton.click (function (){
//     console.log('Deleting Employee');
// });

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    } // end constructor
} // Employee class

let staff = [];

function addEmployee() {
    // optional make all fields mandatory
    if( $('#firstNameIn').val() === '' || $('#lastNameIn').val() === '' || $('#idIn').val() === '' || $('#titleIn').val() === '' || $('#annualSalaryIn').val() === ''){
        alert( "All fields must be completed!");
    } // empty fields found
    else{
        console.log('in addEmployee');
    // create a new Employee from class
    // use inputs entered in DOM
    const tempEmployee = new Employee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#annualSalaryIn').val(),
        );
    console.log('adding', tempEmployee);
    // push newEmployee into array
    staff.push(tempEmployee);
    //empty the inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val(''),
    $('#idIn').val(''),
    $('#titleIn').val(''),
    $('#annualSalaryIn').val(''),
    updateStaff (staff);
    } // no empty fields
} // addEmployee

function deleteEmployee() {
    console.log('deleting employee');
} // deleteEmployee

function monthlyIncome(annualSalary) {
    let monthPay = annualSalary / 12;
    console.log( 'Your pay every month is:', monthPay );
}
function readyNow() {
    console.log('ready to go');
    $('#addEmployeeButton').on('click', addEmployee);
    $('#employeeDelete').on('click', deleteEmployee);
} // readyNow

/////////////////////////////////////////////////////////
function addClickers() {
    $('.employeeDelete').on('click', deleteEmployee);
}
/////////////////////////////////////////////////////////

function updateStaff(array){
console.log('in updateStaff');
// target the table by id
let table = $('#outputDiv');
// empty table - turning this off keeps the headers from being deleted but makes doubles for each submit
table.empty();
// loop through the staff array and display each employee in the table
for( let index of array ){
    let displayString = `<tr>
    <td>${index.firstName}</td>
    <td>${index.lastName}</td>
    <td>${index.id}</td>
    <td>${index.title}</td>
    <td>${index.annualSalary}</td>
    <td></td>
    <td><button class="employeeDelete">Delete</button></td></tr>`
    table.append(displayString);
     addClickers();

} // end for
 
} // updateStaff