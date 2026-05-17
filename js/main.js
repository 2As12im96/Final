// ============ 1. كائن الترجمات الكامل المحدث (Translations) ============
const translations = {
  tr: {
    "nav.home":"Ana Sayfa","nav.features":"Özellikler","nav.products":"Ürünler","nav.about":"Hakkımızda","nav.contact":"İletişim","nav.sub":"Scented Cleaner Polish",
    "hero.badge":"Türkiye'nin #1 Araç Bakım Markası","hero.desc":"Aracınızı profesyonel bakım ürünlerimizle mükemmel parlaklığa kavuşturun. Kokulu temizleyici ve cila formülümüzle fark yaratın.","hero.cta1":"Ürünleri Keşfet","hero.cta2":"Hakkımızda","hero.scroll":"Keşfet",
    "stats.clients":"Müşteri","stats.products":"Ürün","stats.years":"Yıl","stats.langs":"Dil",
    "features.label":"Neden Final Fast?","features.title":"Üstün Kalite,\nProfesyonel Sonuç","features.desc":"Her ürünümüz, araç bakımında en yüksek standartları karşılamak üzere özenle formüle edilmiştir.",
    "feat1.title":"Profesyonel Formül","feat1.desc":"Araç yüzeylerine özel geliştirilmiş ileri teknoloji temizlik formülü. Hem temizler hem korur.",
    "feat2.title":"Kalıcı Koku","feat2.desc":"Temizlerken aracınıza uzun süre kalıcı, ferah ve hoş koku bırakır. Her sürüş keyifli olur.",
    "feat3.title":"Yüzey Koruma","feat3.desc":"Cilayı korur, hafif çizikleri gizler ve parlaklığı uzun süre tutar. UV koruması ile renk solması önlenir.",
    "feat4.title":"Hızlı Uygulama","feat4.desc":"Kolay uygulama, hızlı sonuç. Sadece birkaç dakika içinde aracınız pırıl pırıl olur.",
    "feat5.title":"Çevre Dostu","feat5.desc":"Biyolojik olarak parçalanabilir formül. Çevreye duyarlı üretim süreçleri ile doğayı koruyoruz.",
    "feat6.title":"Ödüllü Marka","feat6.desc":"Türk otomotiv sektöründe en iyi araç bakım ürünleri ödülü sahibi. Güvenen binlerce müşteri.",
    "products.label":"Koleksiyonumuz","products.title":"Öne Çıkan\nÜrünlerimiz","products.all":"Tümünü Gör","products.filter_all":"Hepsi",
    "prod.interior":"İç Mekan","prod.exterior":"Dış Mekan","prod.premium":"Premium","prod.scented":"Kokulu Seri","prod.glass":"Cam Bakım","prod.engine":"Motor Bakım",
    "prod1.desc":"Gösterge paneli, plastik yüzeyler ve deri için özel formül. Silinmez parlaklık ve koruma.","prod2.desc":"Derin temizlik formülü ile boya, kir ve yağı etkili biçimde uzaklaştırır. Boya dostu.","prod3.desc":"Kristal balmumu koruyucu. 6 aya kadar koruma sağlar. Yağmur suyu itici nano teknoloji.","prod4.desc":"Özel koku karışımıyla temizlik ve ferahlık bir arada. 5 farklı koku seçeneği mevcut.","prod5.desc":"Cam yüzeyler için özel formül. Çizik giderici ve yağmur itici özellik. Su izlerini yok eder.","prod6.desc":"Motor bölmesi için güçlü temizleyici. Yağ ve kiri çözer, plastik ve metal yüzeyleri korur.",
    "prod.bestseller":"En Çok Satan","prod.new":"Yeni Ürün","prod.premium2":"Premium","prod.popular":"Popüler","prod.recommended":"Önerilen","prod.pro":"Pro Serisi",
    "about.label":"Hakkımızda","about.title":"Araç Bakımında\nTürkiye'nin Öncüsü","about.desc":"Final Fast, 2021 yılında İstanbul'da kurulmuş, araç bakım ürünleri alanında uzmanlaşmış bir Türk markasıdır. Kalite, yenilik ve müşteri memnuniyetini ön planda tutarak sektörde önemli bir yer edindik.","about.vision":"Vizyonumuz","about.mission":"Misyonumuz","about.founded":"Kuruluş Yılı","about.li1":"ISO sertifikalı üretim tesisi ve kalite kontrol süreçleri","about.li2":"Araştırma ve geliştirme odaklı ürün formülasyonu","about.li3":"Türkiye genelinde 500'den fazla bayii ve satış noktası","about.li4":"İhracat kalitesinde, dünya standartlarında üretim","about.li5":"7/24 müşteri destek hattı ve teknik danışmanlık",
    "about.vision_text":"Küresel standartlarda, çevre dostu ve en son teknolojiye sahip araç bakım formülleri geliştirerek dünya çapında tanınan lider bir marka olmak.",
    "about.mission_text":"Müşterilerimize araçlarını ilk günkü ihtişamına kavuşturacak en güvenilir, yüksek performanslı ve kullanımı kolay temizlik ve cila çözümlerini sunmak.",
    "about.why_us":"Neden Final Fast?",
    "contact.label":"İletişim","contact.title":"Bizimle\nİletişime Geçin","contact.addr":"Adres","contact.phone":"Telefon","contact.email":"E-posta","contact.hours":"Çalışma Saatleri","contact.hoursval":"Pazartesi – Cuma: 09:00 – 18:00",
    "form.name":"Ad Soyad","form.email":"E-posta","form.subject":"Konu","form.msg":"Mesaj","form.send":"Gönder","form.opt1":"Ürün Bilgisi","form.opt2":"Bayilik","form.opt3":"Teknik Destek","form.opt4":"Diğer",
    "footer.desc":"Türkiye'nin lider araç bakım ürünleri markası. Kalite ve yenilikle aracınıza en iyi bakımı sunuyoruz.","footer.pages":"Sayfalar","footer.products":"Ürünler","footer.contact":"İletişim","footer.rights":"Tüm hakları saklıdır.","footer.made":"Türkiye'de üretilmiştir 🇹🇷",
    "meta.title":"Final Fast | Araç Bakım Ürünleri – Kokulu Temizleyici & Cila","meta.desc":"Final Fast, Türkiye'nin en iyi araç bakım ürünleri markası. Kokulu temizleyici, cila ve koruyucu ürünler ile aracınızı parlatın.","meta.kw":"araç bakım, araba cilası, kokulu temizleyici, oto temizlik, Final Fast"
  },
  en: {
    "nav.home":"Home","nav.features":"Features","nav.products":"Products","nav.about":"About","nav.contact":"Contact","nav.sub":"Scented Cleaner Polish",
    "hero.badge":"Turkey's #1 Car Care Brand","hero.desc":"Give your vehicle a perfect shine with our professional car care products. Make a difference with our scented cleaner and polish formula.","hero.cta1":"Explore Products","hero.cta2":"About Us","hero.scroll":"Explore",
    "stats.clients":"Clients","stats.products":"Products","stats.years":"Years","stats.langs":"Languages",
    "features.label":"Why Final Fast?","features.title":"Superior Quality,\nProfessional Results","features.desc":"Each of our products is carefully formulated to meet the highest standards in car care.",
    "feat1.title":"Professional Formula","feat1.desc":"Advanced technology cleaning formula specially developed for vehicle surfaces. Cleans and protects.","feat2.title":"Lasting Scent","feat2.desc":"Leaves a long-lasting, fresh, and pleasant fragrance in your vehicle while cleaning.","feat3.title":"Surface Protection","feat3.desc":"Protects the paint, hides light scratches, and maintains shine for a long time.","feat4.title":"Fast Application","feat4.desc":"Easy to apply, fast results. Your car shines in just a few minutes.","feat5.title":"Eco-Friendly","feat5.desc":"Biodegradable formula. We protect nature with environmentally responsible production.","feat6.title":"Award-Winning","feat6.desc":"Winner of best car care products award in Turkish automotive sector.",
    "products.label":"Our Collection","products.title":"Featured\nProducts","products.all":"View All","products.filter_all":"All",
    "prod.interior":"Interior","prod.exterior":"Exterior","prod.premium":"Premium","prod.scented":"Scented Series","prod.glass":"Glass Care","prod.engine":"Engine Care",
    "prod1.desc":"Special formula for dashboard, plastic surfaces and leather. Lasting shine and protection.","prod2.desc":"Deep cleaning formula effectively removes paint, dirt and grease. Paint-friendly.","prod3.desc":"Crystal wax protector. Provides up to 6 months of protection. Rain-repelling nano technology.","prod4.desc":"Cleaning and freshness combined with a special fragrance blend. 5 scent options available.","prod5.desc":"Special formula for glass surfaces. Scratch-removing and rain-repelling properties.","prod6.desc":"Powerful cleaner for engine bay. Dissolves oil and dirt, protects plastic and metal surfaces.",
    "prod.bestseller":"Best Seller","prod.new":"New","prod.premium2":"Premium","prod.popular":"Popular","prod.recommended":"Recommended","prod.pro":"Pro Series",
    "about.label":"About Us","about.title":"Turkey's Pioneer\nin Car Care","about.desc":"Final Fast is a Turkish brand founded in Istanbul in 2021, specializing in car care products. We have established an important position in the industry by prioritizing quality, innovation and customer satisfaction.","about.vision":"Our Vision","about.mission":"Our Mission","about.founded":"Founded","about.li1":"ISO certified production facility and quality control processes","about.li2":"Research and development-oriented product formulation","about.li3":"More than 500 dealers and sales points across Turkey","about.li4":"Export quality, world-standard production","about.li5":"24/7 customer support line and technical consulting",
    "about.vision_text":"To become a globally recognized leading brand by developing world-class, eco-friendly, and cutting-edge car care formulas.",
    "about.mission_text":"To provide our customers with the most reliable, high-performance, and easy-to-use cleaning and polishing solutions to restore vehicles to their original glory.",
    "about.why_us":"Why Final Fast?",
    "contact.label":"Contact","contact.title":"Get In\nTouch","contact.addr":"Address","contact.phone":"Phone","contact.email":"Email","contact.hours":"Working Hours","contact.hoursval":"Monday – Friday: 09:00 – 18:00",
    "form.name":"Full Name","form.email":"Email","form.subject":"Subject","form.msg":"Message","form.send":"Send","form.opt1":"Product Info","form.opt2":"Dealership","form.opt3":"Technical Support","form.opt4":"Other",
    "footer.desc":"Turkey's leading car care products brand. We provide the best care for your vehicle with quality and innovation.","footer.pages":"Pages","footer.products":"Products","footer.contact":"Contact","footer.rights":"All rights reserved.","footer.made":"Made in Turkey 🇹🇷",
    "meta.title":"Final Fast | Car Care Products – Scented Cleaner & Polish","meta.desc":"Final Fast, Turkey's best car care products brand. Polish your car with scented cleaner, polish and protective products.","meta.kw":"car care, car polish, scented cleaner, auto cleaning, Final Fast Turkey"
  },
  ar: {
    "nav.home":"الرئيسية","nav.features":"المميزات","nav.products":"المنتجات","nav.about":"من نحن","nav.contact":"تواصل معنا","nav.sub":"منظف ومُلمِّع عطري",
    "hero.badge":"العلامة التجارية #1 لعناية السيارات في تركيا","hero.desc":"أعطِ سيارتك لمعاناً مثالياً مع منتجاتنا الاحترافية. اصنع الفرق مع المنظف العطري وصيغة التلميع الخاصة بنا.","hero.cta1":"استكشف المنتجات","hero.cta2":"من نحن","hero.scroll":"اكتشف",
    "stats.clients":"عميل","stats.products":"منتج","stats.years":"سنوات","stats.langs":"لغات",
    "features.label":"لماذا Final Fast؟","features.title":"جودة فائقة،\nنتائج احترافية","features.desc":"كل منتجاتنا مُصاغة بعناية لتلبية أعلى معايير العناية بالسيارات.",
    "feat1.title":"صيغة احترافية","feat1.desc":"صيغة تنظيف متطورة مطورة خصيصاً لأسطح المركبات. تنظف وتحمي في آنٍ واحد.","feat2.title":"عطر دائم","feat2.desc":"يترك في سيارتك عطراً منعشاً وممتعاً يدوم طويلاً أثناء التنظيف.","feat3.title":"حماية السطح","feat3.desc":"يحمي الطلاء، يخفي الخدوش الخفيفة، ويحافظ على اللمعان لفترة طويلة.","feat4.title":"تطبيق سريع","feat4.desc":"سهل التطبيق، نتائج سريعة. سيارتك تلمع في دقائق معدودة.","feat5.title":"صديق للبيئة","feat5.desc":"صيغة قابلة للتحلل البيولوجي. نحمي الطبيعة بإنتاج مسؤول بيئياً.","feat6.title":"علامة حائزة على جوائز","feat6.desc":"حائز على جائزة أفضل منتجات عناية بالسيارات في قطاع السيارات التركي.",
    "products.label":"مجموعتنا","products.title":"منتجاتنا\nالمميزة","products.all":"عرض الكل","products.filter_all":"الكل",
    "prod.interior":"داخلي","prod.exterior":"خارجي","prod.premium":"بريميوم","prod.scented":"السلسلة العطرية","prod.glass":"عناية الزجاج","prod.engine":"عناية المحرك",
    "prod1.desc":"صيغة خاصة للوحة القيادة والأسطح البلاستيكية والجلد. لمعان لا يمحى وحماية دائمة.","prod2.desc":"صيغة التنظيف العميق تزيل الطلاء والأوساخ والزيوت بفعالية. لطيف على الطلاء.","prod3.desc":"واقٍ بالشمع الكريستالي. يوفر حماية تصل إلى 6 أشهر. تقنية نانو طاردة للمطر.","prod4.desc":"نظافة وانتعاش في آنٍ واحد مع مزيج عطري خاص. 5 خيارات عطر متاحة.","prod5.desc":"صيغة خاصة لأسطح الزجاج. خصائص إزالة الخدوش وطرد المطر. يزيل آثار المياه.","prod6.desc":"منظف قوي لحجرة المحرك. يذيب الزيت والأوساخ، يحمي الأسطح البلاستيكية والمعدنية.",
    "prod.bestseller":"الأكثر مبيعاً","prod.new":"جديد","prod.premium2":"بريميوم","prod.popular":"الأكثر شعبية","prod.recommended":"موصى به","prod.pro":"سلسلة برو",
    "about.label":"من نحن","about.title":"رائد عناية السيارات\nفي تركيا","about.desc":"Final Fast علامة تركية تأسست في إسطنبول عام 2021، متخصصة في منتجات عناية السيارات. رسّخنا مكانتنا في الصناعة بتقديم الجودة والابتكار ورضا العملاء.","about.vision":"رؤيتنا","about.mission":"رسالتنا","about.founded":"سنة التأسيس","about.li1":"منشأة إنتاج معتمدة ISO وعمليات ضبط الجودة","about.li2":"صياغة منتجات تركز على البحث والتطوير","about.li3":"أكثر من 500 وكيل ونقطة بيع في أنحاء تركيا","about.li4":"إنتاج بجودة التصدير وفق المعايير العالمية","about.li5":"خط دعم العملاء والاستشارات التقنية على مدار الساعة",
    "about.vision_text":"أن نكون علامة تجارية رائدة ومعترف بها عالمياً من خلال تطوير تركيبات العناية بالسيارات الصديقة للبيئة والأكثر تقدماً وفقاً للمعايير الدولية.",
    "about.mission_text":"تزويد عملائنا بحلول التنظيف والتلميع الأكثر موثوقية، عالية الأداء، وسهلة الاستخدام لاستعادة المظهر الأصلي والفخم لسياراتهم.",
    "about.why_us":"لماذا فاينال فاست؟",
    "contact.label":"تواصل معنا","contact.title":"تواصل\nمعنا","contact.addr":"العنوان","contact.phone":"الهاتف","contact.email":"البريد الإلكتروني","contact.hours":"ساعات العمل","contact.hoursval":"الاثنين – الجمعة: 09:00 – 18:00",
    "form.name":"الاسم الكامل","form.email":"البريد الإلكتروني","form.subject":"الموضوع","form.msg":"الرسالة","form.send":"إرسال","form.opt1":"معلومات المنتج","form.opt2":"الوكالة","form.opt3":"الدعم التقني","form.opt4":"أخرى",
    "footer.desc":"العلامة التجارية الرائدة في تركيا لمنتجات عناية السيارات. نقدم أفضل رعاية لسيارتك بالجودة والابتكار.","footer.pages":"الصفحات","footer.products":"المنتجات","footer.contact":"تواصل","footer.rights":"جميع الحقوق محفوظة.","footer.made":"صُنع في تركيا 🇹🇷",
    "meta.title":"Final Fast | منتجات عناية السيارات – منظف ومُلمِّع عطري","meta.desc":"Final Fast، أفضل علامة تركية لمنتجات عناية السيارات. لمّع سيارتك بالمنظف العطري والمُلمِّع والمنتجات الواقية.","meta.kw":"عناية سيارات، تلميع سيارة، منظف عطري، تنظيف سيارة، Final Fast تركيا"
  },
  ru: {
    "nav.home":"Главная","nav.features":"Преимущества","nav.products":"Продукты","nav.about":"О нас","nav.contact":"Контакты","nav.sub":"Ароматный очиститель-полироль",
    "hero.badge":"Бренд автохимии №1 в Турции","hero.desc":"Придайте вашему автомобилю безупречный блеск с нашими профессиональными средствами по уходу. Выделитесь с нашим ароматным очистителем и полиролью.","hero.cta1":"Смотреть продукты","hero.cta2":"О компании","hero.scroll":"Исследовать",
    "stats.clients":"Клиентов","stats.products":"Продуктов","stats.years":"Лет","stats.langs":"Языков",
    "features.label":"Почему Final Fast?","features.title":"Превосходное качество,\nПрофессиональный результат","features.desc":"Каждый наш продукт тщательно разработан для соответствия высочайшим стандартам ухода за автомобилем.",
    "feat1.title":"Профессиональная формула","feat1.desc":"Передовая технология очистки, разработанная специально для поверхностей автомобиля.","feat2.title":"Стойкий аромат","feat2.desc":"Оставляет долговременный, свежий и приятный аромат в вашем автомобиле.","feat3.title":"Защита поверхности","feat3.desc":"Защищает лакокрасочное покрытие, скрывает лёгкие царапины, сохраняет блеск.","feat4.title":"Быстрое применение","feat4.desc":"Простое применение, быстрый результат. Ваш автомобиль блестит за несколько минут.","feat5.title":"Экологичный","feat5.desc":"Биоразлагаемая формула. Защищаем природу с экологически ответственным производством.","feat6.title":"Удостоенный наград","feat6.desc":"Победитель премии за лучшую автохимию в турецком автомобильном секторе.",
    "products.label":"Наша коллекция","products.title":"Популярные\nпродукты","products.all":"Смотреть все","products.filter_all":"Все",
    "prod.interior":"Интерьер","prod.exterior":"Экстерьер","prod.premium":"Премиум","prod.scented":"Ароматная серия","prod.glass":"Уход за стёклами","prod.engine":"Уход за двигателем",
    "prod1.desc":"Специальная формула для приборной панели, plasticовых поверхностей и кожи.","prod2.desc":"Формула глубокой очистки эффективно удаляет грязь и масло. Безопасна для краски.","prod3.desc":"Кристальный восковой защитник. Защита до 6 месяцев. Нано-технология отталкивания дождя.","prod4.desc":"Очистка и свежесть в сочетании со специальной смесью ароматов. 5 вариантов аромата.","prod5.desc":"Специальная формула для стеклянных поверхностей. Удаление царапин и отталкивание дождя.","prod6.desc":"Мощный очиститель для моторного отсека. Растворяет масло и грязь, защищает поверхности.",
    "prod.bestseller":"Бестселлер","prod.new":"Новинка","prod.premium2":"Премиум","prod.popular":"Популярный","prod.recommended":"Рекомендуем","prod.pro":"Серия Pro",
    "about.label":"О нас","about.title":"Пионер ухода за\nавтомобилями в Турции","about.desc":"Final Fast — турецкий бренд, основанный в Стамбуле в 2021 году, специализирующийся на средствах по уходу за автомобилями.","about.vision":"Наше видение","about.mission":"Наша миссия","about.founded":"Год основания","about.li1":"Сертифицированное по ISO производство и контроль качества","about.li2":"Разработка продуктов с акцентом на исследования","about.li3":"Более 500 дилеров и точек продаж по всей Турции","about.li4":"Производство мирового класса экспортного качества","about.li5":"Круглосуточная техническая поддержка клиентов",
    "about.vision_text":"Стать всемирно признанным ведущим брендом путем разработки экологически чистых и передовых формул ухода за автомобилями мирового уровня.",
    "about.mission_text":"Предоставить нашим клиентам самые надежные, высокоэффективные и простые в использовании решения для очистки и полировки, чтобы вернуть автомобилям их первозданный блеск.",
    "about.why_us":"Почему Final Fast?",
    "contact.label":"Контакты","contact.title":"Свяжитесь\nс нами","contact.addr":"Адрес","contact.phone":"Телефон","contact.email":"Email","contact.hours":"Рабочие часы","contact.hoursval":"Понедельник – Пятница: 09:00 – 18:00",
    "form.name":"Полное имя","form.email":"Email","form.subject":"Тема","form.msg":"Сообщение","form.send":"Отправить","form.opt1":"Информация о продукте","form.opt2":"Дилерство","form.opt3":"Техподдержка","form.opt4":"Другое",
    "footer.desc":"Ведущий бренд автохимии в Турции. Лучший уход за вашим автомобилем.","footer.pages":"Страницы","footer.products":"Продукты","footer.contact":"Контакты","footer.rights":"Все права защищены.","footer.made":"Сделано в Турции 🇹🇷",
    "meta.title":"Final Fast | Средства по уходу за авто – Ароматный очиститель","meta.desc":"Final Fast — лучший турецкий бренд автохимии. Полируйте автомобиль ароматным очистителем.","meta.kw":"уход за авто, полироль для машины, ароматный очиститель, Final Fast Турция"
  },
  fr: {
    "nav.home":"Accueil","nav.features":"Caractéristiques","nav.products":"Produits","nav.about":"À propos","nav.contact":"Contact","nav.sub":"Nettoyant-Polish Parfumé",
    "hero.badge":"La marque #1 de soins auto en Turquie","hero.desc":"Donnez à votre véhicule un éclat parfait avec nos produits professionnels. Faites la différence avec notre nettoyant parfumé et notre formule polish.","hero.cta1":"Découvrir les produits","hero.cta2":"À propos","hero.scroll":"Découvrir",
    "stats.clients":"Clients","stats.products":"Produits","stats.years":"Ans","stats.langs":"Langues",
    "features.label":"Pourquoi Final Fast?","features.title":"Qualité supérieure,\nRésultats professionnels","features.desc":"Chacun de nos produits est soigneusement formulé pour répondre aux plus hauts standards de l'entretien automobile.",
    "feat1.title":"Formule professionnelle","feat1.desc":"Formule de nettoyage avancée développée spécialement pour les surfaces de véhicules.","feat2.title":"Parfum durable","feat2.desc":"Laisse un parfum frais et agréable qui dure longtemps dans votre véhicule.","feat3.title":"Protection de surface","feat3.desc":"Protège la peinture, cache les légères rayures et maintient l'éclat longtemps.","feat4.title":"Application rapide","feat4.desc":"Facile à appliquer, résultats rapides. Votre voiture brille en quelques minutes.","feat5.title":"Écologique","feat5.desc":"Formule biodégradable. Nous protégeons la nature avec une production responsable.","feat6.title":"Marque primée","feat6.desc":"Lauréat du prix des meilleurs produits de soins auto dans le secteur automobile turc.",
    "products.label":"Notre collection","products.title":"Nos produits\nvedettes","products.all":"Voir tout","products.filter_all":"Tout",
    "prod.interior":"Intérieur","prod.exterior":"Extérieur","prod.premium":"Premium","prod.scented":"Série Parfumée","prod.glass":"Soin des vitres","prod.engine":"Soin moteur",
    "prod1.desc":"Formule spéciale pour tableau de bord, surfaces plastiques et cuir. Brillance et protection durables.","prod2.desc":"La formule nettoyage en profondeur élimine efficacement peinture, saleté et graisse.","prod3.desc":"Protecteur à la cire cristalline. Fournit jusqu'à 6 mois de protection. Nano-technologie hydrofuge.","prod4.desc":"Nettoyage et fraîcheur combinés avec un mélange de parfums spéciaux. 5 options de parfum disponibles.","prod5.desc":"Formule spéciale pour surfaces vitrées. Propriétés anti-rayures et hydrofuges.","prod6.desc":"Nettoyant puissant pour compartiment moteur. Dissout l'huile et la saleté, protects les surfaces.",
    "prod.bestseller":"Meilleure vente","prod.new":"Nouveau","prod.premium2":"Premium","prod.popular":"Populaire","prod.recommended":"Recommandé","prod.pro":"Série Pro",
    "about.label":"À propos","about.title":"Pionnier du soin auto\nen Turquie","about.desc":"Final Fast est une marque turque fondée à Istanbul en 2021, spécialisée dans les produits de soins automobile. Nous avons établi une position importante dans l'industrie en priorisant qualité et innovation.","about.vision":"Notre Vision","about.mission":"Our Mission","about.founded":"Fondée en","about.li1":"Installation de production certifiée ISO et processus de contrôle qualité","about.li2":"Formulation de produits axée sur la recherche et le développement","about.li3":"Plus de 500 concessionnaires et points de vente en Turquie","about.li4":"Production de qualité export aux normes mondiales","about.li5":"Ligne de support client et conseil technique 24h/24",
    "about.vision_text":"Devenir une marque leader mondialement reconnue en développant des formules de soin automobile haut de gamme, écologiques et à la pointe de la technologie.",
    "about.mission_text":"Offrir à nos clients des solutions de nettoyage et de polissage les plus fiables, performantes et faciles à utiliser pour redonner aux véhicules leur éclat d'origine.",
    "about.why_us":"Pourquoi Final Fast?",
    "contact.label":"Contact","contact.title":"Contactez-\nnous","contact.addr":"Adresse","contact.phone":"Téléphone","contact.email":"E-mail","contact.hours":"Heures d'ouverture","contact.hoursval":"Lundi – Vendredi: 09:00 – 18:00",
    "form.name":"Nom complet","form.email":"E-mail","form.subject":"Sujet","form.msg":"Message","form.send":"Envoyer","form.opt1":"Info produit","form.opt2":"Concession","form.opt3":"Support technique","form.opt4":"Autre",
    "footer.desc":"La marque leader de soins auto en Turquie. Nous offrons le meilleur entretien pour votre véhicule.","footer.pages":"Pages","footer.products":"Produits","footer.contact":"Contact","footer.rights":"Tous droits réservés.","footer.made":"Fabriqué en Turquie 🇹🇷",
    "meta.title":"Final Fast | Produits de soins auto – Nettoyant-Polish Parfumé","meta.desc":"Final Fast, la meilleure marque turque de soins automobile. Polissez votre voiture avec nettoyant parfumé.","meta.kw":"soin auto, polish voiture, nettoyant parfumé, nettoyage auto, Final Fast Turquie"
  }
};

// ============ 2. متغيرات الحالة العامة ============
let currentLang = localStorage.getItem('selectedLang') || 'tr';

const countryLangMap = {
    TR: "tr", GB: "en", US: "en", AU: "en", CA: "en",
    SA: "ar", EG: "ar", AE: "ar", MA: "ar", DZ: "ar", TN: "ar", IQ: "ar", 
    JO: "ar", KW: "ar", QA: "ar", LB: "ar", LY: "ar", SD: "ar", SY: "ar", YE: "ar",
    RU: "ru", BY: "ru", KZ: "ru", UA: "ru",
    FR: "fr", BE: "fr", CH: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr", CM: "fr"
};

// ============ 3. دوال اللغة والترجمة (Core) ============
async function detectLanguage() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && translations[urlLang]) {
        setLang(urlLang);
        return;
    }

    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && translations[savedLang]) {
        setLang(savedLang);
        return;
    }

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const detectedLang = countryLangMap[data.country_code] || 'tr';
        setLang(detectedLang);
    } catch (error) {
        setLang('tr');
    }
}

function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);

    const t = translations[lang];
    const isRTL = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    if (t['meta.title']) document.title = t['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t['meta.desc']) metaDesc.content = t['meta.desc'];
    
    updateDropdownUI(lang);
}

function updateDropdownUI(lang) {
    const flagMap = {
        tr: { url: 'https://flagcdn.com/w20/tr.png', text: 'TR' },
        en: { url: 'https://flagcdn.com/w20/us.png', text: 'EN' },
        ar: { url: 'https://flagcdn.com/w20/eg.png', text: 'AR' },
        ru: { url: 'https://flagcdn.com/w20/ru.png', text: 'RU' },
        fr: { url: 'https://flagcdn.com/w20/fr.png', text: 'FR' }
    };
    const config = flagMap[lang];
    if (config) {
        const currentFlag = document.getElementById('currentFlag');
        const currentLangText = document.getElementById('currentLangText');
        if (currentFlag) currentFlag.src = config.url;
        if (currentLangText) currentLangText.textContent = config.text;
    }
}

function selectLang(lang, flagUrl, text) {
    setLang(lang);
}

// ============ 4. دوال واجهة المستخدم العامة (UI) ============
function initCustomSelect() {
    const customSelect = document.getElementById('customSelect');
    if (customSelect) {
        customSelect.addEventListener('click', e => {
            customSelect.classList.toggle('active');
            e.stopPropagation();
        });
    }
    document.addEventListener('click', () => {
        if (customSelect) customSelect.classList.remove('active');
    });
}

function initCursor() {
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursor || !cursorRing) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animate() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animate);
    }
    animate();

    document.querySelectorAll('a, button').forEach(el => {
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

function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) mobileNav.classList.toggle('open');
}

// ============ 5. تهيئة التشغيل عند التحميل ============
document.addEventListener('DOMContentLoaded', () => {
    initCustomSelect();
    initCursor();
    initNavbar();
    detectLanguage();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .feature-card, .product-card').forEach(el => observer.observe(el));
});

//     tr: {
//         "nav.home":"Ana Sayfa","nav.features":"Özellikler","nav.products":"Ürünler","nav.about":"Hakkımızda","nav.contact":"İletişim","nav.sub":"Scented Cleaner Polish",
//         "hero.badge":"Türkiye'nin #1 Araç Bakım Markası","hero.desc":"Aracınızı profesyonel bakım ürünlerimizle mükemmel parlaklığa kavuşturun. Kokulu temizleyici ve cila formülümüzle fark yaratın.","hero.cta1":"Ürünleri Keşfet","hero.cta2":"Hakkımızda","hero.scroll":"Keşfet",
//         "stats.clients":"Müşteri","stats.products":"Ürün","stats.years":"Yıl","stats.langs":"Dil",
//         "features.label":"Neden Final Fast?","features.title":"Üstün Kalite,\nProfesyonel Sonuç","features.desc":"Her ürünümüz, araç bakımında en highest standartları karşılamak üzere özenle formüle edilmiştir.",
//         "feat1.title":"Profesyonel Formül","feat1.desc":"Araç yüzeylerine özel geliştirilmiş ileri teknoloji temizlik formülü. Hem temizler hem korur.",
//         "feat2.title":"Kalıcı Koku","feat2.desc":"Temizlerken aracınıza uzun süre kalıcı, ferah ve hoş koku bırakır. Her sürüş keyifli olur.",
//         "feat3.title":"Yüzey Koruma","feat3.desc":"Cilayı korur, hafif çizikleri gizler ve parlaklığı uzun süre tutar. UV koruması ile renk solması önlenir.",
//         "feat4.title":"Hızlı Uygulama","feat4.desc":"Kolay uygulama, hızlı sonuç. Sadece birkaç dakika içinde aracınız pırıl pırıl olur.",
//         "feat5.title":"Çevre Dostu","feat5.desc":"Biyolojik olarak parçalanabilir formül. Çevreye duyarlı üretim süreçleri ile doğayı koruyoruz.",
//         "feat6.title":"Ödüllü Marka","feat6.desc":"Türk otomotiv sektöründe en iyi araç bakım ürünleri ödülü sahibi. Güvenen binlerce müşteri.",
//         "products.label":"Koleksiyonumuz","products.title":"Öne Çıkan\nÜrünlerimiz","products.all":"Tümünü Gör",
//         "prod.interior":"İç Mekan","prod.exterior":"Dış Mekan","prod.premium":"Premium","prod.scented":"Kokulu Seri","prod.glass":"Cam Bakım","prod.engine":"Motor Bakım",
//         "prod1.desc":"Gösterge paneli, plastik yüzeyler ve deri için özel formül. Silinmez parlaklık ve koruma.","prod2.desc":"Derin temizlik formülü ile boya, kir ve yağı etkili biçimde uzaklaştırır. Boya dostu.","prod3.desc":"Kristal balmumu koruyucu. 6 aya kadar koruma sağlar. Yağmur suyu itici nano teknoloji.","prod4.desc":"Özel koku karışımıyla temizlik ve ferahlık bir arada. 5 farklı koku seçeneği mevcut.","prod5.desc":"Cam yüzeyler için özel formül. Çizik giderici ve yağmur itici özellik. Su izlerini yok eder.","prod6.desc":"Motor bölmesi için güçlü temizleyici. Yağ ve kiri çözer, plastik ve metal yüzeyleri korur.",
//         "prod.bestseller":"En Çok Satan","prod.new":"Yeni Ürün","prod.premium2":"Premium","prod.popular":"Popüler","prod.recommended":"Önerilen","prod.pro":"Pro Serisi",
//         "about.label":"Hakkımızda","about.title":"Araç Bakımında\nTürkiye'nin Öncüsü","about.desc":"Final Fast, 2021 yılında İstanbul'دا kurulmuş, araç bakım ürünleri alanında uzmanlaşmış bir Türk markasıdır. Kalite, yenilik ve müşteri memnuniyetini ön planda tutarak sektörde önemli bir yer edindik.","about.founded":"Kuruluş Yılı","about.li1":"ISO sertifikalı üretim tesisi ve kalite kontrol süreçleri","about.li2":"Araştırma ve geliştirme odaklı ürün formülasyonu","about.li3":"Türkiye genelinde 500'den fazla bayii ve satış noktası","about.li4":"İhracat kalitesinde, dünya standartlarında üretim","about.li5":"7/24 müşteri destek hattı ve teknik danışmanlık",
//         "contact.label":"İletişim","contact.title":"Bizimle\nİletişime Geçin","contact.addr":"Adres","contact.phone":"Telefon","contact.email":"E-posta","contact.hours":"Çalışma Saatleri","contact.hoursval":"Pazartesi – Cuma: 09:00 – 18:00",
//         "form.name":"Ad Soyad","form.email":"E-posta","form.subject":"Konu","form.msg":"Mesaj","form.send":"Gönder","form.opt1":"Ürün Bilgisi","form.opt2":"Bayilik","form.opt3":"Teknik Destek","form.opt4":"Diğer",
//         "footer.desc":"Türkiye'nin lider araç bakım ürünleri markası. Kalite ve yenilikle aracınıza en iyi bakımı sunuyoruz.","footer.pages":"Sayfalar","footer.products":"Ürünler","footer.contact":"İletişim","footer.rights":"Tüm hakları saklıdır.","footer.made":"Türkiye'de üretilmiştir 🇹🇷",
//         "meta.title":"Final Fast | Araç Bakım Ürünleri – Kokulu Temizleyici & Cila","meta.desc":"Final Fast, Türkiye'nin en iyi araç bakım ürünleri markası. Kokulu temizleyici, cila ve koruyucu ürünler ile aracınızı parlatın.","meta.kw":"araç bakım, araba cilası, kokulu temizleyici, oto temizlik, Final Fast"
//     },
//     en: {
//         "nav.home":"Home","nav.features":"Features","nav.products":"Products","nav.about":"About","nav.contact":"Contact","nav.sub":"Scented Cleaner Polish",
//         "hero.badge":"Turkey's #1 Car Care Brand","hero.desc":"Give your vehicle a perfect shine with our professional car care products. Make a difference with our scented cleaner and polish formula.","hero.cta1":"Explore Products","hero.cta2":"About Us","hero.scroll":"Explore",
//         "stats.clients":"Clients","stats.products":"Products","stats.years":"Years","stats.langs":"Languages",
//         "features.label":"Why Final Fast?","features.title":"Superior Quality,\nProfessional Results","features.desc":"Each of our products is carefully formulated to meet the highest standards in car care.",
//         "feat1.title":"Professional Formula","feat1.desc":"Advanced technology cleaning formula specially developed for vehicle surfaces. Cleans and protects.","feat2.title":"Lasting Scent","feat2.desc":"Leaves a long-lasting, fresh, and pleasant fragrance in your vehicle while cleaning.","feat3.title":"Surface Protection","feat3.desc":"Protects the paint, hides light scratches, and maintains shine for a long time.","feat4.title":"Fast Application","feat4.desc":"Easy to apply, fast results. Your car shines in just a few minutes.","feat5.title":"Eco-Friendly","feat5.desc":"Biodegradable formula. We protect nature with environmentally responsible production.","feat6.title":"Award-Winning","feat6.desc":"Winner of best car care products award in Turkish automotive sector.",
//         "products.label":"Our Collection","products.title":"Featured\nProducts","products.all":"View All",
//         "prod.interior":"Interior","prod.exterior":"Exterior","prod.premium":"Premium","prod.scented":"Scented Series","prod.glass":"Glass Care","prod.engine":"Engine Care",
//         "prod1.desc":"Special formula for dashboard, plastic surfaces and leather. Lasting shine and protection.","prod2.desc":"Deep cleaning formula effectively removes paint, dirt and grease. Paint-friendly.","prod3.desc":"Crystal wax protector. Provides up to 6 months of protection. Rain-repelling nano technology.","prod4.desc":"Cleaning and freshness combined with a special fragrance blend. 5 scent options available.","prod5.desc":"Special formula for glass surfaces. Scratch-removing and rain-repelling properties.","prod6.desc":"Powerful cleaner for engine bay. Dissolves oil and dirt, protects plastic and metal surfaces.",
//         "prod.bestseller":"Best Seller","prod.new":"New","prod.premium2":"Premium","prod.popular":"Popular","prod.recommended":"Recommended","prod.pro":"Pro Series",
//         "about.label":"About Us","about.title":"Turkey's Pioneer\nin Car Care","about.desc":"Final Fast is a Turkish brand founded in Istanbul in 2021, specializing in car care products. We have established an important position in the industry by prioritizing quality, innovation and customer satisfaction.","about.founded":"Founded","about.li1":"ISO certified production facility and quality control processes","about.li2":"Research and development-oriented product formulation","about.li3":"More than 500 dealers and sales points across Turkey","about.li4":"Export quality, world-standard production","about.li5":"24/7 customer support line and technical consulting",
//         "contact.label":"Contact","contact.title":"Get In\nTouch","contact.addr":"Address","contact.phone":"Phone","contact.email":"Email","contact.hours":"Working Hours","contact.hoursval":"Monday – Friday: 09:00 – 18:00",
//         "form.name":"Full Name","form.email":"Email","form.subject":"Subject","form.msg":"Message","form.send":"Send","form.opt1":"Product Info","form.opt2":"Dealership","form.opt3":"Technical Support","form.opt4":"Other",
//         "footer.desc":"Turkey's leading car care products brand. We provide the best care for your vehicle with quality and innovation.","footer.pages":"Pages","footer.products":"Products","footer.contact":"Contact","footer.rights":"All rights reserved.","footer.made":"Made in Turkey 🇹🇷",
//         "meta.title":"Final Fast | Car Care Products – Scented Cleaner & Polish","meta.desc":"Final Fast, Turkey's best car care products brand. Polish your car with scented cleaner, polish and protective products.","meta.kw":"car care, car polish, scented cleaner, auto cleaning, Final Fast Turkey"
//     },
//     ar: {
//         "nav.home":"الرئيسية","nav.features":"المميزات","nav.products":"المنتجات","nav.about":"من نحن","nav.contact":"تواصل معنا","nav.sub":"منظف ومُلمِّع عطري",
//         "hero.badge":"العلامة التجارية #1 لعناية السيارات في تركيا","hero.desc":"أعطِ سيارتك لمعاناً مثالياً مع منتجاتنا الاحترافية. اصنع الفرق مع المنظف العطري وصيغة التلميع الخاصة بنا.","hero.cta1":"استكشف المنتجات","hero.cta2":"من نحن","hero.scroll":"اكتشف",
//         "stats.clients":"عميل","stats.products":"منتج","stats.years":"سنوات","stats.langs":"لغات",
//         "features.label":"لماذا Final Fast؟","features.title":"جودة فائقة،\nنتائج احترافية","features.desc":"كل منتجاتنا مُصاغة بعناية لتلبية أعلى معايير العناية بالسيارات.",
//         "feat1.title":"صيغة احترافية","feat1.desc":"صيغة تنظيف متطورة مطورة خصيصاً لأسطح المركبات. تنظف وتحمي في آنٍ واحد.","feat2.title":"عطر دائم","feat2.desc":"يترك في سيارتك عطراً منعشاً وممتعاً يدوم طويلاً أثناء التنظيف.","feat3.title":"حماية السطح","feat3.desc":"يحمي الطلاء، يخفي الخدوش الخفيفة، ويحافظ على اللمعان لفترة طويلة.","feat4.title":"تطبيق سريع","feat4.desc":"سهل التطبيق، نتائج سريعة. سيارتك تلمع في دقائق معدودة.","feat5.title":"صديق للبيئة","feat5.desc":"صيغة قابلة للتحلل البيولوجي. نحمي الطبيعة بإنتاج مسؤول بيئياً.","feat6.title":"علامة حائزة على جوائز","feat6.desc":"حائز على جائزة أفضل منتجات عناية بالسيارات في قطاع السيارات التركي.",
//         "products.label":"مجموعتنا","products.title":"منتجاتنا\nالمميزة","products.all":"عرض الكل",
//         "prod.interior":"داخلي","prod.exterior":"خارجي","prod.premium":"بريميوم","prod.scented":"السلسلة العطرية","prod.glass":"عناية الزجاج","prod.engine":"عناية المحرك",
//         "prod1.desc":"صيغة خاصة للوحة القيادة والأسطح البلاستيكية والجلد. لمعان لا يمحى وحماية دائمة.","prod2.desc":"صيغة التنظيف العميق تزيل الطلاء والأوساخ والزيوت بفعالية. لطيف على الطلاء.","prod3.desc":"واقٍ بالشمع الكريستالي. يوفر حماية تصل إلى 6 أشهر. تقنية نانو طاردة للمطر.","prod4.desc":"نظافة وانتعاش في آنٍ واحد مع مزيج عطري خاص. 5 خيارات عطر متاحة.","prod5.desc":"صيغة خاصة لأسطح الزجاج. خصائص إزالة الخدوش وطرد المطر. يزيل آثار المياه.","prod6.desc":"منظف قوي لحجرة المحرك. يذيب الزيت والأوساخ، يحمي الأسطح البلاستيكية والمعدنية.",
//         "prod.bestseller":"الأكثر مبيعاً","prod.new":"جديد","prod.premium2":"بريميوم","prod.popular":"الأكثر شعبية","prod.recommended":"موصى به","prod.pro":"سلسلة برو",
//         "about.label":"من نحن","about.title":"رائد عناية السيارات\nفي تركيا","about.desc":"Final Fast علامة تركية تأسست في إسطنبول عام 2021، متخصصة في منتجات عناية السيارات. رسّخنا مكانتنا في الصناعة بتقديم الجودة والابتكار ورضا العملاء.","about.founded":"سنة التأسيس","about.li1":"منشأة إنتاج معتمدة ISO وعمليات ضبط الجودة","about.li2":"صياغة منتجات تركز على البحث والتطوير","about.li3":"أكثر من 500 وكيل ونقطة بيع في أنحاء تركيا","about.li4":"إنتاج بجودة التصدير وفق المعايير العالمية","about.li5":"خط دعم العملاء والاستشارات التقنية على مدار الساعة",
//         "contact.label":"تواصل معنا","contact.title":"تواصل\nمعنا","contact.addr":"العنوان","contact.phone":"الهاتف","contact.email":"البريد الإلكتروني","contact.hours":"ساعات العمل","contact.hoursval":"الاثنين – الجمعة: 09:00 – 18:00",
//         "form.name":"الاسم الكامل","form.email":"البريد الإلكتروني","form.subject":"الموضوع","form.msg":"الرسالة","form.send":"إرسال","form.opt1":"معلومات المنتج","form.opt2":"الوكالة","form.opt3":"الدعم التقني","form.opt4":"أخرى",
//         "footer.desc":"العلامة التجارية الرائدة في تركيا لمنتجات عناية السيارات. نقدم أفضل رعاية لسيارتك بالجودة والابتكار.","footer.pages":"الصفحات","footer.products":"المنتجات","footer.contact":"تواصل","footer.rights":"جميع الحقوق محفوظة.","footer.made":"صُنع في تركيا 🇹🇷",
//         "meta.title":"Final Fast | منتجات عناية السيارات – منظف ومُلمِّع عطري","meta.desc":"Final Fast، أفضل علامة تركية لمنتجات عناية السيارات. لمّع سيارتك بالمنظف العطري والمُلمِّع والمنتجات الواقية.","meta.kw":"عناية سيارات، تلميع سيارة، منظف عطري، تنظيف سيارة، Final Fast تركيا"
//     }
// };