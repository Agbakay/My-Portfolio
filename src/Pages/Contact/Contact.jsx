import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
  });

  // Handle changes to form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill out all fields.",
        isError: true,
      });
      return;
    }

    // Clear any previous status
    setFormStatus({ message: "Sending message...", isError: false });

    // Send data to a back-end API endpoint
    try {
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          message: "Message sent successfully!",
          isError: false,
        });
        // Clear the form after a successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setFormStatus({
          message: `Error: ${errorData.error}`,
          isError: true,
        });
      }
    } catch (error) {
      setFormStatus({
        message: "Failed to send message. Please try again.",
        isError: true,
      });
    }
  };

  return (
    <div className="lg:px-[8%] w-full px-5 ">
      <div className="flex items-center justify-center h-[600px] ">
        <h1 className="text-7xl text-black font-semibold">Get In Touch!</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="text-black pb-20 flex flex-col gap-8"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="WHAT'S YOUR NAME?"
            className="border-b-1 px-3 h-16 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="WHATS YOUR EMAIL?"
            className="border-b-1 px-3 h-16 focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            cols={6}
            rows={9}
            className="border-b-1 w-full px-3  focus:outline-none"
            placeholder="ENTER YOUR MESSAGE"
          ></textarea>

          <button type="submit" className="btn-main w-fit">
            Send Message <i class="fa-solid fa-arrow-right icon-dark"></i>
          </button>

          {formStatus.message && (
            <p
              className={`mt-4 text-center ${
                formStatus.isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
