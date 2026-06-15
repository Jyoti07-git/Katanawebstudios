import "./ContactSection.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
function ContactSection() {
    const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.firstName ||
    !formData.email ||
    !formData.message
  ) {
    alert("Please fill all required fields.");
    return;
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email.");
    return;
  }

  setLoading(true);

  emailjs
    .send(
      "service_37x0v3e",
      "template_ac4sbvy",
      {
        from_name:
          formData.firstName +
          " " +
          formData.lastName,

        from_email: formData.email,

        phone: formData.phone,

        subject: formData.subject,

        message: formData.message,
      },
      "EjC-1Wq3jsjw3Im6w"
    )
    .then(() => {
      alert("Message Sent Successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    })
    .finally(() => {
      setLoading(false);
    });
};
  return (
    <section className="contact-section">

      <div className="container contact-wrapper">

        <div className="contact-left">

          <div className="contact-card">
            <h3>Email Us</h3>
            <p>contact@katanawebstudios.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone Us</h3>
            <p>+91 7656945023</p>
          </div>

          <div className="contact-card">
            <h3>Visit Us</h3>
            <p>India</p>
          </div>

        </div>

        <div className="contact-right">

          <h2>Let's Work Together</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <input
  type="text"
  name="firstName"
  placeholder="First Name"
  value={formData.firstName}
  onChange={handleChange}
/>
<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={formData.lastName}
  onChange={handleChange}
/>

              <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
/>

              <input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
/>

            </div>

            <input
  type="text"
  name="subject"
  placeholder="Subject"
  value={formData.subject}
  onChange={handleChange}
/>
<textarea
  rows="7"
  name="message"
  placeholder="Message"
  value={formData.message}
  onChange={handleChange}
></textarea>

<button type="submit">
  {loading ? "Sending..." : "Send Message"}
</button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;