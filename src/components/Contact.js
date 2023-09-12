import React, { useState } from "react";
import { validateEmail } from "../../src/utils/helpers"; // import this to check the email address
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap for styling
import "../App.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // if-else statment meesage cannot be blank and makesure enter valid email
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message) {
      alert("Message cannot be blank");
      return;
    }
    if (validateEmail(email)) {
      //in able to meet the validate email  look at my utils folder
      alert("Form Submitted");
    } else {
      alert("Invalid Email");
    }
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ marginTop: "50px" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1 className="mb-4 justify-content-center">Contact Info</h1>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        {/* Messages */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            rows="7"
          ></textarea>
        </div>

        {/* BUTTON for submit */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
