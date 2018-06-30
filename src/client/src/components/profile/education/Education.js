import React from 'react'
import './Education.css'

export default ({ schools }) => (
    <ul className="school-list">{
        schools.map( (schoolData, i) => 
            (
                <li key={`school-${i}`}>
                    <h4>{schoolData.schoolName}</h4>
                    <b>{schoolData.date}</b>
                    <p>{schoolData.description}</p>
                </li>
            )
        )
    }</ul>
)
