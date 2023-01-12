'use client'
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:coltonbitz@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`  
  };

  return (
    <div className="h-screen flex relative flex-col text-center text-white mx-auto justify-evenly items-center px-10 bg-[#0f1221]/90">
      <h3 className="uppercase tracking-[20px] pt-10 text-gray-500 text-2xl">
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
          <p>
            Hiiiiii
          </p>
        </div>

        <div className="flex flex-row space-x-20">
          {/* <div className="flex flex-col space-y-10 justify-center items-center">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-purple-700 h-7 w-7 animate-pulse" />
              <p className="text-2xl">+1234556789</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-purple-700 h-7 w-7 animate-pulse" />
              <p className="text-2xl">myemail@gmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-purple-700 h-7 w-7 animate-pulse" />
              <p className="text-2xl">123 Developer Lane</p>
            </div>
          </div> */}

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
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
