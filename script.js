// بيانات الخدمات (خالية من الصور النسائية، باستخدام أدوات استرخاء راقية)
const servicesData = [
    {
        id: 1,
        title: "مساج سويدي استرخائي",
        shortDesc: "لتقليل التوتر وتنشيط الدورة الدموية",
        fullDesc: "جلسة مساج سويدي متكاملة تعتمد على حركات انسيابية متناغمة باستخدام زيوت عطرية فاخرة، تهدف إلى إزالة التوتر المتراكم وتجديد طاقة الجسم.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        benefits: ["تنشيط الدورة الدموية", "تخفيف التوتر والإجهاد", "تحسين جودة النوم"]
    },
    {
        id: 2,
        title: "مساج تايلندي علاجي",
        shortDesc: "لفك العضلات وإطالة الجسد",
        fullDesc: "مساج علاجي عميق يجمع بين الضغط على نقاط الطاقة وتقنيات التمدد والإطالة، مثالي للرياضيين ومن يعانون من تيبس العضلات.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
        benefits: ["زيادة مرونة المفاصل", "فك العقد العضلية", "توازن طاقة الجسم"]
    },
    {
        id: 3,
        title: "مساج استرخائي بالحجارة الدافئة",
        shortDesc: "لعمق الراحة وتسكين الآلام",
        fullDesc: "تجربة ملكية يتم فيها وضع حجارة بركانية دافئة على نقاط محددة في الظهر، تعمل حرارتها على تذويب التشنجات العضلية ومنحك استرخاءً لا مثيل له.",
        image: "images/stone.jpg",
        benefits: ["تسكين آلام الظهر", "التخلص من السموم", "استرخاء عضلي عميق"]
    },
    {
        id: 4,
        title: "مساج علاجي بكاسات الهواء",
        shortDesc: "لتخفيف التشنجات والالتهابات",
        fullDesc: "دمج احترافي بين المساج اليدوي واستخدام كاسات الهواء (Cupping) لتعزيز تدفق الدم للمناطق المصابة وتسريع عملية الشفاء الذاتي للجسم.",
        image: "images/massage.jpg",
        benefits: ["تخفيف الالتهابات الموضعية", "سحب البرودة من العضلات", "تنشيط الجهاز اللمفاوي"]
    },
    {
        id: 5,
        title: "حمام مغربي بالسنفرة",
        shortDesc: "لتنظيف البشرة وتجديد الخلايا",
        fullDesc: "جلسة عناية فائقة متكاملة باستخدام الصابون المغربي الأصلي واللوفة، متبوعة بسنفرة طبيعية لتقشير الجلد الميت ومنح الجسم نضارة وحيوية.",
        image: "images/hammam.png",
        benefits: ["إزالة الجلد الميت", "تفتيح وتوحيد لون الجسم", "تفتيح المسام وتنقيتها"]
    },
    {
        id: 6,
        title: "حجامة نبوية وعلاجية",
        shortDesc: "للتخلص من السموم واستعادة النشاط",
        fullDesc: "تُجرى على أيدي مختصين محترفين بأعلى معايير التعقيم الطبية، وتعتبر من أفضل الوسائل لتنقية الدم ورفع كفاءة الجهاز المناعي.",
        image: "images/hijama.jpg",
        benefits: ["تنقية الدم من الأخلاط الرديئة", "علاج الصداع النصفي", "رفع مناعة الجسم بشكل عام"]
    }
];

const phoneNumber = "966564508213";

// رسم بطاقات الخدمات في الصفحة الرئيسية
const servicesContainer = document.getElementById('services-container');

servicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.onclick = () => openModal(service);
    
    card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="service-img">
        <div class="service-info">
            <h3>${service.title}</h3>
            <p>${service.shortDesc}</p>
        </div>
    `;
    servicesContainer.appendChild(card);
});

// التعامل مع النافذة المنبثقة (Modal)
const modal = document.getElementById('service-modal');
const closeModalBtn = document.getElementById('close-modal');

function openModal(service) {
    // تعبئة البيانات
    document.getElementById('modal-img').src = service.image;
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-desc').textContent = service.fullDesc;
    
    // تعبئة الفوائد
    const benefitsList = document.getElementById('modal-benefits');
    benefitsList.innerHTML = '';
    service.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // تجهيز رابط الواتساب مع رسالة مخصصة
    const whatsappMessage = encodeURIComponent(`مرحباً عمالقة المساج، أرغب في حجز خدمة [ ${service.title} ] لزيارة منزلية/فندقية.`);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    document.getElementById('modal-wa-btn').href = whatsappLink;

    // إظهار النافذة
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // إعادة التمرير
}

closeModalBtn.addEventListener('click', closeModal);

// إغلاق النافذة عند الضغط خارجها
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});