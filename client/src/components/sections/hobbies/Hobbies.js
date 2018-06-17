import React from 'react'
import './Hobbies.css'

export default ({ hobbies }) => (
    <ul className="hobbies-list" >
       { hobbies.map( (hobbie, i) => (
        <li key={`hobbie-${i}`}>
            <i className={`fas fa-${hobbie.icon}`}></i> <span>{hobbie.type}</span>
        </li>
       ) ) } 
    </ul>
)
