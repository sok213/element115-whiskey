import s from './Contact.module.scss';
import React, { useState, CSSProperties, Fragment, useEffect } from 'react';
import GeneralHero from './../../GeneralHero/GeneralHero';
import heroImage from './../../../assets/generalhero_blur.jpg';
import { Button } from '@chakra-ui/react';
import ClockLoader from "react-spinners/ClockLoader";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, []);

  const [formStatus, setFormStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const formSubmit = () => {
    console.log('submit form....');

    const inputFields = document.querySelectorAll('input[required], textarea[required]');
    let allFieldsFilled = true;
  
    inputFields.forEach((field) => {
      if (!field.value.trim()) {
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      setFormError(true);

      return;
    } else {
      setFormError(false);
    }

    setFormStatus(true);

    // set timeout
    // show animation
    // setformstatus
    setLoading(true);
    setFormStatus(false);
    setTimeout(function showAnimation() {
      setLoading(false);
      console.log('test');
    }, 2500);

  }

  const renderForm = () => {

    return (
      <div className={s.formContainer}>
        <form className={s['contact-form']}>
            <h2>Initiate Encounter</h2>
            {
              formError &&
              <p className={s.errorMessage}>Required: Fill out all fields</p>
            }
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className={s.input} placeholder='Email'/>
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required className={s.input} placeholder='Subject' />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required className={s.input} placeholder='We come in peace.'></textarea>
            
            <Button colorScheme='green' variant='solid' className={s.ctaButton} onClick={formSubmit}>
              Send
            </Button>
        </form>
      </div>
    )
  }

  const renderSuccessMessage = () => {
    const override: CSSProperties = {
      display: "block",
      margin: "100px auto",
    };

    return (
      <Fragment>

        <div 
          className={`${s.successMsgContainer} animate__animated animate__fadeIn`} 
          style={(!loading && !formStatus) ? { display: 'flex' } : null}
        >
          <i className={`${s.checkmarkIcon} bi bi-check-circle`}></i>
          <p>Your message has been sent!</p>
        </div>
        
        <div className={`${s.loadContainer} animate__animated animate__fadeIn`} 
        style={!loading ? { display: 'none' } : null }>
          <ClockLoader
            color="#FF9C06"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </Fragment>
    )
  }

  return (
    <section className={`animate__animated animate__fadeIn`}>
      <GeneralHero
        image={heroImage}
        title={'Contact'}
      />

      {/* Text row */}
      <div className='row'>
        <div className='container'>
          <div className='row__centerContent'>
            <h2 className='row__header'>REACH OUT... far out!</h2>
            <p className='row__textContent'>Sorry to disappoint. This whiskey company is a work of fiction and the product does not exist. If you enjoyed this website and would like to leave a message, feel free to use the form below for your amusement.</p>
          </div>
        </div>
      </div>

      <div className='row row--secondaryBg'>
        <div className='container'>
          {/* form */}
          {
            formStatus ? renderForm() : renderSuccessMessage()
          }
        </div>
      </div>
    </section>
  );
}

export default Contact;
