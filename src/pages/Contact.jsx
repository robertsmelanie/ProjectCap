import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name:</label><br />
        <input type="text" /><br />
        <label>Email:</label><br />
        <input type="email" /><br />
        <label>Message:</label><br />
        <textarea></textarea><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
