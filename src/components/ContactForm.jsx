import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const onSubmit = (data) => {
    console.log(data);
    // ここでフォームのデータを処理する（例：APIに送信）

    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Karukan",
          from_email: data.email,
          to_email: import.meta.env.VITE_APP_CONTACT_MAIL,
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Success: ありがとうございます！後ほどご連絡します！");
          reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Error: メッセージ送信時にエラーが起こりました。");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-7 mt-12 glassmorphism px-5 py-4 lg:w-1/2  h-auto "
    >
      <div>
        <label htmlFor="name" className="text-black-500 font-semibold">
          名前 <span className="ml-2 text-sm text-slate-700">Name</span>
        </label>
        <input
          id="name"
          className="input"
          minLength={2}
          maxLength={50}
          {...register("name", {
            required: "名前は必須です",
            minLength: {
              value: 2,
              message: "名前は2文字以上である必要があります",
            },
            maxLength: {
              value: 50,
              message: "名前は50文字以下である必要があります",
            },
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-black-500 font-semibold">
          メールアドレス{" "}
          <span className=" ml-2 text-sm text-slate-700">Email</span>
        </label>
        <input
          id="email"
          className="input"
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "無効なメールアドレスです",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-black-500 font-semibold">
          メッセージ<span className="ml-2 text-sm text-slate-700">Message</span>
        </label>
        <textarea
          id="message"
          className="textarea h-36"
          {...register("message", {
            required: "メッセージは必須です",
            maxLength: {
              value: 1000,
              message: "メッセージは1000文字以下である必要があります",
            },
          })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="btn">
        送信
      </button>
    </form>
  );
};

export default ContactForm;
