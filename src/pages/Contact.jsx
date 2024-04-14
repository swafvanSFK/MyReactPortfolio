import React, { useState } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {

  const [data, setData] = useState({
    name : '',
    email : '',
    subject : '',
    message : ''
  })

  const [errors, setErrors] = useState({
      name : '',
      email : '',
      subject : '',
      message : ''
  })

  const formValidate = () => {

    let valid = true

    const newErrors = {
      name : '',
      email : '',
      subject : '',
      message : ''
    }

    if (!data.name.trim()){
      newErrors.name = "Please Enter your Name";
      valid = false;
    }

    if (!data.email.trim()){
      newErrors.email = "Please Enter your Email";
      valid = false;
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)){
      newErrors.email = "Please Enter a valid Email";
      valid = false;
    }

    if (!data.subject.trim()){
      newErrors.subject = "Enter A subject";
      valid = false;
    }
    if (!data.message.trim()){
      newErrors.message = "Please Enter your message";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  }

  const handleOnchange = (e) =>{
    const {name , value } = e.target
    setData({...data, [name]:value})
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    
    if (formValidate()){
      console.log("Message send Successfuly" , data);
    }else{
      console.log("Please Check your details");
    }
    
  }


  return (
    <section id="contact" className="contact mb-5">
      <div className="container">
        <h2 className="section-title">contact</h2>
        <div className="row mt-5">
          <div className="col-lg-4 mb-5 d-flex flex-column justify-content-evenly">
            <div className="social-icons d-flex align-items-center mb-5">
              <i className="fas fa-location-dot me-3"></i>
              <div className="contact-details">
                <p className="mb-0">LOCATION :</p>
                <span>MALAPPURAM, KERALA, INDIA</span>
              </div>
            </div>
            <div className="social-icons d-flex align-items-center mb-5">
              <i className="fas fa-envelope me-3"></i>
              <div className="contact-details">
                <p className="mb-0">EMAIL :</p>
                <span>SAFUSWAFVAN1@GMAIL.COM</span>
              </div>
            </div>
            <div className="social-icons d-flex align-items-center">
              <i className="fa-solid fa-mobile me-3"></i>
              <div className="contact-details">
                <p className="mb-0">PHONE :</p>
                <span>(+91) 808 6727471</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-lg-5 send-mail">
            <form onSubmit={submitHandler}>
              <div className="d-flex mb-3 input-area">
                <input
                  className="w-100 input-box me-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="YOUR NAME"
                  onChange={handleOnchange}
                />
                <span className="error-msg">{errors?.name}</span>
                <input
                  className="w-100 input-box"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="YOUR EMAIL"
                  onChange={handleOnchange}
                />
                <span className="error-for-email">{errors?.email} </span>
              </div>
              <div className="position-relative ">
              <span className="error-for-subject ">{errors?.subject}</span>
              <input
                className="w-100 mb-3 input-box"
                type="text"
                name="subject"
                id="subject"
                placeholder="SUBJECT"
                onChange={handleOnchange}
              />
              </div>
              <span className="error-for-message ">{errors?.message}</span>
              <textarea
                className="w-100 input-box"
                placeholder="MESSAGE"
                name="message"
                id="message"
                cols="20"
                rows="10"
                onChange={handleOnchange}
              ></textarea>
              

              <div className="submit-btn d-flex justify-content-center mt-5">
                <button type="submit">MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
