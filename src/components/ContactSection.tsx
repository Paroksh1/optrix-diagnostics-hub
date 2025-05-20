import React, { useState, useRef } from 'react';
import { Mail, Globe, Copy, MapPin as MapIcon } from 'lucide-react';
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const ref = useRef(null);
  const [inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "aa282f5c-f438-48da-aceb-2864014cc590");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Thank you for your message. We'll be in touch soon!",
          {
            duration: 4000,
            position: 'top-center',
          }
        );
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F7F9FC]" ref={ref}>
      {/* <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0, Z" fill="#0A0E2A" opacity="0.02" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="h-full w-full text-gray-100" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,133.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0A0E2A] rounded-full mb-8 shadow-2xl">
            <Mail className="h-10 w-10 text-[#B69DF8]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0A0E2A] mb-4">Get in Touch with Opti-mode Diagnostics</h2>
          <p className="text-lg text-gray-600 mb-8">
            Reach out with your queries or collaboration ideas. Whether you're a patient, researcher, or partner — we're here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center relative"
              >
                <Globe className="h-6 w-6 text-[#0A0E2A] mb-2" />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -right-2 -top-2 bg-[#B69DF8] rounded-full p-1.5 flex items-center justify-center"
                >
                  <Copy className="h-4 w-4 text-white" onClick={() => navigator.clipboard.writeText('optimode.diagnostics@gmail.com')} />
                </motion.div>
              </motion.div>
              <p className="text-gray-700 break-words">info@optimode.io</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
                <MapIcon className="h-6 w-6 text-[#0A0E2A] mb-2" />
              </motion.div>
              <p className="text-gray-700">Lab no 3, Second Floor, Synergy Building, IIT Delhi, New Delhi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={onSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-xl">
            {/* Optional Subject */}
            <input type="hidden" name="subject" value="New Contact Submission from Opti-mode Diagnostics Site" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">Your Name</label>
                <div className="relative">
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B69DF8] focus:border-[#B69DF8] transition-all duration-200 peer placeholder-transparent" placeholder=" " />
                  <label htmlFor="name" className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:text-sm peer-focus:top-2 peer-focus:-translate-y-1/2">Your Name</label>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B69DF8] focus:border-[#B69DF8] transition-all duration-200 peer placeholder-transparent" placeholder=" " />
                  <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:text-sm peer-focus:top-2 peer-focus:-translate-y-1/2">Email Address</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <div className="relative">
                <textarea id="message" name="message" rows={5} required minLength={10} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B69DF8] focus:border-[#B69DF8] transition-all duration-200 peer placeholder-transparent" placeholder=" " />
                <label htmlFor="message" className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:text-sm peer-focus:top-2 peer-focus:-translate-y-1/2">Your Message</label>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="px-8 py-4 bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
