import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {
    console.log("handleChange");
  };

  const handleFocus = () => {
    console.log("handleFocus");
  };

  const handleBlur = () => {
    console.log("handleBlur");
  };

  // const handleSubmit = () => {
  //   console.log("handleSubmit");
  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       {
  //         // フォームから必要な情報を入れる
  //         from_name: "",
  //         to_name: "JavaScript Mastery",
  //         from_email: "",
  //         to_email: "sujata@jsmastery.pro",
  //         message: "",
  //       },
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(() => {
  //       setIsLoading(false);
  //       // TODO showmessage
  //       // TODO フォームのクリア
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log(error);
  //       // TODO showmessage
  //       // TODO フォームのクリア
  //     });
  // };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      Contact
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        {/* TODO formを必要な分だけ作っとく */}

        <form>
          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"></div>
    </section>
  );
};

export default Contact;
