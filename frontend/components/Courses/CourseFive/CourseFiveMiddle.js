import React from "react";

const CourseFiveMiddle = () => {
    const courseFourTexts = [
        {
            img: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-2.jpg",
            img2: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-3.jpg",
            text: 
                <ul>
                    <li>İmplant neden uygulanır?</li>
                    <li>İmplant niçin iyi bir tedavi alternatifidir?</li>
                    <li>İmplant kimlere uygulanabilir?</li>
                    <li>Diş kayıplarının sebepleri nelerdir?</li>
                    <li>Diş kayıpları bireyde ne gibi etkilere yol açar?</li>
                    <li>İmplant kimlere uygulanmamalıdır? Periodontitisli bireylere implant tedavisi yapılır mı?</li>
                    <li>İmplant nasıl uygulanmalıdır?</li>
                    <li>İmplant nasıl uygulanmamalıdır?</li>
                    <li>Klinik değerlendirme ve tedavi planlaması nasıl yapılır?</li>
                </ul>
        },
        {
            img: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-4.jpg",
            img2: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-5.jpg",
            text:
                <ul>
                    <li>Vaka analizi nasıl yapılır?</li>
                    <li>Cerrahi planlama nasıl yapılır?</li>
                    <li>Radyolojik  muayene nasıl yapılır ?</li>
                    <li>Panoramik grafi ve tomografi hakkında genel bilgiler radyolojik analizde hangi anatomik landmarklardan yararlanırız?</li>
                    <li>Panoramik grafilerin  faydaları  ve eksik yönleri nelerdir?</li>
                    <li>İmplant tedavisi planlamasında tomografinin önemi ve yeri nedir?</li>
                    <li>Tomografi ile implant planlaması nasıl yapılır?</li>
                    <li>Bireyin sistemik sağlık durumu nasıl olmalıdır?</li>
                    <li>Ağız boşluğu implant tedavisine nasıl hazırlanır?</li>
                </ul>
        },
        {
            img: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-6.jpg",
            img2: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-7.jpg",
            text:
                <ul>
                    <li>İmplant sistemlerinin genel ve ortak özellikleri nelerdir?</li>
                    <li>İmplant gövdeleri nasıl tasarlanmıştır?</li>
                    <li>Dayanaklar nasıl tasarlanmıştır?</li>
                    <li>Dayanak – implant bağlantısı nasıl olmalıdır?</li>
                    <li>İmplantlarda yüzey özellikleri nasıldır?</li>
                    <li>Osseointegrasyon nedir? Nasıl gerçekleşir? Kemiğin biyolojik özellikleri nelerdir?</li>
                    <li>İmplant çevresindeki dokuların özellikleri nelerdir?</li>
                    <li>İmplant çevresi dokuların sağlığı nasıl korunur?</li>
                    <li>İmplant uygulaması nasıl yapılır?</li>
                    <li>Atravmatik implant cerrahisinin prensipleri nelerdir?</li>
                </ul>
        },
        {
            img: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-8.jpg",
            img2: "/img/temel-implant-cerrahisi/temel-implant-cerrahisi-9.jpg",
            text:
                <ul>
                    <li>İmplant uygulaması yapılacak  odada asepsi, antisepsi ve sterilizasyon koşulları nasıl sağlanır?</li>
                    <li>İmplant uygulaması yapılacak odanın donanımı nasıl olmalıdır?</li>
                    <li>İmplant cerrahi setindeki alet ve enstrümanların bakımı ve temizliği nasıl yapılmalıdır?</li>
                    <li>Flep tasarımı, insizyon ve flebin kaldırılması nasıl yapılır?</li>
                    <li>İmplantları flep kaldırmadan uygulayabilir miyiz?</li>
                    <li>Osteotomi ve implantın yerleştirilmesi nasıl yapılır ve nelere dikkat edilmelidir?</li>
                    <li>Temel yumuşak doku manipülasyonu neleri kapsar, nasıl yapılmalıdır?</li>
                    <li>Biyotip nedir?</li>
                    <li>Biyotip implant cerrahisini nasıl etkiler?</li>
                </ul>
        },
    ];

    return (
        <div className="course-four-middle">
            {courseFourTexts.map((info, index) => (
                <MiddleContent info={info} index={index} />
            ))}
        </div>
    );
};

export default CourseFiveMiddle;

const MiddleContent = ({ info, index }) => {
    const isEvenIndex = index % 2 === 0;
    return (
        <div className={`course-four-middle-box ${isEvenIndex ? "even" : "odd"}`}>
            <div className="course-four-middle-p">
                {info.text}
            </div>
            <div className="course-four-middle-img">
                <img src={info.img} alt="image" />
                {info.img2 && <img src={info.img2} alt="image" />}
            </div>
        </div>
    );
};