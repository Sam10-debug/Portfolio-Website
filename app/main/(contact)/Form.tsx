"use client"

import  { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  
  useEffect(() => {
    AOS.init({
         duration: 2000,
    });
    AOS.refresh();
  }, []);

    const [state, handleSubmit] = useForm("mdorwlpa");
    if (state.succeeded) {
      return <div className="my-4 md:my-0 flex justify-center items-center flex-1"><p className="text-white text-[24px] md:text-[32px] font-bold">Message succesfully sent</p></div>;
  }
  return (
    <form data-aos="zoom-in" onSubmit={handleSubmit} className=" flex flex-col space-y-4 flex-1 mt-8 md:mt-0">
        <input type="text" name="name" required placeholder="Name:" className="h-[60px] text-white rounded-[5px] bg-formColor px-[23px] py-[24px]" />
        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        />
        <input type="email" name="senderEmail" required placeholder="Email:" className="h-[60px] text-white rounded-[5px] bg-formColor px-[23px] py-[24px]" />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        <textarea required placeholder="Message:" name="message" id="" cols={30} rows={10} className=" bg-formColor  text-white rounded-[5px] px-[23px] py-[24px]"></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
        <button id='form-button' disabled={state.submitting}  className='flex items-center justify-center h-[50px] w-[200px] rounded-[5px] bg-gradient-to-r from-gradient  to-grad text-white md:ml-auto mx-auto md:mx-0'>
          Send
        </button>
</form>
  )
}

export default Form
