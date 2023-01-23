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
    to_name: 'Colton',
    message: '',
    reply_to: '',
  });
  const [sending, setSending] = useState(false);
  const popup = (<div className={`flex absolute justify-center items-center bg-white w-40 h-24 rounded-md text-black font-medium transition duration-500 translate-y-48`}><p>Email sent!</p></div>)
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    send(
      'default_service',
      'template_mih9b8h',
      toSend,
      'U2DsZM0BB8_3wBWUe',
    )
    .then((res) => {
      console.log('Success!', res.status, res.text);
      setSending(true);
      setToSend({
        from_name: '',
        to_name: 'Colton',
        message: '',
        reply_to: '',
      });
      setTimeout(() => {
        setSending(false);
      }, 3000);
    })
    .catch((err) => {
      console.log('Failed...', err);
    })
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value});
  };

  return (
    <div className="h-screen w-screen flex relative flex-col text-center text-white/80 mx-auto justify-evenly items-center px-10 bg-[#0f1221]/90">
      {sending ? popup : ''}
      
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col md:px-10 space-y-24 w-full">
        <div className="flex flex-col space-y-16">
          <h4 className="text-4xl font-semibold text-center">
            Let's{" "}
            <span className="text-purple-700">
              talk
            </span>
          </h4>
          <p className="max-w-[400px] mx-auto text-white/80">
            If you want to get in touch, meet up for coffee or just say hi, drop an email below and I will get back to you soon.
          </p>
        </div>

        <div className="flex flex-row space-x-20">
          <form 
            onSubmit={onSubmit}
            className="flex flex-col w-fit mx-auto space-y-2"
          >
            <div className="flex space-x-2 max-w-xs sm:max-w-full">
              <input
                type='text'
                name='from_name'
                placeholder="Your name"
                value={toSend.from_name}
                onChange={handleChange}
                className="contactInput max-w-[48.7%] sm:max-w-full"
              />
              <input
                type='text'
                name='reply_to'
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
                className="contactInput max-w-[48.7%] sm:max-w-full"
              />
            </div>

            <textarea
              name='message'
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
              className="contactInput resize-none"
            />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-500 py-5 px-10 rounded-sm text-white font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
