import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    return <div className="contact-container" id="get-in-touch">
        <h2 className="contact-title"><span>#</span>get-in-touch_</h2>
        <div className="contact-container-content">
            <div className="contact-container-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.544119057585!2d27.119030476391547!3d38.40578857556078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd92606b22ead%3A0x5db9e92855d0f0fd!2zw5zDp3lvbA!5e0!3m2!1str!2str!4v1702228023434!5m2!1str!2str" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-container-right">
                <h2 className="contact-main-title">Don't hesisate - Contact me now and let's get started !!</h2>
                <p className="contact-description">If you would like to contact me via email, you can send me a message at ozgecetin43@gmail.com. I would be happy to hear from you and will do my best to respond as soon as possible. Alternatively you can also react out to me on my LinkedIn account.</p>
                <div className="contact-social-medias">
                    <a href="https://github.com/OzgeCetin43" target="_blank">
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.linkedin.com/in/%C3%B6zge-%C3%A7etin-02216116a/" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Contact;