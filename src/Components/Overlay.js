import React, {useState} from 'react'
import Nav from './Helpers/Nav'
import Book from './Helpers/Book'
import BookForm from './Helpers/BookForm'
import Overview from './Overview'
import '../App.css'

function Overlay(){
    let i = 0;
    //Create state for books
    const [books, setBooks] = useState([])
    const [booksRead, setBooksRead] = useState(0)
    //Summary Variables (gets refreshed each rerender)
    const noBooks = books.length;
    let totalPages = 0;
    for(let i = 0; i < books.length; i++){
        totalPages = parseInt(books[i].pages, 10) + totalPages;
    }
    let booksNotRead = noBooks - booksRead
    //Create child update parent state function
    function updateBooks(props){
        let x = [props, ...books]
        setBooks(x)
    }
    //Create Delete Book button function 
    function deleteBook(number){
        let newBooks = [...books]
        let x = newBooks[number - 1]
        newBooks.splice(number - 1, 1)
        x.read ? setBooksRead(booksRead - 1) : console.log('And i need some money to buy candy bars')
        setBooks(newBooks)
    }
    //Change read function
    function change(e, number){
        let d = [...books]
        let x = books[number - 1];
        e ? setBooksRead(booksRead + 1) : setBooksRead(booksRead - 1)
        //I like ternarys
        if(number !== 'esambald'){
            e ? x.read = true : x.read = false;
            d[number - 1] = x
        }
    }

    return(
        <div className = 'container'>
            <Nav />
            <div className = 'cardsContainer'>
                {books.map((book) => {
                    i++;
                    return(<Book number = {i} name = {book.name} author = {book.author} pages = {book.pages} read = {book.read} deleteBook = {deleteBook} key = {i}
                    change = {change}/>)
                })
                }
            </div>
            <aside className = 'formContainer'>
                <BookForm updateBooks = {updateBooks} change = {change}/>
            </aside>
            <aside className = 'summary'>
                <Overview totalPages = {totalPages} read = {booksRead} books = {noBooks} booksNotRead = {booksNotRead}/>
            </aside>
        </div>
    )
}
export default Overlay