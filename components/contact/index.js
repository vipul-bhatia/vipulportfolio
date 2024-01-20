"use client"
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { db } from '../firebase/config';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    // Your form submission logic here
    if (submissionStatus !== "success") {
      const { name, email, message } = formData;
      if (name !== "" && email !== "" && message !== "") {
        try {
          await db.collection('DD_email_notify').add({ name, email,message });
          setSubmissionStatus("Successefully sended message");
          setTimeout(() => {
            setSubmissionStatus(null);
          }, [10000]);
          setFormData({
            name: "",
            email: "",
            message: ""
          });
          setError('');

      } catch (error) {
          console.error('Error adding email: ', error);
      }
      } else {
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null);
        }, [10000]);
      }
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <form className="mt-6 mb-10 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Message"
              style={{ backgroundColor: "#7b89a8" }}
              className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-white focus:ring-white text-white"
            ></textarea>
          </div>
          <div className="mt-4">
                            <button
                                type="submit"
                                className="joinButton w-full text-xl text-lightblack bg-blue-600 font-semibold text-center rounded-full bg-blue hover:bg-btnblue py-4"
                            >
                                Join!
                            </button>
                        </div>
                        <p className="text-center mt-2 opacity-300 text-sm">{submissionStatus}</p>

                        {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
