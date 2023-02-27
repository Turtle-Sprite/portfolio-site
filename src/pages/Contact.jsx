import Loader from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillPhone, AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_e30drm9',
                'template_hwb4lda',
                refForm.current,
                'rI1-t507fnmxRNY3e'
            )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent!')
                window.location.reload(false)
            }, function (error) {
                console.log('FAILED...', error)
                alert('Message was not sent!')
            })
    }
    return (
        <>
            <div className='contact-page'>
                <h1>
                    Contact Me
                </h1>
                <p>
                    Contact me about opportunities within your organization - especially companies looking for a creative and dedicated developer. Don't hesitate to contact me with questions about my projects or experience.
                </p>
                <div className="flex ">
                    <div className="contact-info black-card m-4">
                        <a className="flex items-center" href='https://www.linkedin.com/in/crystal-sheeley-developer/'>< AiFillLinkedin className='icon' />
                            <h3 className='p-2 mt-2'>Linkedin</h3></a>
                        <a className="flex items-center" href='https://github.com/Turtle-Sprite'><AiFillGithub className='icon' />
                            <h3 className='p-2 mt-2'>Github</h3></a>
                        <div className="flex items-center">
                            <AiFillPhone className='icon' />
                            <h3 className='p-2 mt-2'>213-649-8796</h3>
                        </div>
                        <div className="flex ">
                            <AiOutlineMail className='icon' />
                            <h3 className='p-2 mt-2'>crystal.sheeley13@gmail.com</h3>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h4>Old school contact form? Don't mind if I do!</h4>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <li className='input'>
                                <input className='input' type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='input'>
                                <input className='input' type="text" name="email" placeholder="Email" required />
                            </li>
                            <li className='input'>
                                <input className='input' type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li className='input'>
                                <textarea className='input' type="text" name="message" placeholder="Message" required />
                            </li>
                            <li className='flex items-center'>
                                <button type="submit" className="btn contact-btn">SEND</button>
                            </li>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Contact;