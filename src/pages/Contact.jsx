import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Our Nursery",
      details: ["123 Green Street", "Mirpur, Dhaka 1216", "Bangladesh"],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Call Us",
      details: ["+880 1711 933011", "+880 2 55001234"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["support@greennest.com", "sales@greennest.com"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Opening Hours",
      details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
      color: "from-emerald-600 to-green-500",
    },
  ];
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      color: "hover:bg-blue-600",
      link: "#",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      color: "hover:bg-pink-600",
      link: "#",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      color: "hover:bg-sky-500",
      link: "#",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      color: "hover:bg-blue-700",
      link: "#",
    },
  ];
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Please enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-9 sm:my-13 lg:w-[97%] lg:mb-29">
      <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-9 md:text-5xl lg:mb-11">
        Get in <span className="text-green-600">Touch</span>
      </h1>
      <p className="mb-7 md:mb-9 xl:mb-11 md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
        Have questions about plants? Need care advice? We're here to help! Reach
        out to our plant experts anytime.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 mb-10 sm:mb-11 md:mb-13 lg:mb-15">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-7">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className={`bg-linear-to-br ${info.color} rounded-2xl p-6 text-white shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-white/90">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-up"
            className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 mt-5 lg:mt-7"
          >
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Follow Our Green Journey
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`${social.color} bg-gray-100 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:text-white transform hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Follow us for plant care tips, new arrivals, and community
              stories.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl shadow-lg border border-green-100 p-8"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our plant experts will respond within
              24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-green-200"
                    } focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all`}
                    placeholder="Enter Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-500" : "border-green-200"
                    } focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all`}
                    placeholder="your@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.subject ? "border-red-500" : "border-green-200"
                  } focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? "border-red-500" : "border-green-200"
                  } focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell us about your plant care needs or any questions you have..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-linear-to-r from-green-500 to-green-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-80 cursor-not-allowed"
                    : "hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <IoIosSend className="text-xl" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="mt-5 lg:mt-7 bg-[#e7f6e9] rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Quick Questions?
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <p className="font-medium text-gray-800">
                  Do you offer plant consultations?
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Yes! Book a free 15-minute consultation with our experts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-medium text-gray-800">
                  What's your return policy?
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  30-day plant health guarantee on all purchases.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-medium text-gray-800">
                  Do you deliver nationwide?
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Yes, we deliver to all major cities with special plant-safe
                  packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
