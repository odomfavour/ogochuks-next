import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "../../public/question-mark.jpg";
// import { sendEmail } from "../utils/sendEmail";
import {BsFillGeoAltFill, BsFillPhoneVibrateFill,BsFillEnvelopeAtFill} from "react-icons/bs"

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_5i19qsi",
          "template_wo34lma",
          form.current,
          "LjJ3YfnA0rSIIeviO"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="py-10 font-jost" id="#contact">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 w-full">
            <p className="font-medium">CONTACT ME</p>
            <p className="md:text-5xl text-3xl font-semibold mb-4">Lets Discuss Your Project</p>
            <ul>
              <li className="mb-4">
                <div className="flex gap-4">
                  <div className="icon-box rounded-full h-14 w-14 bg-[#f37a233e] flex justify-center items-center">
                    <BsFillPhoneVibrateFill className="text-2xl"/>
                  </div>
                  <div className="contact-text">
                    <p>Phone</p>
                    <p>(+234) 8067488682</p>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex gap-4">
                  <div className="icon-box rounded-full h-14 w-14 bg-[#f37a233e] flex justify-center items-center">
                    <BsFillEnvelopeAtFill className="text-2xl"/>
                  </div>
                  <div className="contact-text">
                    <p>Email</p>
                    <p>ogochukwuodom@gmail.com</p>
                  </div>
                </div>
              </li>
              {/* <li className="mb-4">
                <div className="flex gap-4">
                  <div className="icon-box rounded-full h-14 w-14 bg-[#f37a233e] flex justify-center items-center">
                    <BsFillGeoAltFill className="text-2xl"/>
                  </div>
                  <div className="contact-text">
                    <p>Location</p>
                    <p>18 Idua road, Eket Akwa Ibom</p>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="md:w-2/3 w-full flex">
            <div className="md:w-2/3 w-full">
              <div className="rounded-xl p-5 shadow-lg">
                <p className="my-5 text-lg font-semibold">Write to me</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 ">
                    <label htmlFor="name" className="block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#f37a233e] w-full rounded-md py-2 px-4 h-12"
                      name="from_name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border border-[#f37a233e] w-full rounded-md py-2 px-4 h-12"
                      name="reply_to"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="block mb-1">
                      Message
                    </label>
                    <textarea
                      className="border border-[#f37a233e] w-full rounded-md py-3 px-4"
                      name="message"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white"
                    >
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-1/3 md:block hidden">
              <Image src={contact} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
