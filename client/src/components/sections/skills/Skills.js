import React from 'react'
import './Skills.css'

export default ({ skillSet }) => (
    <ul className="list-of-skills-categories" >
        {skillSet.map( (skillGroup, i) => (
            <li key={`skillGroup-${i}`}>
                <h4>{skillGroup.category}</h4>
                <ul className="list-of-skills">
                    {skillGroup.skills.map( (skill,j) => (
                        <li key={`skill-${i}${j}`}>
                            <span>{skill.skillType}</span>
                            <progress value={skill.level} max="10"></progress>
                        </li>
                    ) )}
                </ul>
            </li>
        ) )}
    </ul>
)
