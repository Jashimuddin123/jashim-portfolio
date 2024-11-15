import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_w8vvgxh";
    const templateId = "template_omhnt8n";
    const publicId = "Y5EcZDi60PuRyCHZ2";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "jashim uddin",
      message: message,
    };

    setIsLoading(true);

    emailjs
      .send(serviceId, templateId, templateParams, publicId)
      .then((response) => {
        console.log("sent successfully ", response);
        setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        setIsLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("email sending error", error);
        setStatus("Failed to send message.");
        toast.error("Failed to send message.");
        setIsLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border  focus:outline-none border-purple-500 rounded-md bg-gray-900focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 h-32 border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
        {status && (
          <p className={`text-center mt-4 ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default EmailSent;
