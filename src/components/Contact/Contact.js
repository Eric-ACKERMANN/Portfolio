import React from "react";
import "./index.css";

export default function({
  handleSubmit,
  setName,
  setEmail,
  setMessage,
  emailValue,
  nameValue,
  messageValue
}) {
  return (
    <div className="container contact">
      <h2>Contact</h2>
      <form onSubmit={() => handleSubmit()}>
        <input
          placeholder="Your Name"
          type="text"
          name="name"
          value={nameValue}
          onChange={setName}
        />
        <input
          placeholder="Your mail"
          type="Email"
          name="email"
          value={emailValue}
          onChange={setEmail}
        />
        <textarea
          placeholder="Tapez votre message ici..."
          type="text"
          name="message"
          value={messageValue}
          onChange={setMessage}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
