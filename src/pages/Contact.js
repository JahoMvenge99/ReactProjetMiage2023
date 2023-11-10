import { default as React } from 'react';
import { Header } from '../components/Header';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
   
const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  const formMess = document.querySelector(".form-message");
      emailjs.sendForm('service_au24b66', 'template_jlkyrz9', form.current, 'lIBL7AlqxlaINz4B6')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            if (formMess){
                 formMess.innerHTML = "<p class='success'>Message envoyé !</p>";
            setTimeout(() => {
              formMess.innerHTML = "";
  
            }, 2500);
            }else {
                console.error("Element with class .form-message not found");
            }
           
        }, (error) => {
            console.log(error.text);
            formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veillez réessayer</p>";
            setTimeout(() => {
              formMess.innerHTML = "";
  
            }, 2500);
        });
    };
    return (
        <div className="user-list-page">
            <Header />
      <h1>FORMULAIRE DE CONTACT<span>📞📲🤳</span></h1>
        <form ref={form} onSubmit={sendEmail}>
         <label>Name</label>
         <input type="text" name="name" style={{ width: '100%' }} required/>
         <label>Email</label>
         <input type="email" name="email" style={{ width: '100%' }} required autoComplete='off'/>
         <label>Message</label>
         <textarea name="message" />
         
         <input type="submit" value="Send" required/>
        </form>
        </div>
    );
};

export { Contact };