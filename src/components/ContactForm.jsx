import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSucess, setIsSucess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e06286a8-b72d-402b-b7bc-61f82ae6215a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success" : "Error");
  };

  return (
    <div className="ContactForm">
      <form onSubmit={onSubmit}>
        <h2 className="connection-form-heading">Connect With Me</h2>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="input">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="input">
          <label htmlFor="message">Enter Your Message</label>

          <textarea name="message" required></textarea>
        </div>

        <button type="submit">Send Message</button>

        <p className="result">{result}</p>
      </form>
    </div>
  );
}
