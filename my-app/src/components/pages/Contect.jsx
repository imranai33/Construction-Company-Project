import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/send-email", 
        formData
      );

      setSuccess(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Not Send Email");
      console.error(error.response ? error.response.data : error.message);
    }

    setLoading(false);
  };

  return (
    <div>
  
      <div className="bg-[#404040] h-[220px] flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Contact Us
        </h1>
      </div>

  
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#404040] text-white px-6 py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && <p className="text-green-600">{success}</p>}
            </form>
          </div>

          {/* RIGHT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">CONTACT INFO</h2>
            <p>PowerX Exhibition Stand Fitting and Execution LLC</p>
            <p>Dubai Investment Park First</p>
            <p>Email: info@infya.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
