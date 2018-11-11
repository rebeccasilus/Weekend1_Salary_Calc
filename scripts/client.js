$(document).ready(readyNow);

let budget = 20000;
let salaryTotal = [];

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
       // this.monthsIncome = annualSalary / 12;
    } // end constructor
} // Employee class

let staff = [];

function addEmployee() {
    // optional make all fields mandatory
    if ($('#firstNameIn').val() === '' || $('#lastNameIn').val() === '' || $('#idIn').val() === '' || $('#titleIn').val() === '' || $('#annualSalaryIn').val() === '') {
        alert("All fields must be completed!");
    } // empty fields found
    else {
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
        // console.log('adding', tempEmployee);
        // push newEmployee into array
        staff.push(tempEmployee);
        //empty the inputs
        $('#firstNameIn').val('');
        $('#lastNameIn').val(''),
            $('#idIn').val(''),
            $('#titleIn').val(''),
            $('#annualSalaryIn').val(''),
            updateStaff(staff);
    } // no empty fields found
} // addEmployee


function readyNow() {
    console.log('ready to go');
    $('#addEmployeeButton').on('click', addEmployee);

} // readyNow

/////////////////////////////////////////////////////////
function addClickers() {

} // click listeners added later
/////////////////////////////////////////////////////////

function monthlyCosts( allSalariesArgument ) {
    console.log(' in remainingBudget:', allSalariesArgument );
    let costOutput = $('#costOutput');
    let totalMonthlyCosts = allSalariesArgument;
    costOutput.empty();
    costOutput.append( allSalariesArgument.toFixed(2) );
    if ( totalMonthlyCosts > 20000 ){
        costOutput.css( 'background-color', 'red');
    } // end over budger
} // end remainingBudget

function updateStaff(array) {
    // console.log('in updateStaff');
    // create a variable that holds the total salary number
    let totalExpenses = 0;
    // target the table by id
    let outputDiv = $('#outputDiv');
    // empty table - turning this off keeps the headers from being deleted but makes doubles for each submit
    outputDiv.empty();
    // loop through the staff array and display each employee in the table
    for (let index of array) {
        let displayString = `<tr id="${index.id}">
    <td>${index.firstName}</td>
    <td>${index.lastName}</td>
    <td>${index.id}</td>
    <td>${index.title}</td>
    <td>${index.annualSalary}</td>
    <td><button id="${index.id}button">Delete</button></td></tr>`
    // displays the employee on the DOM
        outputDiv.append(displayString);
        // declare total number of expenses every month
        totalExpenses += Number( `${index.annualSalary}` ) / 12;
        // totalExpenses += ()`${index.annualSalary}`.toFixed( 2 ) / 12;
        // tells the delete button to do its thing
        $(`#${index.id}button`).on('click', function () {
            console.log(index.id);
            $(`#${index.id}`).remove();
        }); // end Delete button
        // update the salary total
    } // end for
    // console.log( totalExpenses );
    // update the remainingBudget by subtracting totalExpenses from budget
    monthlyCosts( totalExpenses );
} // updateStaff

