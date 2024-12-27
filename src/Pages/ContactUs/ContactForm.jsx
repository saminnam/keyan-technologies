import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFormErrors({});
  };

  const validateForm = () => {
    let errors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "Name is invalid";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.subject)) {
      errors.subject = "Subject is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).every((key) => errors[key] === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios
        .post("http://localhost:3000/api/contacts", formData)
        .then(() => {
          resetForm();
          alert("Form submitted successfully!");
          
        })
        .catch((error) => {
          console.error("Error saving contact", error);
          alert("There was an error submitting the form. Please try again.");
        });
    }
  };

  return (
    <div className="mx-auto  max-w-xl p-8 text-center rounded-lg shadow-lg shadow-gray-400 overflow-hidden bg-white" data-aos="zoom-out-down" data-aos-duration="2000">
      <h3 className="text-2xl font-bold md:text-3xl font-serif">
        Feel free to contact
      </h3>
      <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
        Are you prepared to elevate your business to new heights? Reach out to
        us today.
      </p>
      <div
        className="mx-auto mb-4 max-w-sm text-left"
        name="wf-form-password"
      >
        <div className="main">
          <div className="relative mb-5">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input block h-9 w-full rounded-md border border-black px-3 py-2 pl-4 text-sm text-black"
            />
            <label className="absolute left-2 top-2">
              <span className="transition-all delay-[0ms] left-0">U</span>
              <span className="transition-all delay-[75ms] left-[14px]">s</span>
              <span className="transition-all delay-[150ms] left-[23px]">
                e
              </span>
              <span className="transition-all delay-[225ms] left-[34px]">
                r
              </span>
              <span className="transition-all delay-[300ms] left-[42px]">
                n
              </span>
              <span className="transition-all delay-[375ms] left-[54px]">
                a
              </span>
              <span className="transition-all delay-[450ms] left-[64px]">
                m
              </span>
              <span className="transition-all delay-[525ms] left-[81px]">
                e
              </span>
              <p className="absolute -left-2 -top-4 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                Username
              </p>
            </label>
            {formErrors.name && (
              <p className="text-red-600">{formErrors.name}</p>
            )}
          </div>
          <div className="relative mb-5">
            <input
              required
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input block rounded-md text-sm"
            />
            <label className="absolute left-2 top-2 w-full">
              <span className="transition-all delay-[0ms] left-0">E</span>
              <span className="transition-all delay-[75ms] left-[10px]">m</span>
              <span className="transition-all delay-[150ms] left-[27px]">
                a
              </span>
              <span className="transition-all delay-[225ms] left-[37px]">
                i
              </span>
              <span className="transition-all delay-[300ms] left-[43px]">
                l
              </span>
              <p className="absolute -left-2 -top-3 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                Email Address
              </p>
            </label>
            {formErrors.email && (
              <p className="text-red-600">{formErrors.email}</p>
            )}
          </div>
          <div className="relative mb-5 md:mb-6 lg:mb-8">
            <input
              required
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="input block h-auto w-full rounded-md border border-black px-3 py-2 pl-4 text-sm text-black"
            ></input>
            <label className="absolute left-2 top-2">
              <span className="transition-all delay-[0ms] left-0">S</span>
              <span className="transition-all delay-[75ms] left-[11px]">u</span>
              <span className="transition-all delay-[150ms] left-[22px]">
                b
              </span>
              <span className="transition-all delay-[225ms] left-[34px]">
                j
              </span>
              <span className="transition-all delay-[300ms] left-[40px]">
                e
              </span>
              <span className="transition-all delay-[375ms] left-[51px]">
                c
              </span>
              <span className="transition-all delay-[450ms] left-[61px]">
                t
              </span>
              <p className="absolute -left-2 -top-2 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                Subject
              </p>
            </label>
          </div>
          <div className="relative mb-5 md:mb-6 lg:mb-8">
            <textarea
              required
              name="message"
              maxLength="5000"
              value={formData.message}
              onChange={handleInputChange}
              className="input block h-auto w-full rounded-md border border-black px-3 py-2 pl-4 text-sm text-black"
            ></textarea>
            <label className="absolute left-2 top-2">
              <span className="transition-all delay-[0ms] left-0">M</span>
              <span className="transition-all delay-[75ms] left-[16px]">e</span>
              <span className="transition-all delay-[150ms] left-[26px]">
                s
              </span>
              <span className="transition-all delay-[225ms] left-[34px]">
                s
              </span>
              <span className="transition-all delay-[300ms] left-[42px]">
                a
              </span>
              <span className="transition-all delay-[375ms] left-[52px]">
                g
              </span>
              <span className="transition-all delay-[450ms] left-[63px]">
                e
              </span>
              <p className="absolute -left-2 -top-2 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                Message
              </p>
            </label>
          </div>
          <div className="w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="inline-flex py-3 w-full cursor-pointer items-center justify-center rounded-lg bg-[#006CB7] text-[14px] font-medium text-white transition-all border border-[#006CB7] hover:bg-white hover:text-[#006CB7]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
