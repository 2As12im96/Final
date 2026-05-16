// ============ 1. دالة تفعيل ظهور العناصر عند التمرير (Intersection Observer) ============
function initAboutObserver() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // بمجرد ظهوره نلغي مراقبته لزيادة الأداء
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // مراقبة صناديق الرؤية والرسالة وكروت الإحصائيات
        document.querySelectorAll('.vision-mission .box, .stat-card').forEach(el => {
            aboutObserver.observe(el);
        });
    } else {
        // في حال كان المتصفح قديم جداً تظهر العناصر مباشرة
        document.querySelectorAll('.vision-mission .box, .stat-card').forEach(el => {
            el.classList.add('visible');
        });
    }
}

// ============ 2. ربط المؤشر المخصص بالعناصر التفاعلية الجديدة ============
function setupAboutCursorEvents() {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursor || !cursorRing) return;

    // تضخيم المؤشر عند تمريره فوق الكروت التفاعلية والروابط الأزرار
    document.querySelectorAll('.box, .stat-card, a, button, .custom-select').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursorRing.style.width = '52px';
            cursorRing.style.height = '52px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '12px';
            cursor.style.height = '12px';
            cursorRing.style.width = '36px';
            cursorRing.style.height = '36px';
        });
    });
}

// ============ 3. تشغيل الدوال عند تحميل كامل الصفحة ============
document.addEventListener('DOMContentLoaded', () => {
    initAboutObserver();
    setupAboutCursorEvents();

    // تأكيد تفعيل اللغة المحفوظة في الـ LocalStorage فوراً لعناصر الـ About
    if (typeof setLang === 'function') {
        setLang(localStorage.getItem('selectedLang') || 'tr');
    }
});