import { useState } from "react";
import "./ContactForm.css";
import Reveal from "../Reveal";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSucess, setIsSucess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    emails: "",
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append("access_key", "e06286a8-b72d-402b-b7bc-61f82ae6215a");
    data.append("name", formData.name);
    data.append("emails", formData.emails);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      setResult(result.success ? "Success" : "Error");
      toast("Message send sucessfully");
      setFormData({
        name: "",
        emails: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="ContactForm">
      <form onSubmit={onSubmit}>
        <Reveal>
          <h2 className="connection-form-heading">Connect With Me</h2>
        </Reveal>
        <Reveal>
          <div className="input">
            <label htmlFor="name" id="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="input">
            <label htmlFor="name" id="emails">
              Email
            </label>
            <input
              type="email"
              name="emails"
              id="emails"
              required
              value={formData.emails}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="input">
            <label htmlFor="message" id="message">
              Enter Your Message
            </label>

            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }></textarea>
          </div>
        </Reveal>
        <button type="submit">Send Message</button>
        <Reveal>
          <p className="result">{result}</p>
        </Reveal>
      </form>
    </div>
  );
}
