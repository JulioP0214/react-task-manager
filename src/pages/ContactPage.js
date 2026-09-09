import React, { useState } from "react";

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");

    setFirstName("");
    setLastName("");
    setEmail("");
    setComments("");
  }

  return (
    <section className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={function (event) {
              setFirstName(event.target.value);
            }}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={function (event) {
              setLastName(event.target.value);
            }}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={function (event) {
              setEmail(event.target.value);
            }}
            required
          />
        </label>

        <label>
          Comments
          <textarea
            value={comments}
            onChange={function (event) {
              setComments(event.target.value);
            }}
            required
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactPage;
