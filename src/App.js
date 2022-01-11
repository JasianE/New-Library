import React, {useState, useEffect} from 'react'
import Nav from './Helpers/Nav'
import Book from './Helpers/Book'
import BookForm from './Helpers/BookForm'
import Overview from './Components/Overview'
import './App.css'

function Overlay(e){
    //Used for id and number properties in book
    //KEy makes avoiding big bad warning and number allows for changes to book state from child
    let i = 0;

    //Create state for books
    //Books is a state array that holds the books the user creates
    //Books Read is used for the overview component to give an.... overview of the user1!!!
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
        //Creates new array that appends a new book from bookform to books by destructuring books and adding props
        let x = [props, ...books]
        setBooks(x)
    }

    //Create Delete Book button function 
    function deleteBook(number){
        let newBooks = [...books]
        //Reference to the book getting deleted to update book info
        let x = newBooks[number - 1]
        newBooks.splice(number - 1, 1)
        //Removes the book 
        x.read ? setBooksRead(booksRead - 1) : console.log('And i need some money to buy candy bars')
        //Checks if book is read, if it is it removes one from books read, otherwise has an epic line
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

    //Local Data Functions and Logic and Mechanics and 
    useEffect(() => {
        //When component renders set books to localdata
        let localData = JSON.parse(localStorage.getItem('books'))
        setBooks(localData)
    }, [])
    useEffect(() => {
        //Updates local data everytime books is modified
        localStorage.setItem('books', JSON.stringify(books))
    })

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
