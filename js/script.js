// Get the UI element 
let form = document.querySelector("#book-form");
let bookList = document.querySelector("#book-list");

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
    static addToBookList(book){
        let list = document.querySelector("#book-list")
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>`;
        
        list.appendChild(row);
    }
// After Taking Value Remove Filds
    static clearFilds(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
// For Alart
    static showAlart(message, cassName){
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

    static deleteFromBook(target){
        if (target.hasAttribute("href")){
            target.parentElement.parentElement.remove();
            UI.showAlart("Book Removed!", "succes");
        }
    }
}

// Add Event Listener
form.addEventListener("submit", newBook);
bookList.addEventListener("click", removeBook);

// Define function 
function newBook (e){
    let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;
   

    if (title === "" || author === "" || isbn === ""){
        UI.showAlart("Please fill all the fields!", "error");
    }else{
        let book = new Book (title, author, isbn);
        UI.addToBookList(book);
        UI.clearFilds();
        UI.showAlart("Book Added!", "succes");
    }
    
    e.preventDefault();
}

function removeBook(e){
   
   UI.deleteFromBook(e.target);
   
   e.preventDefault();
}