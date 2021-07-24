import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact" name="contact">
            <div className="wrapper">
                <p className="contact__title">KONTAKT</p>
                <div className="contact__img">
                    <div className="contact__grid">
                        <div className="contact__item contact__item--tel">
                            <a className="contact__icon contact__icon--tel" href="tel:+48501411041"> </a>
                            <a className="contact__item-detail" href="tel:+48501411041">+48 501 411 041</a>
                        </div>
                        <div className="contact__item contact__item--mail">
                            <a className="contact__icon contact__icon--mail" href="mailto:hejduk.b@gmail.com"> </a>
                            <a className="contact__item-detail" href="mailto:hejduk.b@gmail.com">hejduk.b@gmail.com</a>
                        </div>
                        <div className="contact__item contact__item--git">
                            <a className="contact__icon contact__icon--git" href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer"> </a>
                            <a className="contact__item-detail" href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer">github.com/BasiaHejduk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;