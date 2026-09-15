import { useEffect, useRef, useState } from "react";
import "./ChatBot.css";

const botReplies = {
  hello:
    "Hello! 👋 Welcome. I'm here to help you learn more about our treatment and rehabilitation services.",

  detox:
    "Drug detox is the first stage of recovery. It helps the body safely manage withdrawal while preparing for further treatment and rehabilitation.",

  rehab:
    "Our rehabilitation programs can include counseling, behavioral support, recovery planning, family support, and relapse-prevention guidance.",

  treatment:
    "Treatment is tailored to each person's needs. It may include detox support, counseling, therapy, rehabilitation, and continuing recovery support.",

  counseling:
    "Counseling can help individuals understand the causes of addiction, develop healthy coping strategies, and work toward long-term recovery.",

  program:
    "We can provide information about detox, residential rehabilitation, counseling, recovery support, and relapse-prevention programs.",

  cost:
    "Treatment costs depend on the program, duration, and individual requirements. Please contact our team for current pricing and available options.",

  appointment:
    "I'd be happy to help you arrange an appointment. Please use the 'Book an Appointment' option below or contact our support team.",

  location:
    "Please contact our support team for our current location, directions, and admission information.",

  contact:
    "You can contact our support team for confidential information about treatment, admissions, appointments, and rehabilitation programs. Call - +91-6283794604",

  emergency:
    "If someone is experiencing a medical emergency, severe withdrawal symptoms, loss of consciousness, difficulty breathing, or an immediate risk of harm, please contact your local emergency medical service immediately.",

  thanks:
    "You're welcome! 😊 I'm here if you have any other questions.",

  default:
    "I'm sorry, I didn't quite understand that. You can ask me about detox, rehabilitation, treatment, counseling, programs, cost, appointments, or contact information."
};


// Find a suitable predefined answer
function getBotReply(message) {
  const text = message.toLowerCase().trim();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return botReplies.hello;
  }

  if (
    text.includes("detox") ||
    text.includes("withdrawal")
  ) {
    return botReplies.detox;
  }

  if (
    text.includes("rehab") ||
    text.includes("rehabilitation")
  ) {
    return botReplies.rehab;
  }

  if (
    text.includes("treatment") ||
    text.includes("therapy")
  ) {
    return botReplies.treatment;
  }

  if (
    text.includes("counsel") ||
    text.includes("therapist")
  ) {
    return botReplies.counseling;
  }

  if (
    text.includes("program") ||
    text.includes("service")
  ) {
    return botReplies.program;
  }

  if (
    text.includes("cost") ||
    text.includes("price") ||
    text.includes("fee") ||
    text.includes("charge")
  ) {
    return botReplies.cost;
  }

  if (
    text.includes("appointment") ||
    text.includes("book") ||
    text.includes("admission")
  ) {
    return botReplies.appointment;
  }

  if (
    text.includes("location") ||
    text.includes("address") ||
    text.includes("where")
  ) {
    return botReplies.location;
  }

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("number")
  ) {
    return botReplies.contact;
  }

  if (
    text.includes("emergency") ||
    text.includes("overdose") ||
    text.includes("unconscious") ||
    text.includes("can't breathe")
  ) {
    return botReplies.emergency;
  }

  if (
    text.includes("thank") ||
    text.includes("thanks")
  ) {
    return botReplies.thanks;
  }

  return botReplies.default;
}


function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 How can I help you today?"
    }
  ]);

  const messagesEndRef = useRef(null);


  // Automatically show greeting popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  // Automatically scroll to newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isTyping]);


  // Send message
  const sendMessage = (messageText = input) => {
    const message = messageText.trim();

    if (!message) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message
    };

    setMessages((previous) => [
      ...previous,
      userMessage
    ]);

    setInput("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const reply = getBotReply(message);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: reply
        }
      ]);

      setIsTyping(false);
    }, 800);
  };


  // Handle Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };


  // Quick question
  const askQuestion = (question) => {
    sendMessage(question);
  };


  return (
    <>
      {/* Automatic greeting popup */}
      {showPopup && !isOpen && (
        <div className="chat-popup">

          <button
            className="chat-popup-close"
            onClick={() => setShowPopup(false)}
            aria-label="Close popup"
          >
            ×
          </button>

          <div className="chat-popup-icon">
            🤖
          </div>

          <div>
            <strong>Need Help?</strong>

            <p>
              Hi! 👋 Do you have questions about
              our treatment and rehabilitation services?
            </p>
          </div>

          <button
            className="chat-popup-button"
            onClick={() => {
              setIsOpen(true);
              setShowPopup(false);
            }}
          >
            Start Chat
          </button>

        </div>
      )}


      {/* Floating chat button */}
      <button
        className="chat-button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        aria-label="Open chat"
      >
        {isOpen ? "×" : "💬"}
      </button>


      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">

          {/* Header */}
          <div className="chat-header">

            <div className="chat-header-info">

              <div className="chat-avatar">
                🤖
              </div>

              <div>
                <strong>Recovery Support</strong>

                <span>
                  <i></i> Online
                </span>
              </div>

            </div>

            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>

          </div>


          {/* Messages */}
          <div className="chat-body">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${
                  message.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}


            {/* Typing animation */}
            {isTyping && (
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}


            <div ref={messagesEndRef}></div>

          </div>


          {/* Quick questions */}
          <div className="quick-questions">

            <button
              onClick={() =>
                askQuestion("What is drug detox?")
              }
            >
              Drug Detox
            </button>

            <button
              onClick={() =>
                askQuestion("What rehabilitation programs do you offer?")
              }
            >
              Rehab Programs
            </button>

            <button
              onClick={() =>
                askQuestion("I want to book an appointment")
              }
            >
              Appointment
            </button>

            <button
              onClick={() =>
                askQuestion("How can I contact you?")
              }
            >
              Contact
            </button>

          </div>


          {/* Footer */}
          <div className="chat-footer">

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              aria-label="Type your message"
            />

            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default ChatBot;
