'use client'
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { send } from 'emailjs-com';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  
  const onSubmit = (e) => {
    e.preventDefault();

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value});
  };
  
  // const { register, handleSubmit } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:coltonbport@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`  
  // };

  return (
    <div className="h-screen flex relative flex-col text-center text-white mx-auto justify-evenly items-center px-10 bg-[#0f1221]/90">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col md:px-10 space-y-10">
        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            Let's{" "}
            <span className="text-purple-700">
              talk
            </span>
          </h4>
          <p className="max-w-[400px] mx-auto">
            If you want to get in touch, meet up for coffee or just say hi, drop an email below and I will get back to you soon.
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='from_name'
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='to_name'
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='message'
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type='text'
            name='reply_to'
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        {/* <div className="flex flex-row space-x-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-fit mx-auto space-y-2"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput resize-none"
            />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-500 py-5 px-10 rounded-sm text-white font-bold"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default ContactMe;
