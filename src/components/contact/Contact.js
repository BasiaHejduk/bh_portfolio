import "./Contact.scss";
import { useEffect } from "react";
import gsap from "gsap";

const Contact = () => {

    useEffect(() => {

        let options = {
            root: null,
            rootMargin: "-60px"
        };

        const showContact = (entries, ob) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    slideFromBottom();
                    ob.unobserve(entry.target);
                }
            })
        };

        let observerContact = new IntersectionObserver((entries, ob) => showContact(entries, ob), options);
        observerContact.observe(document.querySelector(".contact__img"))

        const slideFromBottom = () => {
            const contactImg = document.querySelector(".contact__img")
            const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
            tl.fromTo(contactImg, {y: "+=30"}, {duration: 1, y: "-=30", autoAlpha: 1})
        }

    }, [])

    const makeBigger = (e) => {
        const element = e.target.previousElementSibling;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        tl.to(element, {duration: 1, scale: 1.5})
    }

    const makeNormal = (e) => {
        const element = e.target.previousElementSibling;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        tl.to(element, {duration: 1, scale: 1})
    }

    return (
        <div className="contact" name="contact">
            <div className="wrapper">
                <p className="contact__title">KONTAKT</p>
                <div className="contact__img">
                    <div className="contact__grid">
                        <div className="contact__item contact__item--tel">
                            <a className="contact__icon contact__icon--tel" href="tel:+48501411041"> </a>
                            <a className="contact__item-detail" href="tel:+48501411041" onMouseOver={(e)=> makeBigger(e)} onMouseLeave={(e)=> makeNormal(e)}>+48 501 411 041</a>
                        </div>
                        <div className="contact__item contact__item--mail">
                            <a className="contact__icon contact__icon--mail" href="mailto:hejduk.b@gmail.com"> </a>
                            <a className="contact__item-detail" href="mailto:hejduk.b@gmail.com" onMouseEnter={(e)=> makeBigger(e)} onMouseLeave={(e)=> makeNormal(e)}>hejduk.b@gmail.com</a>
                        </div>
                        <div className="contact__item contact__item--git">
                            <a className="contact__icon contact__icon--git" href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer"> </a>
                            <a className="contact__item-detail" href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer" onMouseEnter={(e)=> makeBigger(e)} onMouseLeave={(e)=> makeNormal(e)}>github.com/BasiaHejduk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;