"use client"

import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "../../public/question-mark.jpg";
// import { sendEmail } from "../utils/sendEmail";
import {
  BsFillGeoAltFill,
  BsFillPhoneVibrateFill,
  BsFillEnvelopeAtFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setIsLoading(true);
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
            toast.success("Your mail has been sent successfully");
            if (form.current) {
              form.current.reset();
              setEmail("");
              setMessage("");
              setName("");
            }
            setIsLoading(false);
          },
          (error) => {
            console.log(error.text);
            toast.error("An error occurred, failed to send your mail");
            setIsLoading(false);
          }
        );
    }
  };

  const isButtonDisabled =
    name.trim() === "" || email.trim() === "" || message.trim() === "";
  return (
    <div className="pb-10 font-jost" id="contact">
      <div className="bg-email bg-cover bg-center text-white">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-center items-center py-5 h-[300px] mb-6">
            <div className="text-center">
              <p className="md:text-3xl text-xl mb-4">
                Have a project or some concerns, you can write a mail to me
              </p>

              <a
                href="mailto:ogochukwuodom@gmail.com"
                className="bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f37a23da]  duration-300"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 w-full">
            <p className="font-medium">CONTACT ME</p>
            <p className="md:text-5xl text-3xl font-semibold mb-4">
              Lets Discuss Your Project
            </p>
            <ul>
              <li className="mb-4">
                <div className="flex gap-4">
                  <div className="icon-box rounded-full h-14 w-14 bg-[#f37a233e] flex justify-center items-center">
                    <BsFillPhoneVibrateFill className="text-2xl" />
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
                    <BsFillEnvelopeAtFill className="text-2xl" />
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
            <ul className="social-icons flex gap-4 mt-3">
              <li>
                <a
                  href="https://web.facebook.com/ogochukwu.odom.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-center h-[60px] w-[60px] relative shadow-addr flex justify-center items-center bg-[#f37a233e] hover:bg-[#F37B23] hover:text-white hover:-translate-y-2 transition ease-in-out delay-150 duration-300"
                >
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/godsfavourodom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-center h-[60px] w-[60px] relative shadow-addr flex justify-center items-center bg-[#f37a233e] hover:bg-[#F37B23] hover:text-white hover:-translate-y-2 transition ease-in-out delay-150 duration-300"
                >
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ogochukwu-odom-a94870199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-center h-[60px] w-[60px] relative shadow-addr flex justify-center items-center bg-[#f37a233e] hover:bg-[#F37B23] hover:text-white hover:-translate-y-2 transition ease-in-out delay-150 duration-300"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-2/3 w-full flex gap-2 mt-5 md:mt-0">
            <div className="md:w-2/3 w-full">
              <div className="rounded-xl p-5 shadow-contact">
                <p className="my-5 text-lg font-semibold">Write to me</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 border-gray-200 p-3 w-full rounded-lg outline-none focus:border-[#F37B23] transition duration-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 border-gray-200 p-3 w-full rounded-lg outline-none focus:border-[#F37B23] transition duration-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border-2 border-gray-200 p-3 w-full rounded-lg outline-none focus:border-[#F37B23] transition duration-500"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className={`${
                        isButtonDisabled || isLoading
                          ? "bg-[#f37a233e] cursor-not-allowed"
                          : "bg-[#F37B23] hover:bg-[#d76d21] text-white"
                      } p-3 rounded-lg`}
                      disabled={isButtonDisabled || isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:w-1/3 hidden md:flex justify-center items-center">
              <Image src={contact} alt="contact image" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ContactSection;
