import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    emailjs
      .sendForm(
        "service_jwmgcin",
        "template_op46xhh",
        form.current,
        "rD6c3Y0TBfyIxQZGD"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "✅ Message sent successfully!",
          });

          form.current.reset();

          setLoading(false);
        },
        (error) => {
          console.log(error);

          setStatus({
            type: "error",
            message: "❌ Failed to send message. Please try again.",
          });

          setLoading(false);
        }
      );
  };

  return (
    <section
      className="px-2 py-20 sm:px-4"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Contact Me
          </h2>

          <p className="mt-3 text-zinc-400">
            Have an opportunity or project in mind?
            Let's connect.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left Card */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl">

            <div className="space-y-5">

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">

                <FaEnvelope className="mt-1 text-sky-400 text-lg" />

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:sakthivelrohith1975@gmail.com"
                    className="text-zinc-400 hover:text-sky-400 transition"
                  >
                    sakthivelrohith1975@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">

                <FaPhoneAlt className="mt-1 text-sky-400 text-lg" />

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Phone
                  </h3>

                  <a
                    href="tel:+918428045555"
                    className="text-zinc-400 hover:text-sky-400 transition"
                  >
                    +91 8428045555
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">

                <FaMapMarkerAlt className="mt-1 text-sky-400 text-lg" />

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Location
                  </h3>

                  <p className="text-zinc-400">
                    Coimbatore, Tamil Nadu, India
                  </p>

                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/Rohith-S-23"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-zinc-200 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rohiith-23-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-zinc-200 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl"
          >
                        <div className="grid gap-4">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-sky-500 placeholder:text-zinc-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-sky-500 placeholder:text-zinc-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-sky-500 placeholder:text-zinc-500"
              ></textarea>

              {status.message && (
                <div
                  className={`rounded-xl p-3 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`rounded-2xl px-4 py-3 font-medium text-white transition duration-300 ${
                  loading
                    ? "cursor-not-allowed bg-sky-400"
                    : "bg-sky-600 hover:bg-sky-500 hover:scale-[1.02]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;