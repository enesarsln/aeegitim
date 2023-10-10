import React from "react";

const CourseThreeMiddle = () => {
    const courseThreeTexts = [
        {
            img: "/img/temporomandibular/temporomandibular-2.jpg",
            img2: "/img/temporomandibular/temporomandibular-3.jpg",
            text: "Tüm dersleri verecek olan deneyimli eğitmenimiz Prof. Dr. Atila Ertan tarafından verilen bu kurs, öğrenme yolculuğunuz boyunca birinci sınıf eğitim ve bilgi almanızı sağlar. Prof. Dr. Atila Ertan'ın uzmanlığı ve tecrübesiyle, temporomandibular bozuklukları yönetme ve uyku apnesi için splint tedavisi uygulama konusundaki yeterliliğinizi artıracak paha biçilmez bilgiler ve pratik teknikler kazanacaksınız."
        },
        {
            img: "/img/temporomandibular/temporomandibular-4.jpg",
            img2: "/img/temporomandibular/temporomandibular-5.jpg",
            text: "Uygulamalı yaklaşımımız bu kursu diğerlerinden ayırır. İki gün boyunca, splintlerin intraoral olarak yapımına ve uyumlanmasına aktif olarak katılmak için inanılmaz bir fırsatınız olacak. Hastalarınızın benzersiz ihtiyaçlarını karşılamak için splint yapımının ve özelleştirmenin inceliklerini öğreneceksiniz. Ek olarak, kursumuz dijital intraoral tarama prosedürlerini de gösterecek ve sizi bu alandaki en son gelişmelerden haberdar edecektir."
        },
        {
            img: "/img/temporomandibular/temporomandibular-6.jpg",
            text: "Kesintisiz bir öğrenme deneyimi sağlamak için tüm katılımcılara yeterli ekipman sağlanacak ve uygulamalı oturumlarda herhangi bir gecikme yaşanmayacaktır. Becerilerinizi uygulamak ve geliştirmek için gerekli araçlara ve materyallere kesintisiz erişiminiz olacak. "
        },
        {
            img: "/img/temporomandibular/temporomandibular-7.jpg",
            img2: "/img/temporomandibular/temporomandibular-8.jpg",
            text: "Ayrıca bu kurs, başarılı sonuçlar elde etmek için çok önemli olan yüz arkı transferi, leaf gauge ve lucia jig ile sentrik ilişki kaydı gibi temel prosedürleri içerir. Uygulamalar sayesinde, bu prosedürleri etkili bir şekilde gerçekleştirme konusunda güven kazanacaksınız."
        },
        {
            img: "/img/temporomandibular/temporomandibular-9.jpg",
            img2: "/img/temporomandibular/temporomandibular-10.jpg",
            text: "Bu kursun sonunda, temporomandibular bozuklukları teşhis etmek ve yönetmek ve uyku apnesi için splint tedavisi uygulamak için gerekli bilgi ve pratik becerilerle donatılmış olarak ayrılacaksınız. Amacımız, hastalarınıza olağanüstü bakım sağlamanız ve genel sağlıklarına katkıda bulunmanız için sizi güçlendirmektir."
        },
    ];

    return (
        <>
            <div className="office-content-container">
                {courseThreeTexts.map((info, index) => (
                    <OfficeContentBox key={index} info={info} index={index} />
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

export default CourseThreeMiddle;

const OfficeContentBox = ({ info, index }) => {
    const isEvenIndex = index % 2 === 0;

    return (
        <div className={`office-content-box ${isEvenIndex ? "even" : "odd"}`}>
            <div className="office-content-img">
                <img className="me-2" src={info.img} alt="image" />
                {info.img2 && <img src={info.img2} alt="image" />}
            </div>
            <div className="office-content-text">
                <p>{info.text}</p>
            </div>
        </div>
    );
};
