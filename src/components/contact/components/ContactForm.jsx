"use client";

import React from "react";
import { FiPhone, FiClock, FiMapPin } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  // INPUT CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FORM SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent!");
        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Server Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#002b46] w-full py-25 px-5 flex justify-center">
      <div className="w-[90%] lg:w-[80%] flex flex-col md:flex-row gap-12">
        <div className="w-full flex flex-col gap-6">
          <h1 className="md:text-[36px] text-[26px] text-white font-bold leading-tight">
            Ready for the next step?
          </h1>

          <p className="md:text-[22px] text-[16px] text-white">
            Let’s talk about how we can help you with your web design needs.
          </p>
          <div className="w-full md:w-[70%] border-y-2 border-dashed border-gray-500 py-3">
            <div className="flex items-center gap-3 py-3">
              <FiPhone className="text-white text-[22px]" />
              <p className="text-white text-[16px]">+1 234 567 890</p>
            </div>

            <div className="border-t-2 border-dashed border-gray-500"></div>

            <div className="flex items-center gap-3 py-5">
              <FiClock className="text-white text-[22px]" />
              <p className="text-white text-[16px]">Mon - Fri: 9am - 6pm</p>
            </div>

            <div className="border-t-2 border-dashed border-gray-500"></div>

            <div className="flex items-center gap-3 py-3">
              <FiMapPin className="text-white text-[22px]" />
              <p className="text-white text-[16px]">New York, USA</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-1 p-4 md:p-10"
        >
          <label className="text-white text-[18px] font-light italic">
            Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md bg-[#9cabb5]"
            required
          />

          <label className="text-white text-[18px] font-light italic">
            Organization*
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md bg-[#9cabb5]"
            required
          />

          <label className="text-white text-[18px] font-light italic">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md bg-[#9cabb5]"
            required
          />

          <label className="text-white text-[18px] font-light italic">
            Phone*
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md bg-[#9cabb5]"
            required
          />

          <label className="text-white text-[18px] font-light italic">
            Website*
          </label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md bg-[#9cabb5]"
            required
          />

          <label className="text-white text-[18px] font-light italic">
            How can we help you?
          </label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md bg-[#9cabb5]"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="group mt-5 w-full md:w-[40%] lg:w-[30%] flex items-center justify-center gap-2 
          bg-white text-black py-3 rounded-full font-semibold 
          transition-all duration-300 transform
          hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
          >
            {loading ? "Sending..." : "Submit"}
            {!loading && (
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
