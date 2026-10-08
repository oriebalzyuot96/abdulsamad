/* All content for Abdul-Samad Hassan's portfolio, in English and Arabic.
   Facts come from his resume and LinkedIn; the current Technical Lead role on Azm's Contracts platform was confirmed by the requester. */
import type { Lang } from '../i18n';
type T = Record<Lang, string>;
const t = (en: string, ar: string): T => ({ en, ar });

export const PERSON = {
  name: t('Abdul-Samad Hassan', 'عبد الصمد حسن'),
  short: t('Abdul-Samad', 'عبد الصمد'),
  role: t('Software Technical Lead · .NET · Angular', 'Software Technical Lead · .NET · Angular'),
  email: 'samad@live.com',
  phone: '+20 106 773 7047',
  linkedin: 'https://www.linkedin.com/in/abdul-samad-02a82488/',
  github: '',
  location: t('Cairo, Egypt', 'القاهرة، مصر'),
};

export const META = {
  title: t('Abdul-Samad Hassan · Software Technical Lead (.NET, Angular, Microservices)', 'عبد الصمد حسن · Software Technical Lead (.NET و Angular والخدمات المصغّرة)'),
  desc: t('Abdul-Samad Hassan, Software Technical Lead with 12+ years in C#, .NET Core, SQL Server, Angular and microservices. Leading the team behind Contracts, a Saudi digital-contracts and e-signature platform at Azm.',
          'عبد الصمد حسن، Software Technical Lead بخبرة تتجاوز 12 عامًا في C# و .NET Core و SQL Server و Angular والخدمات المصغّرة، ويقود الفريق التقني لمنصة عقود للعقود الرقمية والتوقيع الإلكتروني في عزم.'),
};

export const NAV = {
  about: t('About', 'عنّي'), skills: t('Skills', 'المهارات'), projects: t('Work', 'الأعمال'),
  career: t('Career', 'المسيرة'), contact: t('Contact', 'تواصل'),
};

export const HERO = {
  hello: t("Hi, I'm Abdul-Samad", 'مرحبًا، أنا عبد الصمد'), open: t('Tech Lead · Contracts at Azm', 'قائد تقني · منصة عقود في عزم'),
  l1: t('I lead teams that build', 'أقود فرقًا تبني'), l2a: t('', ''), words: t('secure|scalable|reliable', 'آمنة|قابلة للتوسع|موثوقة'), l2b: t(' platforms,', ''),
  l2pre: t('', 'منصات '), l3: t('from .NET microservices to Angular.', 'من خدمات .NET المصغّرة إلى Angular.'),
  lede: t('Software Technical Lead with <b>12+ years</b> in <b>C#, .NET Core, SQL Server and Angular</b>. Today I lead the team behind <b>Contracts</b>, a Saudi <b>digital-contracts and e-signature</b> platform at Azm. Before that I built <b>travel, payments and Umrah booking</b> microservices at HotelGate.',
          'Software Technical Lead بخبرة <b>تتجاوز 12 عامًا</b> في <b>C# و .NET Core و SQL Server و Angular</b>. أقود اليوم الفريق التقني لمنصة <b>عقود</b> السعودية <b>للعقود الرقمية والتوقيع الإلكتروني</b> في عزم، وقبلها بنيت خدمات مصغّرة <b>للسفر والمدفوعات وحجوزات العمرة</b> في HotelGate.'),
  cta1: t('See my work', 'شاهد أعمالي'), cta2: t('Download CV', 'تحميل السيرة الذاتية'), cta3: t('Email me', 'راسلني'),
};

export const BENTO = {
  hand: t('hello! 👋', 'مرحبًا! 👋'), avail: t('Tech Lead', 'قائد تقني'),
  exp: t('Experience', 'الخبرة'), years: t('years building .NET systems, from ERP to travel to e-contracts', 'سنوات في بناء أنظمة .NET، من ERP إلى السفر إلى العقود الرقمية'),
  nowk: t('Now · Azm · Contracts', 'حاليًا · عزم · عقود'),
  now: t('Leading the engineering team of a Saudi digital-contracts & e-signature platform', 'أقود الفريق الهندسي لمنصة سعودية للعقود الرقمية والتوقيع الإلكتروني'),
  chips: [t('.NET Core', '.NET Core'), t('Angular', 'Angular'), t('Microservices', 'الخدمات المصغّرة'), t('Team leadership', 'قيادة الفرق')],
  clock: t('Local time · Cairo', 'الوقت المحلي · القاهرة'), tz: t('GMT+2/+3 · remote-friendly', 'GMT+2/+3 · مرن للعمل عن بُعد'),
  stack: t('Daily stack', 'أدواتي اليومية'),
  certk: t('Education', 'التعليم'), cert: t('B.Sc. Computer Science', 'بكالوريوس علوم الحاسوب'), certs: t('Akhbar El Yom Academy · IBM C# Web diploma', 'أكاديمية أخبار اليوم · دبلوم IBM لتطبيقات الويب بـ C#'),
  a11yk: t('Accessibility', 'إمكانية الوصول'), a11y: t('Try this site your way', 'جرّب الموقع على طريقتك'), a11ySub: t('Contrast, text size, motion, Arabic RTL.', 'التباين وحجم النص والحركة والعربية.'), a11yGo: t('Open settings →', 'فتح الإعدادات ←'),
};

export const VIDEO = {
  k: t('in 40 seconds', 'في 40 ثانية'), t: t('Meet me', 'تعرّف عليّ'),
  p: t('A short motion intro: who I am, the companies and products behind my 12 years, and how I lead.', 'مقدمة متحركة قصيرة: من أنا، والشركات والمنتجات خلف 12 عامًا من الخبرة، وكيف أقود فريقي.'),
};

export const ABOUT = {
  k: t('who am I?', 'من أنا؟'), t: t('About Me', 'نبذة عنّي'),
  badge: t('📍 Cairo · remote', '📍 القاهرة · عن بُعد'),
  h: t('Engineer at heart, captain of the team 🚢', 'مهندس في الأساس، وقائد للفريق 🚢'),
  p1: t('For 12+ years I have built .NET systems end to end: ERP modules, a medical-insurance system, bulk VAS tools, a travel platform for hotels, flights, packages and Umrah, and now a Saudi e-contracts platform.',
        'أبني أنظمة .NET من البداية للنهاية منذ أكثر من 12 عامًا: وحدات ERP، ونظام تأمين طبي، وأدوات خدمات قيمة مضافة، ومنصة سفر للفنادق والطيران والباقات والعمرة، واليوم منصة عقود رقمية سعودية.'),
  p2: t('As a Technical Lead I turn product goals into well-scoped stories, split the work fairly, review code and grow every engineer on the team. Clean architecture, SOLID and microservices are how I keep big systems simple.',
        'كقائد تقني أحوّل أهداف المنتج إلى قصص مستخدم واضحة، وأوزّع العمل بعدل، وأراجع الكود، وأطوّر كل مهندس في الفريق. المعمارية النظيفة و SOLID والخدمات المصغّرة هي طريقتي لإبقاء الأنظمة الكبيرة بسيطة.'),
  name: t('Name', 'الاسم'), loc: t('Location', 'الموقع'), locs: t('Remote · open to relocation', 'عن بُعد · منفتح على الانتقال'),
  email: t('Email', 'البريد الإلكتروني'), li: t('LinkedIn', 'LinkedIn'),
  edu: t('Education', 'التعليم'), eduv: t('B.Sc. Computer Science', 'بكالوريوس علوم الحاسوب'), edus: t('Akhbar El Yom Academy · 2008–2012', 'أكاديمية أخبار اليوم · 2008–2012'),
  lang: t('Languages', 'اللغات'), langv: t('Arabic · English', 'العربية · الإنجليزية'), langs: t('Arabic native · English good', 'العربية لغة أم · الإنجليزية جيدة'),
  quote: t('“He is a truly exceptional team leader… our steady Captain, guiding the team and keeping it aligned with the bigger picture.”', '«قائد فريق استثنائي حقًا… قبطاننا الثابت الذي يوجّه الفريق ويبقيه متوافقًا مع الصورة الكبرى.»'),
  quoteBy: t('Orieb Alzyuot · Senior Front-End Engineer, reported to Abdul-Samad', 'عريب الزيوت · مهندسة واجهات أمامية Senior عملت تحت قيادته'),
  principles: [
    { t: t('Lead like a captain', 'القيادة كقبطان'), p: t('Clear direction, fair workload and support for every engineer.', 'اتجاه واضح وتوزيع عادل للعمل ودعم لكل مهندس.') },
    { t: t('Clean architecture', 'معمارية نظيفة'), p: t('SOLID, DDD and CQRS so systems stay easy to change.', 'SOLID و DDD و CQRS لتبقى الأنظمة سهلة التطوير.') },
    { t: t('Ship with confidence', 'تسليم بثقة'), p: t('Well-scoped stories, code review and tests before release.', 'قصص مستخدم واضحة ومراجعة كود واختبارات قبل الإصدار.') },
  ],
};

export const SKILLS = {
  k: t('what I use', 'ما أستخدمه'), t: t('Skills', 'المهارات'), p: t('Back end, architecture, front end and the leadership that ties them together.', 'الخوادم والمعمارية والواجهات والقيادة التي تربطها.'),
  groups: [
    { icon: '⚙️', t: t('Back end', 'الخوادم'), items: [['dotnet', 'C# · .NET · .NET Core'], ['dotnet', 'ASP.NET Web API · MVC'], ['graphql', 'GraphQL · WCF'], ['', 'Entity Framework · EF Core'], ['', 'SignalR · Hangfire · Serilog']] },
    { icon: '🏛️', t: t('Architecture', 'المعمارية'), items: [['', 'Microservices'], ['', 'Modular monolith'], ['', 'Clean · N-layer architecture'], ['', 'OOP · SOLID · DDD · CQRS · TDD']] },
    { icon: '🗄️', t: t('Data', 'البيانات'), items: [['', 'SQL Server'], ['postgresql', 'PostgreSQL'], ['mongodb', 'MongoDB'], ['redis', 'Redis'], ['elasticsearch', 'Elasticsearch']] },
    { icon: '🎨', t: t('Front end', 'الواجهات الأمامية'), items: [['angular', 'Angular 2+'], ['react', 'React'], ['typescript', 'TypeScript'], ['javascript', 'JavaScript · jQuery'], ['bootstrap', 'HTML · CSS · Bootstrap']] },
    { icon: '🧭', t: t('Leadership', 'القيادة'), items: [['', 'Team leadership & mentoring'], ['', 'User stories & MVP scoping'], ['', 'Code review'], ['scrumalliance', 'Agile · Scrum']] },
    { icon: '🛠️', t: t('Tools', 'الأدوات'), items: [['git', 'Git · GitHub · TFS'], ['jira', 'Jira'], ['', 'Telerik · DevExpress'], ['', 'JWT · Payfort']] },
  ],
};

export const PROJECTS = {
  k: t("what I've built and led", 'ما بنيته وقدته'), t: t('Work', 'الأعمال'),
  p: t('Highlights from each role. Private systems are shown as labelled illustrations.', 'أبرز ما في كل دور. الأنظمة الخاصة تظهر كرسوم توضيحية مُعلَّمة.'),
  illus: t('Illustration', 'رسم توضيحي'),
  items: [
    { id: 'p-contracts', mock: 'shot', img: 'contracts.jpg', url: 'contracts.com.sa', org: t('Azm · Contracts', 'عزم · عقود'), status: t('Tech Lead · live', 'قائد تقني · منصة حيّة'),
      title: t('Contracts · Digital Contracts & e-Signature', 'عقود · العقود الرقمية والتوقيع الإلكتروني'),
      p: t('A Saudi platform where individuals and companies create, manage and e-sign contracts anytime, with automated, auditable workflows replacing paper. I lead its engineering team.',
           'منصة سعودية يُنشئ فيها الأفراد والشركات عقودهم ويديرونها ويوقّعونها إلكترونيًا في أي وقت، بمسارات عمل مؤتمتة وقابلة للتدقيق بدل الورق. أقود فريقها الهندسي.'),
      hl: [t('Lead the team: MVP scoping, user stories, sprint planning and code review', 'قيادة الفريق: تحديد MVP وقصص المستخدم وتخطيط السبرنت ومراجعة الكود'), t('.NET Core services behind an Angular front end', 'خدمات .NET Core خلف واجهة Angular'), t('Individuals and companies flows, contract builder, e-signature and approvals', 'مسارات الأفراد والشركات، ومنشئ العقود، والتوقيع الإلكتروني والموافقات')],
      tags: ['.NET Core', 'Angular', 'SQL Server', 'Leadership'], link: 'https://contracts.com.sa' },
    { id: 'p-travel', mock: 'travel', org: t('HotelGate · Cairo', 'HotelGate · القاهرة'), status: t('Senior → Tech Lead', 'Senior ← قائد تقني'),
      title: t('Travel & Umrah booking platform', 'منصة حجوزات السفر والعمرة'),
      p: t('A B2B travel platform for hotels, flights, packages and Umrah, built as .NET Core microservices with an Angular front end. I designed core modules, then led the team.',
           'منصة سفر B2B للفنادق والطيران والباقات والعمرة، مبنية كخدمات .NET Core مصغّرة بواجهة Angular. صممت وحداتها الأساسية ثم قدت الفريق.'),
      hl: [t('Factory pattern unifying 12 hotel providers behind one API', 'نمط Factory يوحّد 12 مزوّد فنادق خلف واجهة واحدة'), t('Profile and user services with JWT authentication', 'خدمات الملفات والمستخدمين مع مصادقة JWT'), t('Full Payfort payment integration cycle', 'دورة تكامل كاملة للدفع عبر Payfort')],
      tags: ['.NET Core', 'Microservices', 'Angular', 'JWT', 'Payfort'] },
    { id: 'p-search', mock: 'search', org: t('HotelGate · Cairo', 'HotelGate · القاهرة'), status: t('Key achievement', 'إنجاز رئيسي'),
      title: t('Real-time multi-provider search', 'بحث فوري متعدد المزوّدين'),
      p: t('SignalR between the Angular front end and the search service pushes each provider’s results the moment they arrive, so users never wait for the slowest supplier.',
           'ربط SignalR بين واجهة Angular وخدمة البحث يدفع نتائج كل مزوّد لحظة وصولها، فلا ينتظر المستخدم أبطأ مزوّد.'),
      hl: [t('Streaming results instead of one blocking response', 'نتائج متدفقة بدل استجابة واحدة معطِّلة'), t('Faster perceived search across hotels and flights', 'بحث أسرع في الفنادق والطيران')],
      tags: ['SignalR', '.NET Core', 'Angular'] },
    { id: 'p-vas', mock: 'vas', org: t('Victory Link · Cairo', 'Victory Link · القاهرة'), status: t('Senior Full Stack', 'Senior Full Stack'),
      title: t('Bulk VAS messaging tool', 'أداة الرسائل الجماعية VAS'),
      p: t('Victory Link is a Cairo telecom value-added-services company (bulk SMS, gateways, mobile marketing). I helped design and build its bulk tool system.',
           'Victory Link شركة خدمات قيمة مضافة للاتصالات في القاهرة (رسائل جماعية وبوابات وتسويق عبر الجوال). شاركت في تصميم وبناء نظام الأداة الجماعية.'),
      hl: [t('.NET Framework back end with ASP.NET MVC UI', 'خوادم .NET Framework وواجهة ASP.NET MVC'), t('Worked with the product team on scope and delivery', 'العمل مع فريق المنتج على النطاق والتسليم')],
      tags: ['.NET', 'ASP.NET MVC', 'SQL Server'] },
    { id: 'p-erp', mock: 'lowcode', org: t('Procoor · IT Fusion', 'Procoor · IT Fusion'), status: t('Developer', 'Developer'),
      title: t('ERP & medical-insurance systems', 'أنظمة ERP والتأمين الطبي'),
      p: t('HR and Accounting modules of the Procoor construction project-management ERP, then features and fixes for IT Fusion’s medical-insurance system.',
           'وحدتا الموارد البشرية والمحاسبة في نظام Procoor لإدارة مشاريع البناء، ثم ميزات وإصلاحات لنظام التأمين الطبي في IT Fusion.'),
      hl: [t('ASP.NET Web Forms and MVC with jQuery', 'ASP.NET Web Forms و MVC مع jQuery'), t('Upgraded an ERP to Web API 2 and Entity Framework 6', 'ترقية نظام ERP إلى Web API 2 و Entity Framework 6')],
      tags: ['ASP.NET', 'Web API', 'EF6', 'jQuery'] },
  ],
};

export const CAREER = {
  k: t("where I've been", 'أين عملت'), t: t('Career', 'المسيرة المهنية'), now: t('Current', 'الحالي'),
  jobs: [
    { dot: 'AZM', when: t('Jan 2025 – Present · Cairo · Remote', 'يناير 2025 – حتى الآن · القاهرة · عن بُعد'), co: 'Azm · Contracts', role: t('Software Technical Lead', 'Software Technical Lead'), current: true,
      about: t('Saudi Azm is a Riyadh digital-transformation company (since 2017) building platforms for government and fintech. Contracts is its digital-contracts and e-signature platform.', 'عزم السعودية شركة تحول رقمي في الرياض (منذ 2017) تبني منصات للحكومة والتقنية المالية، وعقود هي منصتها للعقود الرقمية والتوقيع الإلكتروني.'),
      b: [t('Lead the Contracts engineering team: day-to-day delivery, training and performance.', 'قيادة الفريق الهندسي لمنصة عقود: التسليم اليومي والتدريب والأداء.'),
          t('Turn MVP requirements with the Product Manager into well-scoped user stories.', 'تحويل متطلبات MVP مع مدير المنتج إلى قصص مستخدم واضحة النطاق.'),
          t('Distribute work evenly across senior and junior engineers and review their code.', 'توزيع العمل بعدل بين المهندسين Senior و Junior ومراجعة الكود.')],
      tags: ['.NET Core', 'Angular', 'Leadership'] },
    { dot: 'INV', when: t('Dec 2022 – Dec 2024 · Remote', 'ديسمبر 2022 – ديسمبر 2024 · عن بُعد'), co: 'Inovola → Azm · Contracts', role: t('Senior Software Engineer', 'Senior Software Engineer'),
      about: t('Inovola is a software and dev-teams-as-a-service company (Egypt, UK, KSA, UAE). Placed on the Azm Contracts project.', 'Inovola شركة برمجيات وفرق تطوير كخدمة (مصر وبريطانيا والسعودية والإمارات)، وعملت من خلالها على مشروع عقود في عزم.'),
      b: [t('Planned, built and debugged Contracts features with the product team.', 'تخطيط ميزات منصة عقود وبناؤها وتصحيحها مع فريق المنتج.')],
      tags: ['.NET Core', 'SQL Server', 'Angular'] },
    { dot: 'HG', when: t('May 2017 – Nov 2022 · Cairo', 'مايو 2017 – نوفمبر 2022 · القاهرة'), co: 'HotelGate', role: t('Software Technical Lead · Senior Software Engineer', 'Software Technical Lead · Senior Software Engineer'),
      about: t('A B2B travel platform for hotels, flights, packages and Umrah.', 'منصة سفر B2B للفنادق والطيران والباقات والعمرة.'),
      b: [t('Tech Lead (2021–2022): led senior and junior engineers, scoped MVPs into user stories.', 'قائد تقني (2021–2022): قيادة مهندسين Senior و Junior وتحويل MVP إلى قصص مستخدم.'),
          t('Designed hotel, flight, package and Umrah modules as .NET Core microservices with Angular.', 'تصميم وحدات الفنادق والطيران والباقات والعمرة كخدمات .NET Core مصغّرة مع Angular.'),
          t('Built profile, user (JWT) and Payfort payment services; unified 12 hotel providers; SignalR live search.', 'بناء خدمات الملفات والمستخدمين (JWT) والدفع عبر Payfort، وتوحيد 12 مزوّد فنادق، وبحث فوري بـ SignalR.')],
      tags: ['Microservices', '.NET Core', 'Angular', 'SignalR'] },
    { dot: 'VL', when: t('May 2016 – May 2017 · Cairo', 'مايو 2016 – مايو 2017 · القاهرة'), co: 'Victory Link', role: t('Senior Full Stack .NET Developer', 'Senior Full Stack .NET Developer'),
      about: t('A Cairo telecom value-added-services company: bulk SMS, gateways and mobile marketing.', 'شركة خدمات قيمة مضافة للاتصالات في القاهرة: رسائل جماعية وبوابات وتسويق عبر الجوال.'),
      b: [t('Helped design and build the bulk VAS tool with .NET Framework and ASP.NET MVC.', 'المشاركة في تصميم وبناء أداة VAS الجماعية بـ .NET Framework و ASP.NET MVC.')],
      tags: ['.NET', 'ASP.NET MVC'] },
    { dot: 'ITF', when: t('Aug 2015 – May 2016 · Cairo', 'أغسطس 2015 – مايو 2016 · القاهرة'), co: 'IT Fusion', role: t('Full Stack .NET Developer', 'Full Stack .NET Developer'),
      about: t('A Cairo software house (since 2005) specialised in medical-insurance and claims software.', 'شركة برمجيات في القاهرة (منذ 2005) متخصصة في أنظمة التأمين الطبي والمطالبات.'),
      b: [t('Features and fixes for the medical-insurance system in ASP.NET MVC, JavaScript and jQuery.', 'ميزات وإصلاحات لنظام التأمين الطبي بـ ASP.NET MVC و JavaScript و jQuery.')],
      tags: ['ASP.NET MVC', 'jQuery'] },
    { dot: 'PRC', when: t('Dec 2013 – Aug 2015 · Cairo', 'ديسمبر 2013 – أغسطس 2015 · القاهرة'), co: 'Procoor', role: t('.NET Developer', '.NET Developer'),
      about: t('A construction project-management and coordination platform.', 'منصة لإدارة وتنسيق مشاريع البناء.'),
      b: [t('Built HR and Accounting ERP modules (ASP.NET Web Forms); upgraded to Web API 2 and EF6.', 'بناء وحدتي الموارد البشرية والمحاسبة (ASP.NET Web Forms) والترقية إلى Web API 2 و EF6.')],
      tags: ['ASP.NET', 'Web API', 'EF6'] },
  ],
  edu: [
    { t: t('🎓 B.Sc. Computer Science', '🎓 بكالوريوس علوم الحاسوب'), s: t('Akhbar El Yom Academy · 2008–2012', 'أكاديمية أخبار اليوم · 2008–2012') },
    { t: t('📜 Diploma in C# Web Applications', '📜 دبلوم تطبيقات الويب بـ C#'), s: t('IBM · Cairo · 2011', 'IBM · القاهرة · 2011') },
  ],
};

export const CONTACT = {
  t: t("Let's build something solid together", 'لنبنِ معًا شيئًا متينًا'),
  p: t('Open to technical-lead and senior .NET roles, remote or on-site.', 'أرحّب بأدوار القيادة التقنية و .NET بمستوى Senior، عن بُعد أو حضوريًا.'),
  copy: t('Copy', 'نسخ'),
  avail: [t('🧭 Tech lead', '🧭 قيادة تقنية'), t('🌍 Remote', '🌍 عن بُعد'), t('✈️ Relocation', '✈️ الانتقال'), t('⏱ Full-time', '⏱ دوام كامل')],
};

export const FOOTER = {
  tag: t('Software Technical Lead · .NET, Angular, Microservices', 'Software Technical Lead · .NET و Angular والخدمات المصغّرة'),
  avail: t('Open to new opportunities', 'أرحّب بالفرص الجديدة'), email: t('Email me', 'راسلني'), cv: t('Download CV', 'تحميل السيرة الذاتية'),
  explore: t('Explore', 'استكشف'), connect: t('Connect', 'تواصل'), rights: t('All rights reserved.', 'جميع الحقوق محفوظة.'),
  local: t('Cairo', 'القاهرة'), other: t('العربية', 'English'),
};

/** Runtime config for public/app.js (palette commands, links, code tile, storage keys). */
export const siteCfg = (base: string) => ({
  key: 'as',
  cv: base + 'Abdul-Samad-Hassan-CV.pdf',
  email: PERSON.email,
  linkedin: PERSON.linkedin,
  sections: [
    { id: 'home', e: '🏠', en: 'Home', ar: 'الرئيسية' },
    { id: 'about', e: '👋', en: 'About me', ar: 'عنّي' },
    { id: 'intro', e: '🎬', en: 'Intro video', ar: 'فيديو تعريفي' },
    { id: 'skills', e: '🧰', en: 'Skills', ar: 'المهارات' },
    { id: 'projects', e: '🚀', en: 'Work', ar: 'الأعمال' },
    { id: 'career', e: '🧭', en: 'Career', ar: 'المسيرة المهنية' },
    { id: 'contact', e: '✉️', en: 'Contact', ar: 'تواصل' },
  ],
  projects: [
    { id: 'p-contracts', e: '📝', en: 'Contracts e-signature (Azm)', ar: 'منصة عقود (عزم)' },
    { id: 'p-travel', e: '✈️', en: 'Travel & Umrah booking (HotelGate)', ar: 'حجوزات السفر والعمرة' },
    { id: 'p-search', e: '⚡', en: 'Real-time multi-provider search', ar: 'بحث فوري متعدد المزوّدين' },
    { id: 'p-vas', e: '📨', en: 'Bulk VAS tool (Victory Link)', ar: 'أداة VAS الجماعية' },
  ],
  code: [
    ['c', '// one interface, twelve providers'],
    ['', `<span class="c-k">public class</span> <span class="c-f">HotelProviderFactory</span> {`],
    ['', `  <span class="c-k">public</span> IHotelProvider <span class="c-f">Create</span>(<span class="c-k">string</span> code) =&gt;`],
    ['', `    _providers[code] ?? <span class="c-k">throw new</span> <span class="c-f">NotSupportedException</span>(code);`],
    ['', `  <span class="c-k">public int</span> Years =&gt; <span class="c-n">12</span>; <span class="c-k">public string</span> Role =&gt; <span class="c-s">"Tech Lead"</span>;`],
    ['', '}'],
  ],
});
