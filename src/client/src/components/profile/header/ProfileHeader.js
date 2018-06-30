import React from 'react'
import KeyValue from '../../UI/KeyValue'
import './ProfileHeader.css'

export default ({ basicInformation }) => {
  const { firstName, profesionalTitle, livesIn, email, phone } = basicInformation;

  return (
    <section id="personal-basics">
      <div className="avatar">
        <img src="https://avatarfiles.alphacoders.com/821/thumb-82166.png" alt="avatar" />
      </div>
      <div className="basic-info">
        <KeyValue options={{ htmlClass: 'h1-size', label: 'Name', data: firstName }} />
        <KeyValue options={{ htmlClass: 'h2-size', label: 'Profession', data: profesionalTitle }} />
        <hr/>
      </div>
      <div className="aditional-info">
        <KeyValue options={{ htmlClass: 'normal-size', label: 'Lives In', data: livesIn, icon: 'map-marker' }} />
        <KeyValue options={{ htmlClass: 'normal-size', label: 'E-Mail', data: email, icon: 'envelope' }} />
        <KeyValue options={{ htmlClass: 'normal-size', label: 'Phone', data: phone, icon: 'mobile-alt' }} />
      </div>
    </section>
  )
}
