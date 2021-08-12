import React from 'react'

function Overview(props){
    return(
        <div className = 'Overview'>
            <h1 className = 'overview 1'>Books: {props.books}</h1>
            <h1 className = 'overview 2'>Completed Books: {props.read}</h1>
            <h1 className = 'overview 4'>Total Pages: {props.totalPages}</h1>
            <h1 className = 'overview 3'>Books Not Read: {props.booksNotRead}</h1>
        </div>
    )
}

export default Overview