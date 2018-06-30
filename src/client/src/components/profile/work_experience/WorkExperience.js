import React from 'react'
import './WorkExperience.css'

export default ({ works }) => (
    <ul className="work-list">{works.map( (workData, i) => 
        (
            <li key={`job-${i}`}>
                <h4>{workData.workPlace} / {workData.workTitle}</h4>
                <b>{workData.dateIn} - {workData.dateOut}</b>
                <p>{workData.workDescription}</p>
            </li>
        )
    )}</ul>
)
