import React, { Component } from 'react'
import './GeneralSection.css'

export default class GeneralSection extends Component {
  render() {
    return (
        <section className={`section ${this.props.sectionClass}`}>
            <div className="inner-container">
                <h3><i className={`fas fa-${this.props.icon}`}></i> {this.props.headerCopy}</h3>
                {this.props.children}
            </div>
        </section>
    )
  }
}
