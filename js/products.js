// ============ 1. بيانات المنتجات الـ 12 الكاملة والمرتبطة بنظام القاموس المركزى ============
const productsData = [
    {
        id: 1,
        category: 'interior',
        badgeKey: 'prod.bestseller', 
        nameKey: 'prod.interior',    
        descKey: 'prod1.desc',       
        img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=500' 
    },
    {
        id: 2,
        category: 'exterior',
        badgeKey: 'prod.new',        
        nameKey: 'prod.exterior',    
        descKey: 'prod2.desc',       
        img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 3,
        category: 'exterior',
        badgeKey: 'prod.premium2',   
        nameKey: 'prod.premium',     
        descKey: 'prod3.desc',       
        img: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 4,
        category: 'interior',
        badgeKey: 'prod.popular',     
        nameKey: 'prod.scented',     
        descKey: 'prod4.desc',       
        img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 5,
        category: 'exterior',
        badgeKey: 'prod.recommended', 
        nameKey: 'prod.glass',       
        descKey: 'prod5.desc',       
        img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 6,
        category: 'engine',
        badgeKey: 'prod.pro',         
        nameKey: 'prod.engine',      
        descKey: 'prod6.desc',       
        img: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 7,
        category: 'interior',
        badgeKey: 'prod.new', 
        nameKey: 'prod.interior',    
        descKey: 'prod1.desc',       
        img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=500' 
    },
    {
        id: 8,
        category: 'exterior',
        badgeKey: 'prod.bestseller',        
        nameKey: 'prod.exterior',    
        descKey: 'prod2.desc',       
        img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 9,
        category: 'exterior',
        badgeKey: 'prod.premium2',   
        nameKey: 'prod.premium',     
        descKey: 'prod3.desc',       
        img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 10,
        category: 'interior',
        badgeKey: 'prod.recommended',     
        nameKey: 'prod.scented',     
        descKey: 'prod4.desc',       
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 11,
        category: 'exterior',
        badgeKey: 'prod.popular', 
        nameKey: 'prod.glass',       
        descKey: 'prod5.desc',       
        img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500'
    },
    {
        id: 12,
        category: 'engine',
        badgeKey: 'prod.pro',         
        nameKey: 'prod.engine',      
        descKey: 'prod6.desc',       
        img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=500'
    }
];

// ============ 2. دالة بناء المنتجات (Render) ============
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = ''; 

    const filtered = productsData.filter(p => filter === 'all' || p.category === filter);

    filtered.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'product-card reveal'; 
        card.setAttribute('data-category', p.category);
        card.style.animationDelay = `${index * 0.05}s`; 
        
        card.innerHTML = `
            <div class="badge" data-i18n="${p.badgeKey}"></div>
            <img src="${p.img}" alt="Product">
            <h3 data-i18n="${p.nameKey}"></h3>
            <p data-i18n="${p.descKey}"></p>
            <button class="btn-outline" style="width:100%" data-i18n="products.all"></button>
        `;
        grid.appendChild(card);
    });

    // استدعاء نظام الترجمة لتعبئة الكروت باللغة الحالية فوراً
    if (typeof setLang === 'function') {
        setLang(localStorage.getItem('selectedLang') || 'tr');
    }

    // تفعيل الـ Observer للكروت الجديدة
    rebindIntersectionObserver();

    // إعادة ربط أحداث الـ Custom Cursor للعناصر الجديدة
    rebindCursorEvents();
}

// ============ 3. دالة التحكم بالتصفية وسلوك الأزرار ============
function filterProducts(category, btn) {
    document.querySelectorAll('.filter-controls button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const grid = document.getElementById('productGrid');
    if (grid) {
        grid.style.opacity = '0';
        setTimeout(() => {
            renderProducts(category);
            grid.style.opacity = '1';
        }, 300);
    }
}

// ============ 4. إعادة ربط تأثيرات مؤشر الفأرة المخصص ============
function rebindCursorEvents() {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursor || !cursorRing) return;

    document.querySelectorAll('.product-card, .filter-controls button, .btn-outline, a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '20px'; cursor.style.height = '20px';
            cursorRing.style.width = '52px'; cursorRing.style.height = '52px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '12px'; cursor.style.height = '12px';
            cursorRing.style.width = '36px'; cursorRing.style.height = '36px';
        });
    });
}

// ============ 5. إعادة ربط الـ Intersection Observer للأنيميشن ============
function rebindIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { 
                if (e.isIntersecting) {
                    e.target.classList.add('visible'); 
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.product-card.reveal').forEach(el => observer.observe(el));
    }
}

// التشغيل المبدئي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});