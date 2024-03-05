// Change language on JS

const allLangs = ['en', 'ru'];
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'en';
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

const homeText = {
    "home_page-title": {
        en: "Inna style",
        ru: "Инна Семенова",
    },
    "home_page-1": {
        en: "About me",
        ru: "Обо мне",
    },
    "home_page-2": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "home_page-3": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "home_page-4": {
        en: "Services",
        ru: "Услуги",
    },
    "home_page-5": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "home_page-6": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "home_page-7": {
        en: "Contacts",
        ru: "Контакты",
    },
    "home_page-8": {
        en: "Inna",
        ru: "Инна",
    },
    "home_page-9": {
        en: "Semenova",
        ru: "Семенова",
    },
    "home_page-10": {
        en: "Elevate your style: personalized fashion mastery. Unlock your unique aesthetic with tailored selections just for you.",
        ru: "Откройте дверь в мир стиля с персональным стилистом. Раскройте свою уникальность с помощью тщательно подобранной для вас одежды.",
    },
    "home_page-10-1": {
        en: "Your personal fashion stylist.",
        ru: "Твой персональный модный стилист.",
    },
    "home_page-11": {
        en: "Hello! I'm Inna, your style maestro, weaving magic into every ensemble. As a stylist specializing in photo shoots, I curate captivating looks that turn moments into memories. Beyond the lens, I'm your go-to guide for personal style and wardrobe curation. Let's not just follow trends, let's set them. I'm passionate about sustainable fashion, I strive to curate looks that not only enhance your style but also tread lightly on our planet.",
        ru: "Привет! Я Инна, твой стилист-маэстро, вдыхающий волшебство в каждый наряд. Специализируясь на фотосессиях, я создаю захватывающие образы, превращая мгновения в незабываемые воспоминания. Вне объектива я твой проводник в мире личного стиля и гардеробной курации. Давайте не просто следовать трендам, а создавать их. Меня вдохновляет устойчивая мода, и я стремлюсь создавать образы, которые не только выделяют ваш стиль, но и заботятся о нашей планете.",
    },
    "home_page-12": {
        en: "Ready for a style revolution? Join me on this exhilarating fashion journey, where every outfit tells a story, and you're the main character.",
        ru: "Готовы к модной революции? Присоединяйся ко мне в этом захватывающем путешествии по миру моды, где каждый наряд рассказывает свою историю, а ты – главный герой.",
    },
    "home_page-13": {
        en: "Services",
        ru: "Услуги",
    },
    "home_page-14": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "home_page-15": {
        en: "Book your first free consultation now:",
        ru: "Запишитесь на первую бесплатную консультацию",
    },
    "home_page-17": {
        en: "Send",
        ru: "Отправить",
    },
    "home_page-18": {
        en: "About me",
        ru: "Обо мне",
    },
    "home_page-19": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "home_page-20": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "home_page-21": {
        en: "Services",
        ru: "Услуги",
    },
    "home_page-22": {
        en: "Thank you for scheduling a consultation with me!",
        ru: "Спасибо, что записались на консультацию!",
    },
    "home_page-23": {
        en: "I will reach out to you at the earliest convenience.",
        ru: "Я свяжусь с вами в самое ближайшее время.",
    },
    "home_page-24": {
        en: "First name:",
        ru: "Ваше имя:",
    },
    "home_page-25": {
        en: "Second name:",
        ru: "Ваша фамилия:",
    },
    "home_page-26": {
        en: "E-mail:",
        ru: "Эл. почта:",
    },
    "home_page-27": {
        en: "Phone number:",
        ru: "Номер телефона:",
    },
};
const portPage = {
    "port_page-title": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "port_page-1": {
        en: "About me",
        ru: "Обо мне",
    },
    "port_page-2": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "port_page-3": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "port_page-4": {
        en: "Services",
        ru: "Услуги",
    },
    "port_page-5": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "port_page-6": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "port_page-7": {
        en: "Contacts",
        ru: "Контакты",
    },
    "port_page-8": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "port_page-9": {
        en: "About me",
        ru: "Обо мне",
    },
    "port_page-10": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "port_page-11": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "port_page-12": {
        en: "Services",
        ru: "Услуги",
    },
};
const ecoPage = {
    "eco_page-title": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "eco_page-1": {
        en: "About me",
        ru: "Обо мне",
    },
    "eco_page-2": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "eco_page-3": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "eco_page-4": {
        en: "Services",
        ru: "Услуги",
    },
    "eco_page-5": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "eco_page-6": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "eco_page-7": {
        en: "Contacts",
        ru: "Контакты",
    },
    "eco_page-8": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "eco_page-9": {
        en: "As a stylist, I support sustainable fashion. I encourage choosing quality over quantity, promoting the idea of buying less but investing in well-crafted clothing. Embracing vintage fashion is also a part of my philosophy, adding a touch of timeless elegance to contemporary style.",
        ru: "Как стилист, я поощряю устойчивую моду. Моя философия - выбирать качество вместо количества, призывая инвестировать в хорошо сделанную одежду, а не покупать ее много. Принятие винтажной моды также является неотъемлемой частью моего подхода, добавляя нотки вечной элегантности в современный стиль.",
    },
    "eco_page-10": {
        en: "I also endorse the practice of prolonging the lifespan of clothing through reuse and supporting second-hand markets, such as resale and charity shops. Embracing sustainable fashion involves not only making mindful initial choices but also finding creative ways to extend the life cycle of our clothing. Let's promote a wardrobe that's not just stylish but also eco-friendly and socially responsible.",
        ru: "Я также поддерживаю идею увеличения срока службы одежды через повторное использование и поддержку рынков подержанных товаров, таких как магазины перепродаж и благотворительные магазины. Для меня устойчивая мода не просто о внимательном выборе, но и о творческом подходе к продлению жизненного цикла одежды. Давайте совместно работать над тем, чтобы наши гардеробы были не только стильными, но и экологически и социально ответственными.",
    },
    "eco_page-11": {
        en: "Write me for collaboration",
        ru: "Напишите мне для сотрудничества",
    },
    "eco_page-13": {
        en: "Send",
        ru: "Отправить",
    },
    "eco_page-14": {
        en: "About me",
        ru: "Обо мне",
    },
    "eco_page-15": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "eco_page-16": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "eco_page-17": {
        en: "Services",
        ru: "Услуги",
    },
    "eco_page-18": {
        en: "Thank you for scheduling a consultation with me!",
        ru: "Спасибо, что записались на консультацию!",
    },
    "eco_page-19": {
        en: "I will reach out to you at the earliest convenience.",
        ru: "Я свяжусь с вами в самое ближайшее время.",
    },
    "eco_page-20": {
        en: "First name:",
        ru: "Ваше имя:",
    },
    "eco_page-21": {
        en: "Second name:",
        ru: "Ваша фамилия:",
    },
    "eco_page-22": {
        en: "E-mail:",
        ru: "Эл. почта:",
    },
    "eco_page-23": {
        en: "Phone number:",
        ru: "Номер телефона:",
    },
};
const shootPage = {
    "shoot_page-title": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "shoot_page-1": {
        en: "About me",
        ru: "Обо мне",
    },
    "shoot_page-2": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "shoot_page-3": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "shoot_page-4": {
        en: "Services",
        ru: "Услуги",
    },
    "shoot_page-5": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "shoot_page-6": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "shoot_page-7": {
        en: "Contacts",
        ru: "Контакты",
    },
    "shoot_page-8": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "shoot_page-9": {
        en: "Creating a Unique Look for an Individual Photoshoot",
        ru: "Создание уникального образа для индивидуальной фотосессии",
    },
    "shoot_page-10": {
        en:  "Cost: 2 outfits for €100",
        ru: "Стоимость: 2 образа - €100",
    },
    "shoot_page-11": {
        en: "Immerse yourself in a unique individual photoshoot experience, where every frame is an expressive work of art. My styling service transforms and emphasizes your individuality through style, fashion, and character.",
        ru: "Погрузитесь в уникальный индивидуальный опыт фотосессии, где каждый кадр – это выразительное произведение искусства. Моя услуга стилизации преобразует и подчеркивает вашу индивидуальность через стиль, моду и характер.",
    },
    "shoot_page-12": {
        en: "Consultation and Planning: Discussing your preferences, style inspirations, and goals to craft a unique look reflecting your personality.",
        ru: "Обсуждение ваших предпочтений, стиля и целей для создания уникального образа, отражающего вашу личность.",
    },
    "shoot_page-13": {
        en: "Wardrobe Selection: Professional guidance in choosing clothing that mirrors your style and complements the selected shoot concept.",
        ru: "Профессиональная помощь в подборе одежды, которая будет отражать ваш стиль и дополнять выбранную концепцию съемки.",
    },
    "shoot_page-14": {
        en: "Visual Appearance: Crafting a distinctive makeup and hairstyle enhancing your natural beauty, harmonizing with the overall look.",
        ru: "Создание уникального макияжа и прически, подчеркивающих вашу естественную красоту и гармонирующих с общим обликом.",
    },
    "shoot_page-15": {
        en: "Locations and Accessories: Selecting unique locations and accessories to complement your look, adding emotional depth to the photoshoot.",
        ru: "Выбор уникальных аксессуаров, чтобы дополнить ваш облик и добавить эмоциональную глубину фотосессии.",
    },
    "shoot_page-16": {
        en: "Guidance During the Shoot: Actively participating in the shooting process to ensure harmony and express your individual style.",
        ru: "Активное участие в процессе съемки для обеспечения гармонии и выражения вашего индивидуального стиля.",
    },
    "shoot_page-17": {
        en: "Book",
        ru: "Записаться",
    },
    "shoot_page-18": {
        en: "Styling for Model Photoshoot for Portfolio Creation",
        ru: "Стилизация модельной фотосъемки для создания портфолио.",
    },
    "shoot_page-19": {
        en: "Cost: individually",
        ru: "Стоимость: индивидуально",
    },
    "shoot_page-20": {
        en: "Looking for professional styling for a portfolio model photoshoot? My service offers carefully crafted looks highlighting the uniqueness and versatility of your modeling potential.",
        ru: "Моя услуга предлагает тщательно созданные образы, подчеркивающие уникальность и многогранность вашего модельного потенциала.",
    },
    "shoot_page-21": {
        en: "Concept and Preparation: Crafting a styling concept to align with your individuality and aspirations in the modeling industry.",
        ru: "Создание концепции стиля, соответствующей вашей индивидуальности и амбициям в индустрии моды.",
    },
    "shoot_page-22": {
        en: "Wardrobe Selection: Professionally choosing outfits, accessories, and footwear to accentuate your unique features and styles.",
        ru: "Профессиональный подбор нарядов, аксессуаров и обуви для подчеркивания ваших уникальных черт и стилей.",
    },
    "shoot_page-23": {
        en: "Team Collaboration: Interacting with makeup artists, hairstylists, and photographers for a harmonious and effective look.",
        ru: "Взаимодействие с визажистами, стилистами по волосам и фотографами для создания гармоничного и эффективного образа.",
    },
    "shoot_page-24": {
        en: "Shoot Organization: Actively organizing the shooting process for high-quality and professional shots.",
        ru: "Активная организация процесса съемки для получения качественных и профессиональных кадров.",
    },
    "shoot_page-25": {
        en: "By choosing my styling service for a model photoshoot portfolio, you will not only receive expressive looks but also support in creating a compelling and impressive portfolio for a successful entry into the modeling industry.",
        ru: "При выборе услуги стилизации вы получите не только выразительные образы, но и поддержку в создании убедительного портфолио для успешного старта в индустрии моделирования.",
    },
    "shoot_page-26": {
        en: "Book",
        ru: "Записаться",
    },
    "shoot_page-27": {
        en: "Styling for Commercial Photoshoots, Product Catalog Creation",
        ru: "Стилизация коммерческих фотосессий, создание каталогов продукции.",
    },
    "shoot_page-28": {
        en: "Cost: individually",
        ru: "Стоимость: индивидуально",
    },
    "shoot_page-29": {
        en: "Seeking professional styling for commercial photoshoots and product catalogs? My service ensures everything for top-quality visual content:",
        ru: "Моя услуга дает все необходимое для создания визуального контента высокого качества:",
    },
    "shoot_page-30": {
        en: "Initial Consultation: We discuss your goals, styling needs, thoroughly analyzing your products and target audience",
        ru: "Мы обсуждаем ваши цели и потребности тщательно анализируя ваши продукты и целевую аудиторию.",
    },
    "shoot_page-31": {
        en: "Concept Development: We'll create a unique styling concept aligned with your branding and emphasizing key product characteristics.",
        ru: "Разработаем уникальную концепцию стиля, соответствующую вашему бренду и выделяющую ключевые характеристики.",
    },
    "shoot_page-32": {
        en: "Wardrobe Selection: I offer professional advice on choosing clothing and accessories that harmonize with your products.",
        ru: "Предлагаю профессиональные консультации по выбору одежды и аксессуаров, которые гармонируют с вашими продуктами.",
    },
    "shoot_page-33": {
        en: "Shoot Organization: Our team actively ensures every element aligns with the defined concept in the shooting process.",
        ru: "Активно обеспечиваю соответствие каждого элемента заданной концепции в процессе съемки.",
    },
    "shoot_page-34": {
        en: "Result Guarantee: I assure appealing product styling that effectively communicates your corporate identity.",
        ru: "Гарантирую привлекательный стиль продукции, который эффективно передает корпоративную идентичность вашего бренда.",
    },
    "shoot_page-35": {
        en: "Receive professional styling and confidence your product will shine in your advertising and catalog.",
        ru: "Получите профессиональный стиль и уверенность, чтобы ваш продукт сиял в рекламе и каталоге.",
    },
    "shoot_page-36": {
        en: "Book",
        ru: "Записаться",
    },
    "shoot_page-37": {
        en: "About me",
        ru: "Обо мне",
    },
    "shoot_page-38": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "shoot_page-39": {
        en: "Ecostyle",
        ru: "Экостиль",
    },
    "shoot_page-40": {
        en: "Services",
        ru: "Услуги",
    },
    "shoot_page-41": {
        en: "Book your first free consultation now:",
        ru: "Запишитесь на первую бесплатную консультацию",
    },
    "shoot_page-43": {
        en: "Send",
        ru: "Отправить",
    },
    "shoot_page-44": {
        en: "Thank you for scheduling a consultation with me!",
        ru: "Спасибо, что записались на консультацию!",
    },
    "shoot_page-45": {
        en: "I will reach out to you at the earliest convenience.",
        ru: "Я свяжусь с вами в самое ближайшее время.",
    },
    "shoot_page-46": {
        en: "First name:",
        ru: "Ваше имя:",
    },
    "shoot_page-47": {
        en: "Second name:",
        ru: "Ваша фамилия:",
    },
    "shoot_page-48": {
        en: "E-mail:",
        ru: "Эл. почта:",
    },
    "shoot_page-49": {
        en: "Phone number:",
        ru: "Номер телефона:",
    },
};
const persPage = {
    "pers_page-title": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "pers_page-1": {
        en: "About me",
        ru: "Обо мне",
    },
    "pers_page-2": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "pers_page-3": {
        en: "Ecostyle",
        ru: "ЭкоСтиль",
    },
    "pers_page-4": {
        en: "Services",
        ru: "Услуги",
    },
    "pers_page-5": {
        en: "Shooting stylization",
        ru: "Стилизация Фотосъемки",
    },
    "pers_page-6": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "pers_page-7": {
        en: "Contacts",
        ru: "Контакты",
    },
    "pers_page-8": {
        en: "Personal stylist",
        ru: "Персональный стилист",
    },
    "pers_page-9": {
        en: "First consultation",
        ru: "Первая консультация",
    }, 
    "pers_page-10": {
        en: "Cost: free",
        ru: "Стоимость: бесплатно",
    }, 
    "pers_page-11": {
        en: "Duration: 30-40 min",
        ru: "Продолжительность: 30-40 мин.",
    }, 
    "pers_page-12": {
        en: "What's your first consultation includes:",
        ru: "Что включает ваша первая консультация:",
    }, 
    "pers_page-13": {
        en: "Image and clothing style analyse.",
        ru: "Анализ стиля изображения и одежды.",
    }, 
    "pers_page-14": {
        en: "Determining the goals you want to achieve through the transformation.",
        ru: "Определение целей, которые вы хотите достичь через трансформацию.",
    }, 
    "pers_page-15": {
        en: "Drawing up an optimal plan for working with your image.",
        ru: "Составление оптимального плана работы с вашим образом.",
    }, 
    "pers_page-16": {
        en: "During the consultation, we will analise your daily routine, talk about your hobbies and work, what type of clothes you need. We will discuss your goals, objectives and wishes. You will find out how the services you are interested in work. We will draw up an optimal work plan for the best result.",
        ru: "Во время консультации мы проанализируем ваш повседневный режим, поговорим о ваших хобби и работе, о том, какой тип одежды вам нужен. Обсудим ваши цели, задачи и пожелания. Вы узнаете, как работают интересующие вас услуги. Мы разработаем оптимальный план работы для достижения лучшего результата.",
    }, 
    "pers_page-17": {
        en: "Book",
        ru: "Записаться",
    }, 
    "pers_page-18": {
        en: "Image consultation(online/offline)",
        ru: "Имидж консультация (онлайн/оффлайн)",
    }, 
    "pers_page-19": {
        en: "Cost: €100",
        ru: "Стоимость: €100",
    }, 
    "pers_page-20": {
        en: "Duration: 2-3 hours",
        ru: "Продолжительность: 2-3 часа",
    }, 
    "pers_page-21": {
        en: "What's your consultation includes:",
        ru: "Что включает в себя консультация:",
    }, 
    "pers_page-22": {
        en: "Image and clothing style analyse.",
        ru: "Анализ стиля и одежды.",
    }, 
    "pers_page-23": {
        en: "Determining the goals you want to achieve through the transformation.",
        ru: "Определение целей, которые вы хотите достичь через трансформацию.",
    }, 
    "pers_page-24": {
        en: "Drawing up an optimal plan for working with your image.",
        ru: "Составление оптимального плана работы с вашим образом.",
    }, 
    "pers_page-25": {
        en: "During the consultation, we will analise your daily routine, talk about your hobbies and work, what type of clothes you need. We will discuss your goals, objectives and wishes. You will find out how the services you are interested in work. We will draw up an optimal work plan for the best result.",
        ru: "Во время консультации мы проанализируем ваш повседневный режим, обсудим ваши хобби и работу, определим, какой тип одежды вам необходим. Мы обсудим ваши цели, задачи и пожелания. Вы узнаете, как работают интересующие вас услуги. Мы разработаем оптимальный план работы для достижения наилучшего результата.",
    }, 
    "pers_page-26": {
        en: "Book",
        ru: "Записаться",
    }, 
    "pers_page-27": {
        en: "Wardrobe revision",
        ru: "Ревизия гардероба",
    }, 
    "pers_page-28": {
        en: "Cost: €200",
        ru: "Стоимость: €200",
    }, 
    "pers_page-29": {
        en: "Duration : 4-5 hours",
        ru: "Стоимость: 4-5 часа",
    }, 
    "pers_page-30": {
        en: "What does the service include:",
        ru: "Что включает в себя услуга:",
    }, 
    "pers_page-31": {
        en: "The stylist will come to your home.",
        ru: "Стилист придет к вам домой.",
    }, 
    "pers_page-32": {
        en: "Review all existing items and provide recommendations for each of them (current/not current, suitable/not suitable: in terms of color, cut, style). As a result, some items of clothing will be excluded from the wardrobe",
        ru: "Просмотр и рекомендации для каждой вещи в гардеробе с выделением актуальных и подходящих предметов, что приведет к исключению некоторых из них.",
    }, 
    "pers_page-33": {
        en: "From the approved items, the stylist will create ready-made outfits, photograph them, and you will receive a lookbook (an album with photos of clothing combinations for everyday wear).",
        ru: "Из утвержденных предметов стилист создаст и сфотографирует готовые образы, предоставляя вам лукбук для повседневного ношения.",
    }, 
    "pers_page-34": {
        en: "Recommendations will be given regarding the items of clothing that need to be purchased to make your wardrobe cohesive and maximally functional.",
        ru: "Будут предоставлены рекомендации относительно тех предметов одежды, которые необходимо приобрести для создания согласованного и максимально функционального гардероба.",
    }, 
    "pers_page-35": {
        en: "The wardrobe is organized for one season (Summer, Fall-Winter, or Fall-Spring, Summer-Spring).",
        ru: "Гардероб организуется для одного сезона (лето, осень-зима или осень-весна, лето-весна).",
    }, 
    "pers_page-36": {
        en: "Book",
        ru: "Записаться",
    }, 
    "pers_page-37": {
        en: "Shopping assistance",
        ru: "Помощь в шопинге",
    }, 
    "pers_page-38": {
        en: "Cost: €200",
        ru: "Стоимость: €200",
    }, 
    "pers_page-39": {
        en: "Duration up to 5 hours",
        ru: "Продолжительность до 5 часов",
    }, 
    "pers_page-40": {
        en: "Professional shopping assistance guarantees you time and money savings. I advocate for sustainable fashion, including vintage, charity shops, and resale. Interested? I can guide you to the best vintage and charity shops in Dublin for unique finds, saving money while supporting the environment by reducing pollution.",
        ru: "Я могу направить вас к лучшим винтажным и благотворительным магазинам в Дублине для уникальных находок, экономя ваши средства и одновременно поддерживая окружающую среду путем сокращения загрязнения.",
    }, 
    "pers_page-41": {
        en: "For a unique style, explore vintage, charity, and resale shops. They offer rare and stylish finds to enhance your individual taste. If you have preferences or need advice, share more details, and I'll gladly assist!",
        ru: "Ищите уникальный стиль в винтажных, благотворительных и вторичных магазинах. Здесь можно найти редкие находки, подчеркивающие ваш индивидуальный вкус. Поделитесь предпочтениями, и я помогу с выбором!",
    }, 
    "pers_page-42": {
        en: "Benefits of shopping with a stylist:",
        ru: "Преимущества шопинга с стилистом:",
    }, 
    "pers_page-43": {
        en: "Avoidance of unnecessary purchases.",
        ru: "Избежание ненужных покупок.",
    }, 
    "pers_page-44": {
        en: "Time and money savings.",
        ru: "Экономия времени и денег.",
    }, 
    "pers_page-45": {
        en: "Professional advice on combining and creating outfits.",
        ru: "Профессиональные советы по сочетанию и созданию образов.",
    }, 
    "pers_page-46": {
        en: "Unique style and items that no one else has.",
        ru: "Уникальный стиль и предметы, которыми не обладает никто другой.",
    }, 
    "pers_page-47": {
        en: "Book",
        ru: "Записаться",
    },
    "pers_page-48": {
        en: "Shopping for a Special Day",
        ru: "Шопинг для особого случая",
    }, 
    "pers_page-49": {
        en: "Cost: €100",
        ru: "Стоимость: €100",
    }, 
    "pers_page-50": {
        en: "Duration up to 2 hours",
        ru: "Продолжительность до 2 часов",
    }, 
    "pers_page-51": {
        en: "If there's an important event ahead and you need to look fabulous:",
        ru: "Если впереди важное событие, и вам нужно выглядеть потрясающе:",
    }, 
    "pers_page-52": {
        en: "Wedding",
        ru: "Свадьба",
    }, 
    "pers_page-53": {
        en: "Graduation ceremony",
        ru: "Выпускной",
    }, 
    "pers_page-54": {
        en: "Birthday",
        ru: "День рожденья",
    }, 
    "pers_page-55": {
        en: "Corporate event",
        ru: "Корпоративное мероприятие",
    }, 
    "pers_page-56": {
        en: "New Year's celebration",
        ru: "Новый год",
    }, 
    "pers_page-57": {
        en: "During the shopping session, one outfit, shoes, and accessories are purchased.",
        ru: "Во время шопинг-сессии приобретается один наряд, обувь и аксессуары.",
    }, 
    "pers_page-58": {
        en: "Book",
        ru: "Записаться",
    },  
    "pers_page-59": {
        en: "Creating a Capsule Wardrobe for Vacation",
        ru: "Создание капсульного гардероба для отпуска.",
    },  
    "pers_page-60": {
        en: "Cost: €200",
        ru: "Стоимость: €200",
    },  
    "pers_page-61": {
        en: "Duration: 4 -5 hours",
        ru: "Продолжительность: 4-5 часов",
    },  
    "pers_page-62": {
        en: "This capsule wardrobe service is ideal for those who seek comfort, style, and practicality in one.",
        ru: "Эта услуга по созданию капсульного гардероба идеальна для тех, кто ищет комфорт, стиль и практичность в одном.",
    },  
    "pers_page-63": {
        en: "Individual Consultation: We'll discuss your preferences, vacation plans, color palette, and any features you want to emphasize or conceal.",
        ru: "Обсудим ваши предпочтения, планы отпуска, цветовую палитру и особенности для выделения или скрытия.",
    },  
    "pers_page-64": {
        en: "Making a List: Together, we'll identify essential clothing and accessories for your vacation, considering various events and places you'll visit.",
        ru: "Определим вместе одежду и аксессуары для вашего отпуска, учтя разнообразные мероприятия и места, которые вы посетите.",
    },  
    "pers_page-65": {
        en: "Creating Outfits: Using the selected items, we'll craft stylish, comfortable outfits that match your style.",
        ru: "Используя выбранные предметы, мы создадим стильные, комфортные образы, соответствующие вашему стилю.",
    },  
    "pers_page-66": {
        en: "Packing Tips: Receive efficient packing advice to optimize space in your luggage",
        ru: "Получите эффективные советы по упаковке для оптимизации пространства в вашем багаже.",
    },  
    "pers_page-67": {
        en: "Style Lesson: Learn valuable tips on mixing and matching items to create stylish looks while crafting your capsule wardrobe.",
        ru: "Узнавайте ценные советы по сочетанию предметов и формированию стильных образов для капсульного гардероба.",
    },  
    "pers_page-68": {
        en: "This vacation wardrobe approach saves space and ensures you have everything for a comfortable, stylish vacation.",
        ru: "Этот метод формирования отпускного гардероба экономит пространство и обеспечивает все для комфорта и стиля.",
    },  
    "pers_page-69": {
        en: "Book",
        ru: "Записаться",
    },
    "pers_page-70": {
        en: "About me",
        ru: "Обо мне",
    },
    "pers_page-71": {
        en: "Portfolio",
        ru: "Портфолио",
    },
    "pers_page-72": {
        en: "Ecostyle",
        ru: "Экостиль",
    },
    "pers_page-73": {
        en: "Services",
        ru: "Услуги",
    },
    "pers_page-74": {
        en: "Book your first free consultation now:",
        ru: "Запишитесь на первую бесплатную консультацию",
    },
    "pers_page-76": {
        en: "Send",
        ru: "Отправить",
    },
    "pers_page-77": {
        en: "Thank you for scheduling a consultation with me!",
        ru: "Спасибо, что записались на консультацию!",
    },
    "pers_page-78": {
        en: "I will reach out to you at the earliest convenience.",
        ru: "Я свяжусь с вами в самое ближайшее время.",
    },
    "pers_page-79": {
        en: "First name:",
        ru: "Ваше имя:",
    },
    "pers_page-80": {
        en: "Second name:",
        ru: "Ваша фамилия:",
    },
    "pers_page-81": {
        en: "E-mail:",
        ru: "Эл. почта:",
    },
    "pers_page-82": {
        en: "Phone number:",
        ru: "Номер телефона:",
    },  
};

function checkPagePathName() {
    switch (currentPathName) {
        case "/index.html":
            currentText = homeText;
            break;
        case "/portfolio.html":
            currentText = portPage;
            break;
        case "/ecostyle.html":
            currentText = ecoPage;
            break;
        case "/shootingstylization.html":
            currentText = shootPage;
            break;
        case "/personalstylist.html":
            currentText = persPage;
            break;
            currentText = homeText;
            break;
    }
}
checkPagePathName();

function changeLang() {
    for (const key in currentText) {
        const elements = document.querySelectorAll(`[data-lang="${key}"]`);
        elements.forEach((elem) => {
            if (elem.tagName === 'INPUT' && elem.getAttribute('placeholder')) {
                elem.setAttribute('placeholder', currentText[key][currentLang]);
            } else {
                elem.textContent = currentText[key][currentLang];
            }
        });
    }
}
changeLang();

langButtons.forEach((btn=>{
    btn.addEventListener('click',(event)=>{
        currentLang = event.target.dataset.btn;
        localStorage.setItem('language', event.target.dataset.btn);
        resetActiveClass(langButtons, 'header__btn_active');
        btn.classList.add("header__btn_active");
        changeLang();
    });
}));

function resetActiveClass(arr, activeClass) {
    arr.forEach(elem=>{
        elem.classList.remove(activeClass);
    });
}

function checkActiveLangButton() {
    switch (currentLang) {
        case 'en':
            document
            .querySelector('[data-btn="en"]')
            .classList.add("header__btn_active");
            break;
        case 'ru':
            document
            .querySelector('[data-btn="ru"]')
            .classList.add("header__btn_active");
            break;
        default:
            document
            .querySelector('[data-btn="en"]')
            .classList.add("header__btn_active");
            break;
    }
}
checkActiveLangButton();

function checkBrowserLang() {
    const navLang = navigator.language.slice(0,2).toLowerCase()
    const result = allLangs.some(elem=>{
        return elem === navLang;
    })
    if(result){
        return navLang
    }
}
