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
          className="w-full sm:w-1/2 lg:max-w-md mx-auto text-center sm:text-left"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0A0E2A] rounded-full mb-8 shadow-2xl">
            <Mail className="h-10 w-10 text-[#B69DF8]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0A0E2A] mb-4">Get in Touch with Opti-mode Diagnostics</h2>
          <p className="text-lg text-gray-600 mb-8">
            Reach out with your queries or collaboration ideas. Whether you're a patient, researcher, or partner — we're here to help.
          </p>

          <div className="w-full grid grid-cols-1 gap-6 text-center sm:text-left">
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
                  <Copy className="h-4 w-4 text-white" onClick={() => navigator.clipboard.writeText('info@optimode.io')} />
                </motion.div>
              </motion.div>
              <p className="text-gray-700 whitespace-nowrap text-sm sm:text-base">info@optimode.io</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
                <MapIcon className="h-6 w-6 text-[#0A0E2A] mb-2" />
              </motion.div>
              <p className="text-gray-700 text-sm sm:text-base">Lab no 3, Second Floor, Synergy Building, IIT Delhi, New Delhi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-1/2 max-w-lg mx-auto"
        >
          <form onSubmit={onSubmit} className="w-full min-w-[300px] max-w-md mx-auto space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
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
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 mx-auto block"
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
