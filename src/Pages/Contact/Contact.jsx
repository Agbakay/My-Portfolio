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
    <div className="lg:px-[10%] w-full px-5">
      <div className="flex items-center justify-center h-[300px] lg:h-[400px]">
        <h1 className="text-7xl text-black font-semibold">Get In Touch!</h1>
      </div>

      <div className="my-10">
        <div className=" m-auto flex items-center justify-center">
          <div className="col mb-30 block">
            {/*  */}
            {/* social media */}

            <div className="social">
              <a href="">
                <i className="fa-brands fa-facebook text-2xl hover:scale-[1.2] transition delay-75 icon-dark mb-10"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin text-2xl hover:scale-[1.2] transition delay-75 icon-dark mb-10"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-x-twitter text-2xl hover:scale-[1.2] transition delay-75 icon-dark mb-10"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram text-2xl hover:scale-[1.2] transition delay-75 icon-dark mb-10"></i>
              </a>
            </div>
            <p className="ml-10 text-center font-semibold text-xl">
              Follow us on socail Media
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-3xl font-semibold">Send us a message</h2>
        <div className="bg-orange-300 h-[3px] w-[50px] mb-10"></div>
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
