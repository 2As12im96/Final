// ============ 1. الأنيميشن عند السكرول والظهور التكتيكي للخدمات ============
function initFeaturesAnimation() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.05,
            rootMargin: '0px 0px -20px 0px'
        };

        const featuresObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    featuresObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.features-header, .feature-card').forEach(el => {
            featuresObserver.observe(el);
        });
    } else {
        document.querySelectorAll('.features-header, .feature-card').forEach(el => {
            el.classList.add('visible');
        });
    }
}

// ============ 2. تضخيم المؤشر عند تمرير الماوس فوق الكروت ============
function setupFeaturesCursor() {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursor || !cursorRing) return;

    document.querySelectorAll('.feature-card, a, .custom-select').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.width = '24px';
            cursor.style.height = '24px';
            cursorRing.style.width = '56px';
            cursorRing.style.height = '56px';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.width = '12px';
            cursor.style.height = '12px';
            cursorRing.style.width = '36px';
            cursorRing.style.height = '36px';
        });
    });
}

// ============ 3. بدء التشغيل ومزامنة لغة الموقع ============
document.addEventListener('DOMContentLoaded', () => {
    initFeaturesAnimation();
    setupFeaturesCursor();

    // تشغيل اللغة المحفوظة تلقائياً من الـ LocalStorage عبر دالة main.js
    if (typeof setLang === 'function') {
        setLang(localStorage.getItem('selectedLang') || 'tr');
    }
});