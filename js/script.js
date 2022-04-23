// Get the UI element 
let form = document.querySelector("#book-form");



// Book Class

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author =author;
        this.isbn = isbn;
    }
}

// UI Class 
class UI{
    constructor(){

    }
    addToBookList(book){
        let list = document.querySelector("#book-list")
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>`;
        
        list.appendChild(row);
    }
// After Taking Value Remove Filds
    clearFilds(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
// For Alart
    showAlart(message, cassName){
            let container = document.querySelector(".container");
            let div = document.createElement("div");
            div.className = ` alert ${cassName}`;
            div.appendChild(document.createTextNode(message));
            container.insertBefore(div, form);
// Remove Alart
            setTimeout(() =>{
                document.querySelector(".alert").remove();
            }, 3000);
    }
}

// Add Event Listener
form.addEventListener("submit", newBook);


// Define function 
function newBook (e){
    let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;
    let ui = new UI();

    if (title === "" || author === "" || isbn === ""){
        ui.showAlart("Please fill all the fields!", "error");
    }else{
        let book = new Book (title, author, isbn);
        ui.addToBookList(book);
        ui.clearFilds();
        ui.showAlart("Book Added!", "succes");
    }
    
    e.preventDefault();
}