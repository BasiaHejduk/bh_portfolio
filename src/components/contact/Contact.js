import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Contact.scss";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactWrapper = useRef(null);

    useEffect(() => {
        const contactImg = contactWrapper.current;
        gsap.set(contactImg, {y: "+=30", autoAlpha: 0});
        gsap.to(contactImg, {
            scrollTrigger: {
                trigger: contactImg,
                start: "top bottom",
                toggleActions: "restart none restart none"
            },
            y: "-=30",
            autoAlpha: 1,
            duration: 1
        });
    }, [])

    return (
        <div className="contact" name="contact">
            <div className="wrapper">
                <p className="contact__title">CONTACT</p>
                <div ref={contactWrapper} className="contact__img">
                    <div className="contact__grid">
                        <div className="contact__item contact__item--tel">
                            <a className="contact__icon contact__icon--tel" 
                                href="tel:+48501411041">
                            </a>
                            <a className="contact__item-detail" href="tel:+48501411041">
                                +48 501 411 041
                            </a>
                        </div>
                        <div className="contact__item contact__item--mail">
                            <a className="contact__icon contact__icon--mail" 
                                href="mailto:hejduk.b@gmail.com"> 
                            </a>
                            <a className="contact__item-detail" href="mailto:hejduk.b@gmail.com">
                                hejduk.b@gmail.com
                            </a>
                        </div>
                        <div className="contact__item contact__item--git">
                            <a className="contact__icon contact__icon--git" 
                                href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer"> 
                            </a>
                            <a className="contact__item-detail" 
                                href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer">
                                github.com/BasiaHejduk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;