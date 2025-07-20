import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  header: {
    title: 'Mahmoud Yousefi',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    resume: 'Resume',
    contact: 'Contact',
    blog: 'Blog',
    more: 'More',
  },
  about: {
    title: 'About Me',
    paragraph1:
      "I'm Mahmoud Yousefi, a passionate Full-Stack Developer with a strong background in Computer Science, currently pursuing a Master's degree in Algorithms and Theory of Computation at Shahed University, Tehran, Iran. I specialize in building modern, responsive web applications using technologies like React, TypeScript, Node.js, and GIS tools such as OpenLayers and Maplibre.",
    paragraph2:
      "My journey in tech began with a Bachelor’s degree in Computer Science from Shahed University (graduated 2024), where I developed a solid foundation in programming, data structures, and software engineering principles. During my undergraduate studies, I explored various programming paradigms and built projects that sparked my interest in creating user-friendly interfaces and scalable backend systems. This led me to specialize in full-stack development, with a focus on React for front-end and frameworks like Django and Nest.js for backend development.",
    paragraph3:
      "Currently, I’m pursuing a Master’s degree in Algorithms and Theory of Computation, which deepens my understanding of complex algorithms, optimization techniques, and computational theory. This academic pursuit enhances my ability to design efficient solutions for real-world problems, particularly in large-scale web applications and GIS-based systems. My coursework includes advanced topics like graph theory, computational complexity, and algorithm design, which I apply to optimize code and improve system performance.",
    paragraph4:
      "Professionally, I’ve worked as a Front-End Developer at Hoshan Kavosh Borna, where I designed intuitive UIs for enterprise systems like the Bizagi workflow engine and customized open-source tools like MapStore2. I thrive in collaborative environments, adhering to SOLID principles and leveraging tools like Git, Docker, and Cypress for testing to deliver high-quality code.",
    paragraph5:
      "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects on GitHub, or diving into a good book on algorithms or software design. I’m fluent in Persian and have upper-intermediate proficiency in English, enabling me to communicate effectively in diverse teams.",
  },
  theme: {
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
  },
  language: {
    switchToPersian: 'Switch to Persian',
    switchToEnglish: 'Switch to English',
  },
  footer: {
    connect: 'Connect with Me',
    tagline: 'Empowering the future through innovative web and geospatial solutions.',
    copyright: '© {{year}} Mahmoud Yousefi. All rights reserved.',
    socialAria: 'Visit Mahmoud Yousefi\'s {{platform}} profile',
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
    },
  },
  skills: {
    title: 'My Skills',
    categories: {
      programmingScripting: 'Programming & Scripting',
      frameworksLibraries: 'Frameworks & Libraries',
      gisTechnologies: 'GIS Technologies',
      toolsTechnologies: 'Tools & Technologies',
      webDevelopment: 'Web Development',
      testingValidation: 'Testing & Validation Libraries',
      otherSkills: 'Other Skills',
    },
  },
  projects: {
    title: 'My Projects',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    liveDemoAria: 'View live demo of {{title}}',
    sourceCodeAria: 'View source code of {{title}}',
    modernShopRepo: {
      title: 'Modern Shop Repo',
      description: 'An e-commerce platform built with modern web technologies.',
    },
    authApp: {
      title: 'Auth App',
      description: 'A secure authentication application with user management.',
    },
    portfolio: {
      title: 'Portfolio',
      description: 'A personal portfolio showcasing projects and skills.',
    },
    advancedGraph: {
      title: 'Advanced Graph',
      description: 'A data visualization tool for complex graph structures.',
    },
    fastapiAlembicSqlalchemy: {
      title: 'FastAPI Alembic SQLAlchemy',
      description: 'A FastAPI project with database migrations using Alembic and SQLAlchemy.',
    },
    drf: {
      title: 'DRF',
      description: 'A Django REST Framework project for building APIs.',
    },
    djangoTutorial: {
      title: 'Django Tutorial',
      description: 'A tutorial project demonstrating Django fundamentals.',
    },
    fastapiMysql: {
      title: 'FastAPI MySQL',
      description: 'A FastAPI application integrated with MySQL.',
    },
    flaskTutorial: {
      title: 'Flask Tutorial',
      description: 'A tutorial project for learning Flask framework.',
    },
    fastapi: {
      title: 'FastAPI',
      description: 'A FastAPI project for building high-performance APIs.',
    },
    wicketApp: {
      title: 'Wicket App',
      description: 'An application built using Apache Wicket framework.',
    },
    nestjsMongodb: {
      title: 'NestJS MongoDB',
      description: 'A NestJS application integrated with MongoDB.',
    },
    nestjsTypeorm: {
      title: 'NestJS TypeORM',
      description: 'A NestJS project using TypeORM for database management.',
    },
    gisExample: {
      title: 'GIS Example',
      description: 'A GIS application demonstrating geospatial functionalities.',
    },
    antdTest: {
      title: 'Ant Design Test',
      description: 'A project testing Ant Design components.',
    },
    portfolioAdditional: {
      title: 'Portfolio (Additional)',
      description: 'Another portfolio project showcasing additional work.',
    },
  },
  resume: {
    title: 'Resume',
    download: 'Download Resume (PDF)',
    downloadAria: 'Download Mahmoud Yousefi\'s resume in PDF format',
    professionalSummary: {
      title: 'Professional Summary',
      description: 'A passionate and skilled Full-Stack Developer with a strong background in Computer Science, currently pursuing a Master\'s degree in Algorithms and Theory of Computation. I have hands-on experience in building, optimizing, and maintaining complex web applications using modern technologies. I excel in developing user-friendly interfaces, implementing efficient solutions, and collaborating in team environments to drive project success.',
    },
    education: {
      title: 'Education',
      masters: {
        title: 'Master\'s Degree in Algorithms and Theory of Computation',
        details: 'Shahed University, Tehran, Iran | 2024 – Present',
      },
      bachelors: {
        title: 'Bachelor\'s Degree in Computer Science',
        details: 'Shahed University, Tehran, Iran | Graduated 2024',
      },
    },
    skills: {
      title: 'Skills',
      categories: {
        programmingScripting: 'Programming & Scripting',
        frameworksLibraries: 'Frameworks & Libraries',
        gisTechnologies: 'GIS Technologies',
        toolsTechnologies: 'Tools & Technologies',
        webDevelopment: 'Web Development',
        testingValidation: 'Testing & Validation Libraries',
        otherSkills: 'Other Skills',
      },
      items: {
        JavaScript: 'JavaScript',
        TypeScript: 'TypeScript',
        PHP: 'PHP',
        Python: 'Python',
        ReactJS: 'ReactJS',
        ReduxToolkit: 'Redux-Toolkit',
        ReduxThunk: 'Redux-Thunk',
        ReactHooks: 'React Hooks',
        AntDesign: 'Ant Design',
        MaterialUI: 'Material UI',
        NodejsNestjs: 'Node.js (Nest.js)',
        Nextjs: 'Next.js',
        Expressjs: 'Express.js',
        FastApi: 'FastApi',
        DRF: 'DRF',
        Django: 'Django',
        Flask: 'Flask',
        OpenLayers: 'OpenLayers',
        Maplibre: 'Maplibre',
        Git: 'Git',
        GitHub: 'GitHub',
        GitLab: 'GitLab',
        Docker: 'Docker',
        MySQL: 'MySQL',
        PostgreSQL: 'PostgreSQL',
        MongoDB: 'MongoDB',
        Prisma: 'Prisma',
        TypeORM: 'TypeORM',
        SQLAlchemy: 'SQLAlchemy',
        Alembic: 'Alembic',
        HTMLCSS: 'HTML & CSS',
        SASS: 'SASS',
        Less: 'Less',
        TailwindCSS: 'TailwindCSS',
        Bootstrap: 'Bootstrap',
        Flexbox: 'Flexbox',
        Grid: 'Grid',
        ESXEcmascript: 'ESX (Ecmascript)',
        MVC: 'MVC',
        D3Js: 'D3Js',
        CypressTest: 'Cypress Test',
        Yup: 'Yup',
        Zod: 'Zod',
        SolidPrinciples: 'Solid Principles',
        RESTAPIDevelopment: 'REST API Development',
      },
    },
    professionalExperience: {
      title: 'Professional Experience',
      frontendDeveloper: {
        title: 'Front-End Developer',
        details: 'Hoshan Kavosh Borna, Tehran, Iran | March 2024 – Present',
        tasks: {
          task1: 'Designed and implemented a modern UI for Bizagi workflow engine, enabling intuitive user interaction for internal business processes.',
          task2: 'Customized complex UI components to interact with organizational workflows and forms, improving user experience and operational efficiency.',
          task3: 'Developed and customized MapStore2, an open-source project, to meet internal project requirements, enhancing mapping functionalities.',
          task4: 'Created a template integrated with Apache NIFI to display and manage process groups in a table format.',
        },
      },
    },
    languages: {
      title: 'Languages',
      english: 'English: Upper-intermediate',
      persian: 'Persian: Native',
    },
  },
  contact: {
    title: 'Get in Touch',
    description: 'I\'m always open to new opportunities and collaborations. Feel free to reach out via the methods below to discuss projects, ideas, or just to connect!',
    methodsAria: 'Contact Mahmoud Yousefi via {{platform}}',
    methods: {
      email: { label: 'Email' },
      linkedin: { label: 'LinkedIn' },
      github: { label: 'GitHub' },
      whatsapp: { label: 'WhatsApp' },
      telegram: { label: 'Telegram' },
    },
  },
  blog: {
    title: 'Blog',
    readMore: 'Read More',
    readMoreAria: 'Read more about {{title}}',
    posts: {
      post1: {
        title: 'Building a Custom UI for Bizagi Workflow with React and Redux',
        excerpt: 'Discover how I crafted an intuitive UI for Bizagi using React, Redux-Toolkit, and Material UI to streamline enterprise workflows.',
        badges: ['React', 'Redux-Toolkit', 'Material UI'],
      },
      post2: {
        title: 'Integrating OpenLayers with React for Interactive Maps',
        excerpt: 'A guide to building dynamic GIS applications by integrating OpenLayers and Maplibre with React for enterprise mapping solutions.',
        badges: ['OpenLayers', 'Maplibre', 'React'],
      },
      post3: {
        title: 'Best Practices for REST API Development with Nest.js',
        excerpt: 'Learn how I build scalable REST APIs using Nest.js, TypeScript, and SOLID principles for robust backend systems.',
        badges: ['Nest.js', 'TypeScript', 'REST API'],
      },
      post4: {
        title: 'End-to-End Testing in React Apps with Cypress',
        excerpt: 'Explore my approach to robust E2E testing for React apps using Cypress to ensure reliable enterprise applications.',
        badges: ['Cypress', 'React', 'Testing'],
      },
      post5: {
        title: 'Optimizing Web Performance with Next.js and TailwindCSS',
        excerpt: 'How I leverage Next.js and TailwindCSS to create fast, responsive, and visually appealing web applications.',
        badges: ['Next.js', 'TailwindCSS', 'Performance'],
      },
      post6: {
        title: 'Building Scalable Backends with Django and PostgreSQL',
        excerpt: 'A dive into creating efficient, scalable backends using Django, PostgreSQL, and Django REST Framework for enterprise needs.',
        badges: ['Django', 'PostgreSQL', 'DRF'],
      },
      post7: {
        title: 'Crafting Responsive UIs with Ant Design and React Hooks',
        excerpt: 'My experience using Ant Design and React Hooks to build modern, user-friendly interfaces for complex applications.',
        badges: ['Ant Design', 'React Hooks', 'UI/UX'],
      },
    },
  },
  hero: {
    title: 'Welcome to my corner of the web!',
    description: 'Hi, I’m Mahmoud Yousefi, a Full-Stack Developer crafting seamless, user-focused web applications and geospatial systems using React, TypeScript, and modern technologies.',
    contactButton: 'Get in Touch',
    projectsButton: 'View My Projects',
    avatarAria: 'View Mahmoud Yousefi\'s profile picture',
    avatarAlt: 'Mahmoud Yousefi',
    modalAria: 'Enlarged profile picture',
    modalAlt: 'Mahmoud Yousefi Enlarged',
    contactAria: 'Contact Mahmoud Yousefi',
    projectsAria: 'View Mahmoud Yousefi\'s Projects',
    closeModalAria: 'Close profile picture modal',
  },
};

// Persian translations
const faTranslations = {
  header: {
    title: 'محمود یوسفی',
    home: 'خانه',
    about: 'درباره',
    skills: 'مهارت‌ها',
    projects: 'پروژه‌ها',
    resume: 'رزومه',
    contact: 'تماس',
    blog: 'بلاگ',
    more: 'بیشتر',
  },
  about: {
    title: 'درباره من',
    paragraph1:
      'من محمود یوسفی، یک توسعه‌دهنده فول‌استک پرشور با پیشینه قوی در علوم کامپیوتر هستم و در حال حاضر در حال تحصیل در مقطع کارشناسی ارشد الگوریتم‌ها و نظریه محاسبات در دانشگاه شاهد، تهران، ایران هستم. من در ساخت برنامه‌های وب مدرن و پاسخ‌گو با استفاده از فناوری‌هایی مانند React، TypeScript، Node.js و ابزارهای GIS مانند OpenLayers و Maplibre تخصص دارم.',
    paragraph2:
      'سفر من در فناوری با مدرک کارشناسی در علوم کامپیوتر از دانشگاه شاهد (فارغ‌التحصیل ۱۴۰۳) آغاز شد، جایی که پایه‌ای محکم در برنامه‌نویسی، ساختارهای داده و اصول مهندسی نرم‌افزار کسب کردم. در طول تحصیلات کارشناسی، پارادایم‌های مختلف برنامه‌نویسی را کاوش کردم و پروژه‌هایی ساختم که علاقه‌ام را به ایجاد رابط‌های کاربری کاربرپسند و سیستم‌های بک‌اند مقیاس‌پذیر برانگیخت. این موضوع من را به تخصص در توسعه فول‌استک سوق داد، با تمرکز بر React برای فرانت‌اند و چارچوب‌هایی مانند Django و Nest.js برای توسعه بک‌اند.',
    paragraph3:
      'در حال حاضر، در حال تحصیل در مقطع کارشناسی ارشد الگوریتم‌ها و نظریه محاسبات هستم که درک من از الگوریتم‌های پیچیده، تکنیک‌های بهینه‌سازی و نظریه محاسباتی را عمیق‌تر می‌کند. این پیگیری تحصیلی توانایی من را در طراحی راه‌حل‌های کارآمد برای مشکلات دنیای واقعی، به‌ویژه در برنامه‌های وب در مقیاس بزرگ و سیستم‌های مبتنی بر GIS، تقویت می‌کند. دروس من شامل موضوعات پیشرفته‌ای مانند نظریه گراف، پیچیدگی محاسباتی و طراحی الگوریتم است که برای بهینه‌سازی کد و بهبود عملکرد سیستم به کار می‌برم.',
    paragraph4:
      'از نظر حرفه‌ای، به‌عنوان توسعه‌دهنده فرانت‌اند در شرکت هوشان کاوش برنا کار کرده‌ام، جایی که رابط‌های کاربری بصری برای سیستم‌های سازمانی مانند موتور گردش کار Bizagi طراحی کردم و ابزارهای متن‌باز مانند MapStore2 را سفارشی‌سازی کردم. من در محیط‌های همکاری‌محور رشد می‌کنم، به اصول SOLID پایبندم و از ابزارهایی مانند Git، Docker و Cypress برای تست استفاده می‌کنم تا کد باکیفیتی ارائه دهم.',
    paragraph5:
      'وقتی کدنویسی نمی‌کنم، از کاوش فناوری‌های جدید، مشارکت در پروژه‌های متن‌باز در GitHub یا مطالعه کتاب‌های خوب در زمینه الگوریتم‌ها یا طراحی نرم‌افزار لذت می‌برم. من به زبان پارسی مسلط هستم و تسلط متوسط رو به پیشرفته‌ای در زبان انگلیسی دارم که به من امکان می‌دهد در تیم‌های متنوع به‌طور مؤثری ارتباط برقرار کنم.',
  },
  theme: {
    switchToDark: 'تغییر به تم تیره',
    switchToLight: 'تغییر به تم روشن',
  },
  language: {
    switchToPersian: 'تغییر به پارسی',
    switchToEnglish: 'تغییر به انگلیسی',
  },
  footer: {
    connect: 'با من در ارتباط باشید',
    tagline: 'قدرت‌بخشی به آینده از طریق راه‌حل‌های نوآورانه وب و ژئومکانیکی.',
    copyright: '© {{year}} محمود یوسفی. تمامی حقوق محفوظ است.',
    socialAria: 'مشاهده پروفایل محمود یوسفی در {{platform}}',
    social: {
      github: 'گیت‌هاب',
      linkedin: 'لینکدین',
      whatsapp: 'واتساپ',
      telegram: 'تلگرام',
      email: 'ایمیل',
    },
  },
  skills: {
    title: 'مهارت‌های من',
    categories: {
      programmingScripting: 'زبان ‌های برنامه‌نویسی',
      frameworksLibraries: 'فریم‌ورک‌ها و کتابخانه‌ها',
      gisTechnologies: 'فناوری‌های GIS',
      toolsTechnologies: 'ابزارها و فناوری‌ها',
      webDevelopment: 'توسعه وب',
      testingValidation: 'کتابخانه‌های تست و اعتبارسنجی',
      otherSkills: 'سایر مهارت‌ها',
    },
  },
  projects: {
    title: 'پروژه‌های من',
    liveDemo: 'نمایش زنده',
    sourceCode: 'کد منبع',
    liveDemoAria: 'مشاهده نمایش زنده {{title}}',
    sourceCodeAria: 'مشاهده کد منبع {{title}}',
    modernShopRepo: {
      title: 'مخزن فروشگاه مدرن',
      description: 'یک پلتفرم تجارت الکترونیک ساخته شده با فناوری‌های وب مدرن.',
    },
    authApp: {
      title: 'برنامه احراز هویت',
      description: 'یک برنامه احراز هویت امن با مدیریت کاربر.',
    },
    portfolio: {
      title: 'پورتفولیو',
      description: 'یک پورتفولیو شخصی که پروژه‌ها و مهارت‌ها را به نمایش می‌گذارد.',
    },
    advancedGraph: {
      title: 'گراف پیشرفته',
      description: 'ابزاری برای تجسم داده‌های ساختارهای گرافیکی پیچیده.',
    },
    fastapiAlembicSqlalchemy: {
      title: 'FastAPI با Alembic و SQLAlchemy',
      description: 'یک پروژه FastAPI با مهاجرت‌های پایگاه داده با استفاده از Alembic و SQLAlchemy.',
    },
    drf: {
      title: 'DRF',
      description: 'یک پروژه Django REST Framework برای ساخت APIها.',
    },
    djangoTutorial: {
      title: 'آموزش Django',
      description: 'یک پروژه آموزشی برای نشان دادن اصول اولیه Django.',
    },
    fastapiMysql: {
      title: 'FastAPI با MySQL',
      description: 'یک برنامه FastAPI ادغام شده با MySQL.',
    },
    flaskTutorial: {
      title: 'آموزش Flask',
      description: 'یک پروژه آموزشی برای یادگیری فریم‌ورک Flask.',
    },
    fastapi: {
      title: 'FastAPI',
      description: 'یک پروژه FastAPI برای ساخت APIهای با عملکرد بالا.',
    },
    wicketApp: {
      title: 'برنامه Wicket',
      description: 'یک برنامه ساخته شده با استفاده از فریم‌ورک Apache Wicket.',
    },
    nestjsMongodb: {
      title: 'NestJS با MongoDB',
      description: 'یک برنامه NestJS ادغام شده با MongoDB.',
    },
    nestjsTypeorm: {
      title: 'NestJS با TypeORM',
      description: 'یک پروژه NestJS با استفاده از TypeORM برای مدیریت پایگاه داده.',
    },
    gisExample: {
      title: 'نمونه GIS',
      description: 'یک برنامه GIS که قابلیت‌های ژئومکانیکی را نشان می‌دهد.',
    },
    antdTest: {
      title: 'تست Ant Design',
      description: 'یک پروژه برای آزمایش کامپوننت‌های Ant Design.',
    },
    portfolioAdditional: {
      title: 'پورتفولیو (اضافی)',
      description: 'یک پروژه پورتفولیو دیگر که کارهای اضافی را به نمایش می‌گذارد.',
    },
  },
  resume: {
    title: 'رزومه',
    download: 'دانلود رزومه (PDF)',
    downloadAria: 'دانلود رزومه محمود یوسفی به فرمت PDF',
    professionalSummary: {
      title: 'خلاصه ای از مهارت ها',
      description: 'یک توسعه‌دهنده فول‌استک با اشتیاق و مهارت بالا با پیشینه قوی در علوم کامپیوتر، در حال حاضر در حال تحصیل در مقطع کارشناسی ارشد در الگوریتم‌ها و نظریه محاسبات. دارای تجربه عملی در ساخت، بهینه‌سازی و نگهداری برنامه‌های وب پیچیده با استفاده از فناوری‌های مدرن. در توسعه رابط‌های کاربری کاربرپسند، پیاده‌سازی راه‌حل‌های کارآمد و همکاری در محیط‌های تیمی برای موفقیت پروژه‌ها مهارت دارم.',
    },
    education: {
      title: 'تحصیلات',
      masters: {
        title: 'کارشناسی ارشد در الگوریتم‌ها و نظریه محاسبات',
        details: 'دانشگاه شاهد، تهران، ایران | ۱۴۰۳ - تاکنون',
      },
      bachelors: {
        title: 'کارشناسی علوم کامپیوتر',
        details: 'دانشگاه شاهد، تهران، ایران | فارغ‌التحصیل ۱۴۰۳',
      },
    },
    skills: {
      title: 'مهارت‌ها',
      categories: {
        programmingScripting: 'برنامه‌نویسی و اسکریپت‌نویسی',
        frameworksLibraries: 'فریم‌ورک‌ها و کتابخانه‌ها',
        gisTechnologies: 'فناوری‌های GIS',
        toolsTechnologies: 'ابزارها و فناوری‌ها',
        webDevelopment: 'توسعه وب',
        testingValidation: 'کتابخانه‌های تست و اعتبارسنجی',
        otherSkills: 'سایر مهارت‌ها',
      },
      items: {
        JavaScript: 'JavaScript',
        TypeScript: 'TypeScript',
        PHP: 'PHP',
        Python: 'Python',
        ReactJS: 'ReactJS',
        ReduxToolkit: 'Redux-Toolkit',
        ReduxThunk: 'Redux-Thunk',
        ReactHooks: 'React Hooks',
        AntDesign: 'Ant Design',
        MaterialUI: 'Material UI',
        NodejsNestjs: 'Node.js (Nest.js)',
        Nextjs: 'Next.js',
        Expressjs: 'Express.js',
        FastApi: 'FastApi',
        DRF: 'DRF',
        Django: 'Django',
        Flask: 'Flask',
        OpenLayers: 'OpenLayers',
        Maplibre: 'Maplibre',
        Git: 'Git',
        GitHub: 'GitHub',
        GitLab: 'GitLab',
        Docker: 'Docker',
        MySQL: 'MySQL',
        PostgreSQL: 'PostgreSQL',
        MongoDB: 'MongoDB',
        Prisma: 'Prisma',
        TypeORM: 'TypeORM',
        SQLAlchemy: 'SQLAlchemy',
        Alembic: 'Alembic',
        HTMLCSS: 'HTML & CSS',
        SASS: 'SASS',
        Less: 'Less',
        TailwindCSS: 'TailwindCSS',
        Bootstrap: 'Bootstrap',
        Flexbox: 'Flexbox',
        Grid: 'Grid',
        ESXEcmascript: 'ESX (Ecmascript)',
        MVC: 'MVC',
        D3Js: 'D3Js',
        CypressTest: 'Cypress Test',
        Yup: 'Yup',
        Zod: 'Zod',
        SolidPrinciples: 'Solid Principles',
        RESTAPIDevelopment: 'REST API Development',
      },
    },
    professionalExperience: {
      title: 'تجربه حرفه‌ای',
      frontendDeveloper: {
        title: 'توسعه‌دهنده فرانت‌اند',
        details: 'هوشان کاوش برنا، تهران، ایران | اسفند ۱۴۰۲ - تاکنون',
        tasks: {
          task1: 'طراحی و پیاده‌سازی رابط کاربری مدرن برای موتور گردش کار بیزاگی، که امکان تعامل بصری کاربران با فرآیندهای داخلی کسب‌وکار را فراهم کرد.',
          task2: 'سفارشی‌سازی کامپوننت‌های پیچیده رابط کاربری برای تعامل با گردش‌های کاری سازمانی و فرم‌ها، بهبود تجربه کاربری و کارایی عملیاتی.',
          task3: 'توسعه و سفارشی‌سازی MapStore2، یک پروژه متن‌باز، برای پاسخگویی به نیازهای پروژه داخلی، بهبود قابلیت‌های نقشه‌برداری.',
          task4: 'ایجاد یک قالب یکپارچه با Apache NIFI برای نمایش و مدیریت گروه‌های فرآیند در قالب جدول.',
        },
      },
    },
    languages: {
      title: 'زبان‌ها',
      english: 'انگلیسی: متوسط رو به پیشرفته',
      persian: 'پارسی: بومی',
    },
  },
  contact: {
    title: 'تماس با من',
    description: 'من همیشه برای فرصت‌ها و همکاری‌های جدید آماده‌ام. از طریق روش‌های زیر می‌توانید برای بحث درباره پروژه‌ها، ایده‌ها یا فقط برای ارتباط با من تماس بگیرید!',
    methodsAria: 'تماس با محمود یوسفی از طریق {{platform}}',
    methods: {
      email: { label: 'ایمیل' },
      linkedin: { label: 'لینکدین' },
      github: { label: 'گیت‌هاب' },
      whatsapp: { label: 'واتساپ' },
      telegram: { label: 'تلگرام' },
    },
  },
  blog: {
    title: 'بلاگ ها',
    readMore: 'بیشتر بخوانید',
    readMoreAria: 'بیشتر درباره {{title}} بخوانید',
    posts: {
      post1: {
        title: 'ساخت رابط کاربری سفارشی برای گردش کار بیزاجی با ری‌اکت و ریداکس',
        excerpt: 'کشف کنید چگونه با استفاده از ری‌اکت، ریداکس-تولکیت و متریال یوآی رابط کاربری بصری برای بیزاجی ساختم تا فرآیندهای سازمانی را ساده‌سازی کنم.',
        badges: ['ری‌اکت', 'رداکس-تولکیت', 'متریال یوآی'],
      },
      post2: {
        title: 'یکپارچه‌سازی اوپن‌لایرز با ری‌اکت برای نقشه‌های تعاملی',
        excerpt: 'راهنمایی برای ساخت برنامه‌های GIS پویا با یکپارچه‌سازی اوپن‌لایرز و مپ‌لیبر با ری‌اکت برای راه‌حل‌های نقشه‌برداری سازمانی.',
        badges: ['اوپن‌لایرز', 'مپ‌لیبر', 'ری‌اکت'],
      },
      post3: {
        title: 'بهترین روش‌ها برای توسعه REST API با نست.جی‌اس',
        excerpt: 'بیاموزید چگونه با استفاده از نست.جی‌اس، تایپ‌اسکریپت و اصول سالید، APIهای REST مقیاس‌پذیر برای سیستم‌های بک‌اند قدرتمند می‌سازم.',
        badges: ['نست.جی‌اس', 'تایپ‌اسکریپت', 'REST API'],
      },
      post4: {
        title: 'تست کامل در برنامه‌های ری‌اکت با سایپرس',
        excerpt: 'رویکرد من برای تست کامل (E2E) برنامه‌های ری‌اکت با استفاده از سایپرس برای اطمینان از برنامه‌های سازمانی قابل اعتماد را کاوش کنید.',
        badges: ['سایپرس', 'ری‌اکت', 'تست'],
      },
      post5: {
        title: 'بهینه‌سازی عملکرد وب با نکس‌جی‌اس و تیلویند سی‌اس‌اس',
        excerpt: 'چگونه از نکس‌جی‌اس و تیلویند سی‌اس‌اس برای ایجاد برنامه‌های وب سریع، پاسخ‌گو و جذاب بصری استفاده می‌کنم.',
        badges: ['نکس‌جی‌اس', 'تیلویند سی‌اس‌اس', 'عملکرد'],
      },
      post6: {
        title: 'ساخت بک‌اندهای مقیاس‌پذیر با جانگو و پستگرس‌کیو‌ال',
        excerpt: 'نگاهی عمیق به ایجاد بک‌اندهای کارآمد و مقیاس‌پذیر با استفاده از جانگو، پستگرس‌کیو‌ال و Django REST Framework برای نیازهای سازمانی.',
        badges: ['جانگو', 'پستگرس‌کیو‌ال', 'دی‌آر‌اف'],
      },
      post7: {
        title: 'ساخت رابط‌های کاربری پاسخ‌گو با انت دیزاین و هوک‌های ری‌اکت',
        excerpt: 'تجربه من در استفاده از انت دیزاین و هوک‌های ری‌اکت برای ساخت رابط‌های کاربری مدرن و کاربرپسند برای برنامه‌های پیچیده.',
        badges: ['انت دیزاین', 'هوک‌های ری‌اکت', 'رابط کاربری/تجربه کاربری'],
      },
    },
  },
  hero: {
    title: 'به صفحه شخصی من خوش آمدید!',
    description: 'سلام، من محمود یوسفی هستم؛ توسعه‌دهنده فول‌استک که با بهره‌گیری از React، TypeScript و فناوری‌های مدرن، به ساخت وب‌اپلیکیشن‌ها و سامانه‌های ژئوفضایی کاربرمحور و یکپارچه می‌پردازم.',
    contactButton: 'تماس با من',
    projectsButton: 'مشاهده پروژه‌های من',
    avatarAria: 'مشاهده تصویر پروفایل محمود یوسفی',
    avatarAlt: 'محمود یوسفی',
    modalAria: 'تصویر پروفایل بزرگ‌شده',
    modalAlt: 'محمود یوسفی بزرگ‌شده',
    contactAria: 'تماس با محمود یوسفی',
    projectsAria: 'مشاهده پروژه‌های محمود یوسفی',
    closeModalAria: 'بستن پنجره تصویر پروفایل',
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fa: { translation: faTranslations },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React handles XSS
    },
  });

export default i18n;