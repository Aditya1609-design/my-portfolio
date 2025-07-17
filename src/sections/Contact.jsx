import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "emailjs-com";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("❌ Oops! Something went wrong."));
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        
        <div className="w-full md:w-1/2 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/1fcb3dbf-d766-4761-a4f5-7fd7f5dc540d/BCMWLrLAGE.lottie"
            loop
            autoplay
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
          />
        </div>

       
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-400 mb-6">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 focus:outline-none focus:border-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 focus:outline-none focus:border-indigo-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 focus:outline-none focus:border-indigo-400"
            />

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



