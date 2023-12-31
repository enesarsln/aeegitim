import React from "react";

const OfficeContent = () => {
    const officeTexts = [
        {
            img: "/img/office/office-1.jpg",
            text: "Dental alanında eğitim ofisimizin kapılarını size açıyoruz. Ankara'nın kalbinde elverişli bir konuma sahip bulunan ofisimiz, metro ve araçla kolayca ulaşılabilir bir yerdedir. 140 metrekarelik geniş ve donanımlı ofisimiz, her katılımcı için ideal bir ortam sunmaktadır. Ofisimizde her katılımcı, rahatlıkla görebileceği 3 metre genişliğindeki 4K sunum ekranının keyfini çıkarabilir."
        },
        {
            img: "/img/office/office-2.jpg",
            text: "Rahat bir öğrenme ortamının ilgi çekici bir eğitim deneyimini teşvik etmenin anahtarı olduğuna inanıyoruz. Bu nedenle alanımızı herkesin rahatlıkla oturabileceği şekilde özenle tasarladık. Uzun süren oturumlarda bile herkes rahatlayabilir ve sunumlara tamamen odaklanabilir."
        },
        {
            img: "/img/office/office-3.jpg",
            text: "Pozitif bir atmosferle birleşen teknolojik altyapımız, aktif katılımı teşvik eden ve etkileşimli bir öğrenme deneyimi sunan bir ortam yaratmaktadır. Bilginin aktarımının kolaylaştırıldığı ve ilham veren bir mekan olarak tasarladığımız ofisimiz, üstün eğitim deneyimlerinin yaşandığı bir yerdir."
        },
        {
            img: "/img/office/office-4.jpg",
            text: "Öğrenmenin keyifli bir yolculuğa dönüştüğü Ankara'daki eğitim ofisimizde bize katılın. Rahatlığa, en son teknolojiye ve ilgi çekici bir öğrenme atmosferine öncelik veren bir ortamda diş hekimliği alanında uzmanlığınızı genişletin. Diş hekimliği eğitiminin geleceğini gerçekten somutlaştıran bir yeri keşfedin."
        }
    ];

    return (
        <>
            <div className="office-content-container">
                {officeTexts.map((info, index) => (
                    <OfficeContentBox key={index} info={info} index={index} />
                ))}
            </div>
        </>
    );
};

export default OfficeContent;

const OfficeContentBox = ({ info, index }) => {
    const isEvenIndex = index % 2 === 0;

    return (
        <div className={`office-content-box ${isEvenIndex ? "even" : "odd"}`}>
            <div className="office-content-img">
                <img src={info.img} alt="image" />
            </div>
            <div className="office-content-text">
                <p>{info.text}</p>
            </div>
        </div>
    );
};
