import { useState } from "react";
import Seo from "../components/Seo.jsx";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WHATSAPP_URL =
  "https://wa.me/919889733153?text=" +
  encodeURIComponent(
    "Hi! I'd like to know more about Shree Ansh Agarbatti products."
  );

const contactInfo = [
  {
    Icon: PlaceOutlinedIcon,
    title: "Address",
    lines: ["Gola Bazar, Gorakhpur,", "Uttar Pradesh 273408, India"],
  },
  {
    Icon: LocalPhoneOutlinedIcon,
    title: "Phone",
    lines: ["+91 98897 33153"],
  },
  {
    Icon: MailOutlineIcon,
    title: "Email",
    lines: ["shreeansh26@gmail.com"],
  },
  {
    Icon: ScheduleOutlinedIcon,
    title: "Working Hours",
    lines: ["Mon - Sat, 9:00 AM - 7:00 PM"],
  },
];

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill out all fields before submitting.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit contact number.");
      setIsLoading(false);
      return;
    }

    try {
      const form = new FormData();
      form.append("access_key", apiKey);
      form.append("subject", "New Contact Form Submission");
      form.append("from_name", "Shree Ansh Agarbatti Co.");
      form.append("to_name", "Shree Ansh Agarbatti Co.");
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid JSON response from the server.");
      }

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Error: " + data.message);
      }
    } catch (err) {
      setError("An error occurred while submitting the form. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-10 lg:px-14">
      <Seo
        title="Contact Us | Buy Agarbatti in Gorakhpur or Become a Distributor | Shree Ansh Agarbatti"
        description="Contact Shree Ansh Agarbatti at Gola Bazar, Gorakhpur for orders, wholesale pricing and distribution. Call +91 98897 33153 or send us a message."
        path="/contact-us"
      />
      <h1 className="font-display text-5xl font-medium tracking-tight text-stone-900 sm:text-6xl">
        Get in touch
      </h1>
      <p className="mt-3 max-w-xl text-stone-600">
        For orders, distribution enquiries or anything else, we&apos;d love to
        hear from you.
      </p>

      <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl shadow-sm ring-1 ring-stone-200 lg:grid-cols-12">
        {/* Info panel */}
        <div className="bg-smoke-950 p-8 text-stone-200 sm:p-10 lg:col-span-5">
          <h2 className="font-display text-3xl font-semibold text-stone-50">
            Contact information
          </h2>
          <p className="mt-2 text-sm text-stone-400">
            Reach us directly, or use the form.
          </p>
          <ul className="mt-10 space-y-8">
            {contactInfo.map(({ Icon, title, lines }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-ember">
                  <Icon fontSize="small" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-stone-100">
                    {title}
                  </div>
                  {lines.map((line) => (
                    <div key={line} className="text-sm text-stone-400">
                      {line}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white p-8 sm:p-10 lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-stone-700"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-stone-700"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                autoComplete="tel"
              />
              <span className="text-xs text-stone-400">
                10-digit mobile number
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-stone-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-stone-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm font-medium text-brand" role="alert">
              {error}
            </p>
          )}
          {isSubmitted && (
            <p
              className="mt-4 text-sm font-medium text-emerald-700"
              role="status"
            >
              Thank you! Your message has been sent. We&apos;ll get back to you
              soon.
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Sending…" : "Send Message"}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1fb356] active:scale-[0.98]"
            >
              <WhatsAppIcon fontSize="small" />
              Chat on WhatsApp
            </a>
          </div>
        </form>
      </div>

      {/* Map */}
      <div className="mt-12 overflow-hidden rounded-2xl shadow-sm ring-1 ring-stone-200">
        <iframe
          title="Shree Ansh Agarbatti, Gola Bazar, Gorakhpur"
          src="https://maps.google.com/maps?q=Gola%20Bazar%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273408&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-[360px] w-full border-0 grayscale transition duration-700 hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ContactUs;
