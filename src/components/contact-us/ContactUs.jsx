"use client";
import React from "react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.phone) {
      formErrors.phone = "Phone No required";
    } else if (
      !/^(\+?\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(
        formData.phone
      )
    ) {
      formErrors.phone = "Phone is invalid";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <div>
      {submittedData && (
        <p className="text-lg font-roboto-serif font-medium mb-5">
          Thank you for Contact US
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            className="bg-white p-2 rounded-lg text-lg border w-full border-slate-400 placeholder-gray-500 placeholder:font-roboto-serif"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Please your name"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div className="mb-5">
          <input
            className="bg-white p-2 rounded-lg text-lg border w-full border-slate-400  placeholder-gray-500 placeholder:font-roboto-serif"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Please your phone"
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <div className="mb-5">
          <input
            className="bg-white p-2 rounded-lg text-lg border w-full border-slate-400  placeholder-gray-500 placeholder:font-roboto-serif"
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please your mail"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="mb-5">
          <textarea
            rows="5"
            className="bg-white p-2 text-lg rounded-lg border w-full border-slate-400  placeholder-gray-500 placeholder:font-roboto-serif"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please your message"
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        <button
          className="bg-white p-2 rounded-lg border w-full border-slate-400 font-roboto-serif text-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
