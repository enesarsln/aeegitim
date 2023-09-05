import React from "react";

const ContactContent = () => {
    return(
        <>
        <div className="contact-content-container">
            <div className="contact-content-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.3716702452466!2d32.80636852611444!3d39.910697986282436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348b2a8a8bb1b%3A0x6fc94f4a1deecb8a!2sYDA%20Center!5e0!3m2!1str!2str!4v1693934715245!5m2!1str!2str" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-content-info">
            <ul>
                <li>
                    <span>Adres:</span>
                    <p>Kızılırmak mahallesi Dumlupınar Bulvarı No:9/A ofis no:248 kat:7 YDA Center Çankaya Ankara</p>
                </li>
                <li>
                    <span>Telefon:</span>
                    <p>+90 535 876 53 23</p>
                </li>
                <li>
                    <span>Email:</span>
                    <p>iletisim@info.com</p>
                </li>
                <li>
                    <span>Çalışma Saatleri:</span>
                    <p>09:00 17:00</p>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default ContactContent