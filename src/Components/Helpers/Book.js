import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

function Book(props){
    let name = props.name.trim()
    let author = props.author.trim()
    const [newRead, setNewRead] = useState(props.read)
    useEffect(() => {
        setNewRead(props.read)
    })
    function handleChange(){
        newRead ? props.change(false, props.number) : props.change(true, props.number);
        setNewRead(!newRead)
    }
    return(
        <div className = 'bookCard'>
            <h1 className = 'book Text'>{name}</h1>
            <h2 className = 'book Text'>By: {author}</h2>
            <h2 className = 'book Text'>Read: {newRead ? 'Yes' : 'No'}</h2>
            <h2 className = 'book Text'>Pages: {props.pages}</h2>
            <div onClick = {() => {props.deleteBook(props.number)}}>
                <a className = 'giveMeCursorHover'>
                    <span className="left">
                    <span className="circle-left"></span>
                    <span className="circle-right"></span>
                    </span>
                    <span className="right">
                    <span className="circle-left"></span>
                    <span className="circle-right"></span>
                    </span>
                </a>
            </div>
            <label className = 'switch'>
                    <input 
                    name = 'Read'
                    type = 'checkbox'
                    className = 'checkBox2'
                    checked = {newRead}
                    onChange = {handleChange}
                    />
                    <span className = 'slider round'></span>
            </label>
            
        </div>
    )
}
export default Book