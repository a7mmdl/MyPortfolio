"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_40okanh',
        'template_kv05af5',
        {
          from_name: form.name,
          to_name: 'Ahmed Rafi', // Change this to your recipient's name
          from_email: form.email,
          to_email: '0423rafi@gmail.com', // Change this to your recipient's email
          message: form.message,
        },
        'gOfsl7GVLG_O7917R'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. We will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-20 mt-18 w-full z-[20]"
      id="contactme"
      >
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-800 py-20">
        Contact me
      </h1> 
      <div className="max-w-md w-full bg-transparent shadow-md rounded-lg overflow-hidden border border-[#2A0E61]">
  <form onSubmit={handleSubmit} className="p-6">
    <div className="mb-6">
      <label htmlFor="name" className="block text-white font-semibold text-lg mb-2">Name</label>
      <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none bg-transparent focus:border-purple-900 focus:ring-purple-900" placeholder="Your Name" required />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-white font-semibold text-lg mb-2">Email</label>
      <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none bg-transparent focus:border-purple-900 focus:ring-purple-900" placeholder="Your Email" required />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-white font-semibold text-lg mb-2">Message</label>
      <textarea name="message" id="message" value={form.message} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none bg-transparent focus:border-purple-900 focus:ring-purple-900" placeholder="Your Message" rows={4} required></textarea>
    </div>
    <button
      type="submit"
      className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg w-[180px] transition duration-300 ease-in-out"
    >
      {loading ? 'Sending...' : 'Send Message'}
    </button>
  </form>
</div>


    </motion.div>
  );
};

export default Contact;
