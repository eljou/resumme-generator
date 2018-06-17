import React from 'react'
import './KeyValue.css'

export default ({ options }) => {
    const { htmlClass, label, data, icon } = options;
    const iconTag = ( icon !== undefined)? <i className={`fas fa-${icon}`}></i>: null;
    const labelTag = ( label !== undefined)? <small>{iconTag} {label} </small>: null; 
    return (
        <div className={`tag ${htmlClass}`}>
            {labelTag}
            <p>{data}</p>
        </div>
    )
}
