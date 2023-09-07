import React from "react";

const BlogPosts = () => {

    const postContext = [
        {
            img: "/img/doctors/doctor6.jpg",
            title: "1.Işıkla Polimerize Olan Rezin Simanlar",
            text: "Siman seçimi, porselen laminate veneerlerin başarılı bir şekilde simante edilmesinde büyük önem taşır. Işıkla polimerize olan rezin simanlar, mükemmel fiziksel özellikleri ve estetik sonuçları nedeniyle yaygın olarak kullanılır. Bu simanlar, size gerekli olan çalışma süresini ve veneer ile diş yapısı arasında güçlü bir yapışma sağlar. Farklı renklerde ve kıvamlarda piyasada bulunabilen bu simanlar, doğal diş rengiyle mükemmel bir uyum sağlar ve güzel bir gülümseme dönüşümüne olanak tanır. Yeni bir siman alırken aldığınız simanın silan, bond gibi ürünleri ile uyumlu olduğuna veya bir set şeklinde almaya dikkat edebilirsiniz. Özellikle birini önermem bunun yerine en kritik noktanın kullanma talimatlarında yazıldığı gibi uygulanmasının etkinliği açısından en önemli kriter olduğunu aklınızdan çıkarmayın."
        },
        {
            img: "/img/doctors/doctor7.jpg",
            title: "2. İzolasyon",
            text: "Simantasyon sürecinde uygun izolasyonun sağlanması, optimal bağlantının sağlanması için büyük önem taşır. İzolasyon, kontaminasyonu önler, yapışmanın dayanıklılığını artırır ve veneerlerin ömrünü uzatır. Rubber dam izolasyonu ve gingival bariyerler ve pamuk rulolar gibi izolasyon araçlarının kullanımı gibi teknikler, siman uygulaması için kuru ve temiz bir alan yaratmaya yardımcı olur. İzolasyon ayrıca nemin müdahalesini engeller, böylece veneer ile diş yapısı arasında güvenilir bir bağ sağlar. Her vaka için en uygun izolasyon tekniğini seçmek porselen laminate veneer simantasyonunda önemli aşamalardan birisini oluşturur. Rubber dam ile izolasyon yapmayı planlıyorsanız preparasyon marjininizi oluştururken bunu aklınızda bulundurmanız gerektiğini unutmayın. Çok derin marjin oluşturulduğu durumda rubber dam ile izolasyon zorlaşmaya başlıyacaktır."
        },
        {
            img: "/img/doctors/doctor8.jpg",
            title: "3. Işık Kaynağı",
            text: "Uygun bir ışık kaynağı, ışıkla polimerize olan rezin simanlarının sertleştirilmesinde ve uygun polimerizasyonun sağlanması için önemlidir. LED ve halojen ışık kaynakları yaygın olarak diş hekimliğinde kullanılır. Işık kaynağının uygun yoğunluk ve dalga boyunu sağladığından emin olmak önemlidir. Doğru sürede uygulamak, sadece dayanıklı bir bağlantıyı sağlamakla kalmaz, aynı zamanda veneerlerin uzun ömürlülüğü ve estetiği için de önemlidir. Işık kaynağı ve süresi özellikle porselen laminate veneer simantasyonunda diğer direkt tekniklere göre çok daha önemlidir. unutmayın ışık eğer opak bir porselen kullandıysanız alttaki rezin simana daha az etki edecektir. ışık ile polimerize olan simanlar kimyasal olarak polimerize etmeye devam etmeyecekleri için en azından önerilen süreler buyunca hatta gerekirse daha uzun süre kullanmayı önerebilirim. oluşan ısının yaratacığı problemlerden kurtulmak için uygulama sırasında ışık ucunu hareket ettirmek ve farklı açılardan uygulamak bir çözüm olabilir."
        },
        {
            img: "/img/doctors/doctor4.jpg",
            title: "4. Porselen iç yüzeyinde yapılan işlemler",
            text: "Porselen laminate veneerlerin simantasyonunda önemli bir adım, porselen iç yüzeyinde yapılan işlemlerdir. Doğru yüzey işlemleri, veneer ile simanın arasındaki bağın dayanıklılığını artırır. Hidroflorik asit ile pürüzlendirme ve silan ajanları uygulanması, mikromekanik retansiyonu geliştirir ve güçlü bir bağlanmayı teşvik eder. Bu işlemler sırasında unutulmaması gereken farklı porselen malzemeleri için hidroflorik asit konsantrasyonu ve uygulama süresi değişmektedir. Bu nedenle teknisyeninizin hangi porseleni kullandığını bilmeniz gerekir. Ayrıca iç yüzeye uygulanan hidroflorik asitin temizlenmesi için sadece suda yıkamak yerine ultrasonik banyonun daha etkili olduğunu da aklınızdan çıkarmayın. Bazı üreticilerin silanı bond içerisine kattığı bilinmektedir. Bu tip bir ürün kullandığınızda porselen iç yüzeyine bu bondu kullanmanız ve polimerize etmeniz gerekmektedir. Bu ürünler dışında konvansiyonel bir silan kullanıldığında ayrıca iç yüzeye bond uygulamaya gerek yoktur."
        },
        {
            img: "/img/doctors/doctor5.jpg",
            title: "5. Bond Polimerizasyon Protokolü",
            text: "Porselen laminate veneer ile diş yapısı arasında güvenilir bir bağlantı sağlamak için hassas bir bond polimerizasyon protokolünü takip etmek önemlidir. Bu protokolü genellikle simanın dikkatli bir şekilde uygulanması, veneerin hafif bir baskı ile oturtulması ve uygun bir ışık ile polimerizasyonu takip edecektir. Üretici tarafından önerilen bond uygulamasına çok dikkat etmek gerekir. Bond içerisindeki kimyasalların etkin çalışması için bondun diş yüzeyine uygulanma şekli, süresi, hava ile inceltilmesi ve simandan önce veya simanla beraber polimerizasyonu, üründen ürüne değişiklik göstermektedir. İyi uygulanmış bir bond protokolün izlenmesi, işlem sonrası hassasiyet gibi komplikasyonları önlemeye yardımcı olur ve uzun vadeli başarıyı sağlar."
        },
    ]

    return (
        <div className="blog-content">
            {postContext.map((post, key) => (
                <PostCard img={post.img} title={post.title} text={post.text} index={key} key={key} />
            ))}
        </div>
    )
}

export default BlogPosts

const PostCard = ({ img, title, text, index }) => {
    const isEvenIndex = index % 2 === 0;
    return (
        <div className={`blog-post-card ${isEvenIndex ? "even" : "odd"}`}>
            <div className="post-card-img">
                <img src={img} />
            </div>
            <div className="post-card-text">
                <div className="post-card-title">
                    <h3>{title}</h3>
                </div>
                <div className="post-card-p">
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}