import InputContainer from "@/components/InputContainer";
import PageTitle from "@/components/PageTitle";
import React from "react";

const contact = () => {
  return (
    <>
      <PageTitle
        title_WordOne="Contact"
        title_WordTwo="Us"
        subtitle="Get in touch with us—we're here to answer your questions, listen to your feedback, and help however we can."
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 justify-center items-center mt-16 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <InputContainer
              type="text"
              title="Name"
              placeholder="Enter Your Name"
              icon="user"
            />
            <InputContainer
              type="email"
              title="Email"
              placeholder="Enter Your Email"
              icon="email"
            />
          </div>
          <div className="w-full max-w-4xl flex justify-center items-center">
            <InputContainer
              type="textarea"
              title="Message"
              placeholder="Your message here..."
              icon="message"
            />
          </div>
          <button className="mt-2 px-8 py-4 bg-orange-400 text-black font-bold uppercase tracking-wider border-2 border-black shadow-[5px_5px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:bg-orange-400/90 transition-all duration-200 transform hover:-translate-y-1">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default contact;
