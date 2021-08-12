import React, {useState} from 'react'
import drawPenis from '../Logic/drawPenis'
import '../../App.css'

function BookForm(props){
    const [authorName, setAuthorName] = useState('')
    const [bookName, setBookName] = useState('')
    const [pages, setPages] = useState('')
    const [read, setRead] = useState(false)

    function validation(){
        let numbers = /^\d+$/;
        if(!authorName || !bookName || !pages){
            alert('Please Fill In Every Field.')
            return false
        }
        else if(!pages.match(numbers) || pages > 100000){
            alert('Please Use Only Numbers For Pages.')
            drawPenis()
            return false
        }
        return true
    }

    function handleSubmit(e){
        e.preventDefault()
        if(validation()){
            let newBook = {name: bookName, author: authorName, pages: pages, read: read}
            setAuthorName('')
            setBookName('')
            setPages('')
            read ? props.change(true, 'esambald') : console.log('RoflCopter')
            setRead(false)
            props.updateBooks(newBook)
            
        }
    }
    function handleChange(e){
        const {name, value} = e.target;
        if(name === 'authorName'){
            setAuthorName(value)
        }
        else if(name === 'bookName'){
            setBookName(value)
        }
        else if(name === 'Pages'){
            setPages(value)
        }
        else{
            setRead(!read)
        }
    }
    return(
        <div className = 'form'>
            <form autoComplete = 'off' onSubmit = {handleSubmit}>
                <input 
                name = 'authorName'
                type = 'text'
                className = 'textInput 1'
                value = {authorName}
                placeholder = 'Author Name'
                onChange = {handleChange}
                />
                <br></br>
                <input
                name = 'bookName'
                type = 'text'
                className = 'textInput 2'
                value = {bookName}
                placeholder = 'Book Name'
                onChange = {handleChange}
                />
                <br></br>
                <input 
                name = 'Pages'
                type = 'text'
                placeholder = 'Pages'
                className = 'textInput 3'
                value = {pages}
                onChange = {handleChange}
                />
                <br></br>
                <label className = 'switch'>
                    <span className = 'completed'>Completed?</span>
                    <input 
                    name = 'Read'
                    type = 'checkbox'
                    className = 'checkBox'
                    checked = {read}
                    onChange = {handleChange}
                    />
                    <span className = 'slider round'></span>
                </label>
                <br></br>
                <input 
                type = 'submit'
                value = 'Submit'
                className = 'submitForm'
                />
            </form>
        </div>
    )
}
export default BookForm