import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

// import { Fox } from "../models";
// import useAlert from "../hooks/useAlert";
// import { Alert, Loader } from "../components";
// import { Loader } from "../components/Loader";
import Loader from "../components/Loader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // showAlert({
          //   show: true,
          //   text: "Thank you for your message 😃",
          //   type: "success",
          // });

          setTimeout(() => {
            // hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          // showAlert({
          //   show: true,
          //   text: "I didn't receive your message 😢",
          //   type: "danger",
          // });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="flex-1 min-w-[50%] flex flex-col items-center ">
        <h1 className="head-text blue-gradient_text drop-shadow font-semibold">
          Contact
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
