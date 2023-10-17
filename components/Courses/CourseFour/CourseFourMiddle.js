import React from "react";

const CourseFourMiddle = () => {
    const courseFourTexts = [
        {
            img: "/img/temporomandibular/temporomandibular-2.jpg",
            img2: "/img/temporomandibular/temporomandibular-3.jpg",
            text: "Terminoloji, ekipman ve kompozisyon bilgisi"
        },
        {
            img: "/img/temporomandibular/temporomandibular-4.jpg",
            img2: "/img/temporomandibular/temporomandibular-5.jpg",
            text: "Tüm intraoral ve ekstraoral fotoğraf protokolü"
        },
        {
            img: "/img/temporomandibular/temporomandibular-4.jpg",
            img2: "/img/temporomandibular/temporomandibular-5.jpg",
            text: "Dijital tasarım amaçlı yüz fotoğrafı çekimi "
        },
        {
            img: "/img/temporomandibular/temporomandibular-7.jpg",
            img2: "/img/temporomandibular/temporomandibular-8.jpg",
            text: "Profesyonel sonuçları  için donanım oluşturma"
        },
        {
            img: "/img/temporomandibular/temporomandibular-9.jpg",
            img2: "/img/temporomandibular/temporomandibular-10.jpg",
            text: "Nikon ve canon sistemleri bolca uygulama"
        },
    ];

    return (
        <>
            <div className="course-four-middle">
                {courseFourTexts.map((info, index) => (
                    <MiddleContent info={info} index={index} />
                ))}
            </div>
            <div className="course-three-middle-p">
                <span className="top-title">Uzmanlığınızı Genişletmek İçin İşte Fırsat!</span>
                <p>Canlı ve destekleyici bir atmosferde yaşayacağınız bu heyecan verici
                    öğrenme ve mesleki gelişim yolculuğunda bize katılın.
                    Uzmanlığınızı genişletme ve kariyerinizi geliştirme fırsatını kaçırmayın!
                </p>
            </div>
        </>
    );
};

export default CourseFourMiddle;

const MiddleContent = ({ info, index }) => {
    const isEvenIndex = index % 2 === 0;
    return (
        <div className={`course-four-middle-box ${isEvenIndex ? "even" : "odd"}`}>
            <div className="course-four-middle-p">
                <h3 className="title-course-four">
                    {info.text}
                </h3>
            </div>
            <div className="course-four-middle-img">
            <img src={info.img} alt="image" />
            {info.img2 && <img src={info.img2} alt="image" />}
            </div>
        </div>
    );
};