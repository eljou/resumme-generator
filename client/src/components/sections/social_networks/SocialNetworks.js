import React from 'react'
import './SocialNetworks.css'

export default ({ socialNetworks }) => (
    <ul className="social-networks-list">
       { socialNetworks.map( (network, i) => {
            const iconClass = (network.icon === 'globe') ? `fas fa-${network.icon}` : `fab fa-${network.icon}`
            return (
                <li key={`network-${i}`}>
                    <i className={iconClass}></i> <a href={network.link}>{network.link}</a>
                </li>
            )
       } ) } 
    </ul>
)
