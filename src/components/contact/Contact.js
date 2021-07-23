import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact" name="contact">
            {/* <p className="contact__title">KONTAKT</p> */}
            <div className="contact__grid">
                <a className="contact__tel" href="tel:+48501411041">+48 501 411 041</a>
                <a className="contact__mail" href="mailto:hejduk.b@gmail.com">hejduk.b@gmail.com</a>
                <a className="contact__git" href="https://github.com/BasiaHejduk" target="_blank" rel="noreferrer">GIT</a>
            </div>
        </div>
    )
};

export default Contact;