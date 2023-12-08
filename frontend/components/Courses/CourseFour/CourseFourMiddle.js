import React from "react";

const CourseFourMiddle = () => {
    const courseFourTexts = [
        {
            img: "/img/dental-foto/dental-foto-2.jpg",
            img2: "/img/dental-foto/dental-foto-3.jpg",
            text: "Teorik sunum ile başlayacak olan kursumuzda, sunum ile başlayacak olan kursumuzda, sunumda kullanılan slaytların spiralli dosya şeklinde çıktıları verilecektir"
        },
        {
            img: "/img/dental-foto/dental-foto-4.jpg",
            img2: "/img/dental-foto/dental-foto-5.jpg",
            text: "Uygulamalar sırasında her katılımcı meslektaşlarımıza bir çift ekartör, bir tane bukkal, bir tane oklüzal ayna temin edilerek ve kurs için toplam 3 adet Nikon ve 3 adet Canon kamera ile 60,85,105mm makro lensler ve ring ve twin flaşlarla çekimler yapılacaktır."
        },
        {
            img: "/img/dental-foto/dental-foto-6.jpg",
            img2: "/img/dental-foto/dental-foto-7.jpg",
            text: "Fotoğraf çekimleri olarak her katılımcı çiftler halinde gruplara ayrıldıktan sonra birbirlri üzerinde farklı büyütme oranları ile ekartörlü, ekartörsüz alt üst oklüzyon, bukkal on iki pozisyonu fotoğraflarına ek olarak renk seçimi, dental çalışma  modeli veya restorasyon fotoğrafı ve paraflash ve sürekli ışık kaynağı ile dijital gülümseme tasarımına yönelik fotoğrafların uygulamaları yapılacaktır. "
        },
        {
            img: "/img/dental-foto/dental-foto-8.jpg",
            img2: "/img/dental-foto/dental-foto-9.jpg",
            text: "Fotoğraf çekimlerini takiben adobe phoshop programı ile fotoğrafların nasıl düzenleneceği ve exocad yazılımı için fotoğrafların nasıl yüklenip kullanılacağı ve dijital gülümseme tasarımı uygulaması gösterilecektir. Kurs boyunca çay,kahve ikramlarımız ve öğle yemeği de programa dahildir. Kursumuzun sonunda sertifika verilecektir.Şehir dışından geliyorsanız eğitim merkezimize ulaşım son derece kolaydır."
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
                <p>
                    {info.text}
                </p>
            </div>
            <div className="course-four-middle-img">
            <img src={info.img} alt="image" />
            {info.img2 && <img src={info.img2} alt="image" />}
            </div>
        </div>
    );
};