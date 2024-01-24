import React from 'react'

function Card(props) {
    const {title='Login',label1='email',label2='password',btn='submit'}=props
    return (
        <div style={{backgroundColor:"grey"}}>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <label>{label1}</label>
                <input type="text" /><br />
                <label>{label2}</label>
                <input type="text" />
            </div>
            <div>
                <button>{btn}</button>
            </div>
        </div>
    )
}

export default Card