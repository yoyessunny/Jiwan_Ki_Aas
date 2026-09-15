import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./WhatsApp.css";

function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your WhatsApp number
  // Include country code, without + or spaces
  const phoneNumber = "916283794604";

  const message = encodeURIComponent(
    "Hello, I would like to know more about your rehabilitation and de-addiction services."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-container">

      {/* Popup */}
      {isOpen && (
        <div className="whatsapp-popup">

          <div className="whatsapp-popup__header">
            <div>
              <FaWhatsapp />
              <span>WhatsApp</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp popup"
            >
              <FaTimes />
            </button>
          </div>

          <div className="whatsapp-popup__body">
            <p>
              👋 Hello! How can we help you?
            </p>

            <p>
              Our team is available to answer your questions about
              treatment, rehabilitation and counseling.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-chat-button"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp"
      >
        {isOpen ? <FaTimes /> : <FaWhatsapp />}
      </button>

    </div>
  );
}

export default WhatsApp;