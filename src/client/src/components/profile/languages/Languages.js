import React from 'react'
import './Languages.css'

export default ({ languages }) => {
  return (
    <ul className="list-of-languages" >
      {languages.map( (lang, i) => (
        <li key={`lang-${i}`}>
            <span>{lang.lang}</span>
            <progress value={lang.level} max="10"></progress>
        </li>) )}
    </ul>
  )
}
