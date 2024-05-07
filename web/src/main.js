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
    bookBody: document.querySelector("#bookBody"),
}
const state = {
    url: 'http://localhost:8000/books',
}
function getDataFromForm() {
    state.title = doc.titleInput.value
    state.name = doc.nameInput.value
    state.price = doc.priceInput.value
}
function getBooks() {
    fetch(state.url)
    .then( response => response.json())
    .then(result => {
        renderBooks(result)
    })
}
function renderBooks(bookList) {
    
    bookList.forEach(bks => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${bks.id}</td>
            <td>${bks.title}</td>
            <td>${bks.name}</td>
            <td>${bks.price}</td>
            <td>
        `
        doc.bookBody.appendChild(row)
    });   
}
getBooks()

