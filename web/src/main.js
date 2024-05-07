/*
File: main.js
Author: VTG
Copyright: 2024, VTG
Group: Szoft I/1/N
Date: 2024-05-07
Github: https://github.com/Valaki2004
Licenc: GNU GPL
*/
const doc = {
    empBody: document.querySelector("#empBody"),
    addButton: document.querySelector("#addButton"),
    idInput: document.querySelector("#id"),
    titleInput: document.querySelector("#title"),
    nameInput: document.querySelector("#name"),
    priceInput: document.querySelector("#price")
}
const state = {
    url: 'http://localhost:8000/employees',
    name: 'valaki',
    city: 'valahol',
    salary: 300,
    add: true
}
doc.addButton.addEventListener('click', () => {
    getdataFromForm()
    console.log('jó')
    createEmployee()
    deleteModalContent()
    clearTableContent()
    getEmployees()
})
function startAdding() {
    deleteModalContent();
}
function getdataFromForm(){
    state.title = doc.titleInput.value
    state.name = doc.nameInput.value
    state.price = doc.priceInputInput.value
}
function createEmployee() {
    fetch(state.url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            name: state.title,
            city: state.name,
            salary: state.price
        })
    })
}
function getEmployees() {
    fetch(state.url)
    .then( response => response.json())
    .then(result => {
        console.log(result)
        clearTableContent()
        renderEmployees(result)
    })
}
function renderEmployees(employeeList) {
    employeeList.forEach(emp => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.title}</td>
        <td>${emp.name}</td>
        <td>${emp.price}</td>
        `
        doc.empBody.appendChild(row)
    });    
}
function deleteModalContent() {
    doc.idInput = ''
    doc.titleInput.value = ''
    doc.nameInput.value = ''
    doc.priceInput.value = ''
}
function clearTableContent(){
    doc.empBody.textContent= ''
}
function StartDelete(id){
    console.log(id)
    deleteEmployee(id)
    getEmployees()
}
getEmployees()

