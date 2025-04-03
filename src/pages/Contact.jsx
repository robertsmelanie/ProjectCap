import React from 'react'

const Contact = () => {
  return (
    // <div>Contact</div>
<div>
  <div className="title">
    <h1>
      The Mighty Mouser
    </h1>
    <h3>
      A Pet Store Dedicated to the Mighty Barn Cat
    </h3>
  </div>
    {/* Background Image Section-- >
    <div class="container1 container-fluid d-flex justify-content-center align-items-center py-5">
      <div class="container">
      <!-- Maroon Background Section */}
  <div className="containertext p-4 mx-auto">
    <div className="row align-items-center justify-content-center">
      {/* Left Column: Contact Info */}
      <h3 style={{color: 'white'}}>Questions? We’re Here to Help! Contact Us:</h3>
      <div className="col-md-6 text-light text-start p-3">
        {/* <h3>Questions? We’re Here to Help!</h3> */}
        <h5>
          <p>At The Mighty Mouser, we’re passionate about helping you provide the best care for your
            cats.</p>
          <p><strong> Get in Touch:</strong> Fill out the form, and we’ll get back to you as soon as
            possible.</p>
          <p>Whether you have questions about barn cats, need advice on setting up a safe space for
            your working felines, or want to learn more about our products, we’d love to hear from
            you!</p>
        </h5>
        <p><strong>📍 Visit Us:</strong><br /> 237 Harvey Rd <br /> Kingston, TN 37763</p>
        <p><strong>📞 Call or Text:</strong> (865)376-4100</p>
        <p><strong>📧 Email:</strong> admin@barncat.org</p>
        <p><strong>🐾 Follow Us:</strong> Stay connected for tips, special offers, and barn cat success
          stories!</p>
      </div>
      {/* Right Column: Contact Form */}
      {/* <div> */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="form-container p-4 shadow-lg border-dark" style={{maxWidth: 400, width: '100%'}}>
          <form className="quote">
            <div>
              <label htmlFor="name" />
              <br />
              <input type="text" placeholder="Name" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email" />
              <br />
              <input type="email" placeholder="Email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message" />
              <br />
              <textarea name="message" id="message" placeholder="Message" cols={30} rows={10} defaultValue={""} />
            </div>
            <button className="btn-1 btn-primary">Send</button>
            <h3 className="text-center" />
            <br />
          </form></div>
      </div> {/* End Row */}
    </div> {/* End Maroon Background */}
  </div> {/* End Container */}
  {/* End Background Image Section */}
</div>

  )
}

export default Contact;