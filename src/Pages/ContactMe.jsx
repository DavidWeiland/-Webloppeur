import React, { useRef } from "react";
import emailjs from '@emailjs/browser'

export default function ContactMe() {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    form.current.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name='user_name' />
      <label>Email</label>
      <input type='email' name='user_email' />
      <label>Message</label>
      <textarea name='message'/>
      <input type='submit' value='send'/>
    </form>
  )
}