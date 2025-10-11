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
    formData.append("access_key", "9251e827-d406-4aca-ad3c-a015aa2dcb3a");

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
    <section id="contact" className="relative py-16 md:py-24 bg-[#F7F9FC] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-1/2 lg:max-w-md mx-auto text-center"
        >
          <div className="flex justify-center w-full mb-8">
            <div className="w-20 h-20 bg-[#0A0E2A] rounded-full shadow-2xl flex items-center justify-center">
              <Mail className="h-10 w-10 text-[#B69DF8]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#0A0E2A] mb-4">Get in Touch with Opti-mode Diagnostics</h2>
          <p className="text-lg text-gray-600 mb-8">
            Reach out with your queries or collaboration ideas. Whether you're a patient, researcher, or partner — we're here to help.
          </p>

          <div className="w-full grid grid-cols-1 gap-6 text-center sm:text-left">
            <div className="p-6 bg-white rounded-xl border-2 border-[#E5E7EB] hover:border-[#9F7AEA] transition-all duration-300 relative shadow-lg hover:shadow-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center relative"
              >
                <div className="p-3 bg-[#F5F3FF] rounded-full mb-4">
                  <Globe className="h-6 w-6 text-[#7F56D9]" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -right-2 -top-2 bg-[#7F56D9] rounded-full p-1.5 flex items-center justify-center border-2 border-white shadow-md"
                >
                  <Copy className="h-4 w-4 text-white" onClick={() => {
                    navigator.clipboard.writeText('info@optimode.io');
                    toast.success('Email copied to clipboard!');
                  }} />
                </motion.div>
              </motion.div>
              <p className="text-gray-700 whitespace-nowrap text-sm sm:text-base font-medium text-center">info@optimode.io</p>
            </div>

            <div className="p-6 bg-white rounded-xl border-2 border-[#E5E7EB] hover:border-[#9F7AEA] transition-all duration-300 relative shadow-lg hover:shadow-xl">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
                <div className="p-3 bg-[#F5F3FF] rounded-full mb-4">
                  <MapIcon className="h-6 w-6 text-[#7F56D9]" />
                </div>
              </motion.div>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Research & Innovation Park, FITT, IIT Delhi, New Delhi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-1/2 max-w-lg mx-auto"
        >
          <form onSubmit={onSubmit} className="w-full min-w-[300px] max-w-md mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#E5E7EB] hover:border-[#9F7AEA] transition-colors duration-300">
            {/* Optional Subject */}
            <input type="hidden" name="subject" value="New Contact Submission from Opti-mode Diagnostics Site" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B69DF8] focus:border-[#B69DF8] transition-all duration-200" 
                  />
                  {/* <label htmlFor="name" className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:text-sm peer-focus:top-2 peer-focus:-translate-y-1/2">Your Name</label> */}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B69DF8] focus:border-[#B69DF8] transition-all duration-200" 
                  />
                  {/* <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:text-sm peer-focus:top-2 peer-focus:-translate-y-1/2">Email Address</label> */}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <div className="relative">
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B69DF8] focus:border-[#B69DF8] transition-all duration-200"
                ></textarea>
                {/* <label htmlFor="message" className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:text-sm peer-focus:top-2 peer-focus:-translate-y-1/2">Your Message</label> */}
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#7F56D9] to-[#9F7AEA] text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:shadow-[#9F7AEA]/30 transition-all duration-300 mx-auto block border-2 border-transparent hover:border-white/20"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
