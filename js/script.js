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
        <td><a style="color:red;text-Decoration:none;" href="#" class="delete">x</a></td>`;
        // document.querySelector("a").style.textDecoration = "none";
        // document.querySelector("a").style.color = "red";
        list.appendChild(row);
    }

    clearFilds(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}

// Add Event Listener
form.addEventListener("submit", newBook);


// Define function 
function newBook (e){
    let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

    let book = new Book (title, author, isbn);
    
    let ui = new UI();
    ui.addToBookList(book);
    ui.clearFilds();
    e.preventDefault();
}