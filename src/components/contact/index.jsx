"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [phno, setPn] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🧩 Validation
    if (!name || !email || !phno || !message) {
      showToast("⚠️ Please fill in all fields!", "yellow");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("⚠️ Please enter a valid email!", "red");
      return;
    }

    if (phno.length < 10) {
      showToast("⚠️ Please enter a valid phone number!", "red");
      return;
    }

    // ✅ Proceed if all fields valid
    showToast("📤 Sending...", "yellow");

    try {
      const res = await fetch("https://52.62.35.240:5002/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phno, email, message }),
      });

      const data = await res.json();
      showToast("✅ Message successfully sent!", "green");

      setName("");
      setPn("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      showToast("❌ Failed to send message. Try again later.", "red");
    }
  };

  // ✅ Reusable toast function
  const showToast = (msg, color) => {
    setStatus({ msg, color });
    setShowStatus(true);
    setTimeout(() => setShowStatus(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-md text-white mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 rounded-md font-semibold text-white outline-1 bg-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 rounded-md text-white outline-1 bg-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9+]/g, "");
                setPn(e.target.value);
              }}
              value={phno}
              placeholder="+91"
              className="w-full p-3 rounded-md text-white outline-1 bg-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Your message..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-md text-white outline-1 bg-gray-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-3xl font-semibold text-white border-2   
             hover:bg-linear-to-r from-purple-600 to-blue-500 
             hover:from-purple-700 hover:to-blue-600 transition-all duration-300 hover:border-transparent"
          >
            Send Message
          </button>
        </form>
 
        <AnimatePresence>
          {showStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className={`mt-6 text-center px-6 py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
                status.color === "green"
                  ? "bg-green-600"
                  : status.color === "red"
                  ? "bg-red-600"
                  : "bg-violet-700"
              }`}
            >
              {status.msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-black mt-14 mb-3"></div>
      <Header />
    </div>
  );
};

export default Contact;
