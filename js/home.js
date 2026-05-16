// ============ 1. سلايدر الصور الخلفية (Hero Slider) ============
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 4000; 

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
}

// ============ 2. عداد الأرقام (Stats Counter) ============
function initStatsCounter() {
    const stats = document.querySelectorAll('.num, .stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.innerText);
                let current = 0;
                const duration = 2000;
                const step = countTo / (duration / 16);

                const counter = setInterval(() => {
                    current += step;
                    if (current >= countTo) {
                        target.innerText = countTo + (target.innerText.includes('+') ? '+' : '');
                        clearInterval(counter);
                    } else {
                        target.innerText = Math.floor(current) + (target.innerText.includes('+') ? '+' : '');
                    }
                }, 16);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(s => observer.observe(s));
}

// ============ 3. وظيفة إرسال النموذج (خاصة بالرئيسية) ============
function submitForm() {
    const msgs = { 
        tr: 'Mesajınız gönderildi! Teşekkürler.', 
        en: 'Message sent! Thank you.', 
        ar: 'تم إرسال رسالتك! شكراً.', 
        ru: 'Сообщение отправлено! Спасибо.', 
        fr: 'Message envoyé ! Merci.' 
    };
    alert(msgs[currentLang] || msgs.tr);
}

// ============ 4. التشغيل عند التحميل ============
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initStatsCounter();
});