/** Supplies author and temporary book-detail data for the site. */
import awara_atma_cover from "./assets/books/awara-atma/awara-atma-cover.jpg";
import dard_ke_dariya_cover from "./assets/books/dard-ke-dariya/dard-ke-dariya-cover.png";
import dharti_dhara_ka_chakra from "./assets/books/dharti-dhara-ka-chakra/dharti-dhara-ka-chakra-cover.jpg";
import jinse_guzarish_thi_zindagi_ki_cover from "./assets/books/jinse-guzarish-thi-zindagi-ki/jinse-guzarish-thi-zindagi-ki-cover.png";
import khwaahishon_ki_kitab from "./assets/books/khwaahishon-ki-kitab/khwaahishon-ki-kitab-cover.jpg";
import nyay_nazarband_hai from "./assets/books/nyay-nazarband-hai/nyay-nazarband-hai-cover.jpg";
import sulagti_khamoshiyan from "./assets/books/sulagti-khamoshiyan/sulagti-khamoshiyan-cover.jpg";
import vilupt_juguno_ki_chata_cover from "./assets/books/vilupt-juguno-ki-chata/vilupt-juguno-ki-chata-cover.png";
import wo_hadon_ke_paar_kisi_aur_ke_sath from "./assets/books/wo-hadon-ke-paar-kisi-aur-ke-sath/wo-hadon-ke-paar-kisi-aur-ke-sath-cover.jpg";
import zindagi_ko_zindagi_pukarti from "./assets/books/zindagi-ko-zindagi-pukarti/zindagi-ko-zindagi-pukarti-cover.jpg";

export const data = {
  author: {
    about: {
      decorativeImages: {
        journey: {
          alt: "Decorative handwritten note about new chapters ahead",
          height: 220,
          width: 180,
        },
        quote: {
          alt: "Decorative leaves and fountain pen illustration",
          height: 180,
          width: 1100,
        },
      },
      eyebrow: "About",
      heading: "A Life of Learning, A Journey of Words",
      highlights: [
        {
          description: "Over 25 years of teaching experience",
          iconAlt: "Placeholder for educator icon",
          title: "Educator",
        },
        {
          description: "Books and poems written from the heart",
          iconAlt: "Placeholder for author icon",
          title: "Author",
        },
        {
          description: "Always curious, always growing",
          iconAlt: "Placeholder for lifelong learner icon",
          title: "Lifelong Learner",
        },
        {
          description: "Stories and reflections to inspire and comfort",
          iconAlt: "Placeholder for readers icon",
          title: "For My Readers",
        },
      ],
      intro: [
        "I am Lata Thakur — a retired teacher, lifelong learner, and a passionate writer. Teaching gave me the privilege of sharing in young minds' discoveries, and writing lets me continue that conversation through stories, reflections, and poems.",
        "Through my books, I try to capture the simple yet profound moments of everyday life — the lessons, emotions, questions, and hope that stay with us.",
      ],
      journey: {
        eyebrow: "My Journey",
        heading: "From Classroom to Pages",
        intro:
          "Each phase of my life has added a new chapter to my journey. Here are some of the milestones that have shaped me as a teacher, a learner, and an author.",
        milestones: [
          {
            description: "Taught and mentored countless students",
            iconAlt: "Placeholder for graduation cap icon",
            title: "Years in Education",
          },
          {
            description: "Learned from people, places, and everyday moments",
            iconAlt: "Placeholder for community icon",
            title: "Life Experiences",
          },
          {
            description: "Brought my thoughts and stories to life",
            iconAlt: "Placeholder for open book icon",
            title: "Published Author",
          },
          {
            description: "Many more stories waiting to be written",
            iconAlt: "Placeholder for feather icon",
            title: "Still Exploring",
          },
        ],
      },
      portraitAlt: "Portrait of Lata Thakur",
      quote: {
        attribution: "Lata Thakur",
        text: "Life has been my greatest teacher, and writing is my way of sharing its lessons with you.",
      },
    },
    accomplishments: [
      {
        metric: "Books Published",
        value: "30+",
      },
      {
        metric: "Genres",
        value: "5",
      },
      {
        metric: "Years of Teaching",
        value: "25+",
      },
      {
        metric: "Happy Readers",
        value: "Thousands",
      },
    ],
    contact: {
      audience: {
        heading: "How Can I Help?",
        intro: "Here are a few common reasons people get in touch.",
        options: [
          {
            description:
              "Questions about my books, reading recommendations, or simply sharing your thoughts. I love hearing from readers!",
            iconAlt: "Placeholder for open book icon",
            title: "For Readers",
          },
          {
            description:
              "Invitations for literary events, school visits, workshops, or speaking engagements — online or in person.",
            iconAlt: "Placeholder for speaking event icon",
            title: "For Events & Speaking",
          },
          {
            description:
              "Interview requests, media enquiries, review copies, or publishing opportunities.",
            iconAlt: "Placeholder for media document icon",
            title: "For Media & Publishers",
          },
        ],
      },
      decorativeImage: {
        alt: "Decorative books, flowers, fountain pen, and handwritten note illustration",
        height: 390,
        width: 1680,
      },
      eyebrow: "Get in Touch",
      form: {
        buttonLabel: "Send Message",
        fields: [
          {
            label: "Full Name",
            name: "name",
            placeholder: "Your name",
            required: true,
            type: "text",
          },
          {
            label: "Email Address",
            name: "email",
            placeholder: "your@email.com",
            required: false,
            type: "email",
          },
          {
            label: "Phone Number (optional)",
            name: "phone",
            placeholder: "+91 98765 43210",
            required: false,
            type: "tel",
          },
          {
            label: "Subject",
            name: "subject",
            placeholder: "How can I help?",
            required: true,
            type: "text",
          },
          {
            label: "Message",
            name: "message",
            placeholder: "Your message here...",
            required: true,
            type: "textarea",
          },
        ],
        heading: "Send a Message",
        note: "I read every message with care",
      },
      heading: "Let's Connect",
      intro:
        "I'd love to hear from you! Whether you're a reader, a publisher, organizing an event, planning a school visit, inviting me for a speaking engagement, seeking an interview, or simply want to say hello — I'm always open to meaningful conversations.",
      invitation:
        "Stories bring us closer. I look forward to connecting with you.",
      reach: {
        details: [
          {
            description: "I'd love to hear from you via email.",
            iconAlt: "Placeholder for email icon",
            label: "Email",
            value: "lataranipgt@gmail.com",
          },
          {
            description: "Available for event and media inquiries.",
            iconAlt: "Placeholder for phone icon",
            label: "Phone",
            value: "+919953739458",
          },
          {
            description: "Open to invitations across India and beyond.",
            iconAlt: "Placeholder for location pin icon",
            label: "Location",
            value: "New Delhi, India",
          },
        ],
        heading: "Other Ways to Reach Me",
        responseTime: {
          description: "I usually respond within 2–3 business days.",
          iconAlt: "Placeholder for clock icon",
          label: "Response Time",
        },
        social: ["Facebook", "Instagram", "LinkedIn", "YouTube", "Goodreads"],
        socialHeading: "Follow Along",
        socialUrls: {
          facebook: "https://www.facebook.com/profile.php?id=100075234862278",
          goodreads: null,
          instagram: "https://instagram.com/latathakurpgt",
          linkedin: null,
          youtube: null,
        },
      },
      webformAccessKey: "85689e9f-b4c7-4673-a7b0-94179e7ebc45",
    },
    description: {
      heading1: "Retired Teacher.",
      heading2: "Lifelong Learner. Published Author.",
      paragraph:
        "Welcome! I'm Lata Thakur — a retired teacher with a deep love for stories that inspire, heal and stay with you. Over the years, I've had the joy of writing many books across genres.",
      short: "Lata Thakur — Poetry, Books & a Retired Teacher’s Journey",
    },
    name: "Lata Thakur",
    quote: "Books are the quietest and most constant of friends.",
  },
  books: [
    {
      buyLinks: {
        amazon: "https://www.amazon.in/dp/B09MMNVVY8/",
        flipkart: null,
      },
      cover: sulagti_khamoshiyan,
      description:
        "मेरा यह कविता संग्रह उस आहत, भावुक, कोमल युवा मन को समर्पित है, जो अनेक हालातों में ख़ुद को संभालता है और फिर समझौता कर लेता है।\nमेरी कविताओं में विभिन्न परिस्थितियों का व्यावहारिक एवं ज्यों का त्यों भाव समाहित है।\nसाहित्यिक मन दुनिया को देखने में कुछ अलग ही दृष्टिकोण रखता है। यह दृष्टिकोण उस ईश्वर के सामीप्य का एहसास कराता है।\nवर्षों की दुनिया, भाव, नजारे और एहसास इसमें प्रेषित हैं।\nआशा करती हूँ कि पढ़कर आप सभी को एक सुखद, लौकिक एहसास होगा।",
      formats: ["Paperback", "eBook"],
      genre: "social poetry",
      isbn: "978-93-86007-78-0",
      language: "Hindi",
      pages: "208",
      publicationDate: "2020",
      publisher: "Swakshar Prakashan",
      // Temporary layout placeholders: replace with verified reader data.
      rating: 4.5,
      reviewCount: 120,
      slug: "sulagti-khamoshiyan",
      tagline: "Kavita Sangrah",
      title: "Sulagti Khamoshiyan",
    },
    {
      buyLinks: {
        amazon: "https://www.amazon.in/dp/9393781001/",
        flipkart: "https://dl.flipkart.com/s/gPVjHkuuuN",
      },
      cover: awara_atma_cover,
      description:
        "कविता चंद पंक्तियों में लिखी गई एक व्यापक गाथा होती है। पूरी एक घटना की, भावना, जीवन दर्शन की दास्ताँ छुपी होती है।\nकविता सरल होते हुए भी सहज रूप से समझ आ जाए तो वह एक सफल कविता हो जाती है।\nकविता में पंख होते हैं कवि को उड़ाकर जाने कहाँ ले जाते हैं।\nकविता में माधुर्य न हो तो वह शुष्क-सी लगती है, अतः माधुर्य कविता का अनोखा गुण है, जो अनेक कविताओं में दिखाई देता है।\nकविता उन जिन्दा दिल लोगों की भाँति बिंदास भी बन जाती है जब वह उनकी अभिव्यक्ति करती है। जैसे मेरे संग्रह में निहित कविता ‘जिंदगी को खेल समझ’ में दिखाई देता है।\nकविता में जाने कितनी रातें अपना राज छिपाती हैं। ‘रात गम की भारी’ इस बात को दर्शाती है।\nकविता हमारे एहसासों का विश्वास होती है ये एहसास हमसे बात करते हैं। इस भाव को “करो मुझसे बात” में मैंने दर्शाया है।\n“खुद को श्रेष्ठ” कविता कुछ अहंवादी लोगों की अभिव्यक्ति करती है।\nअंधेरे का तिलिस्म बिखेरती कविता ‘शाम होने को है।’ शाम के समय का बड़ा वास्तविक वर्णन हुआ है। युवा मन की आतुरता जैसी शाम सब ओर सन्नाटे को रूप में फैल जाती है।\n“रिश्तों की मौत” कविता में समाज की उस स्थिति की सच्चाई है कि लोगों के लिए रिश्ते निभाना किसी मौत की दुर्गम गुफा में घुसने जैसा हो गया है। फिर भी कवयित्री ने इसे कोमल फूलों जैसा संवारने का संदेश दिया है।\nबंजर भूमि की समानता एक बुझे हुए मन से की है। “धरती बंजर” कविता में ऊँचे-ऊँचे गुंबद और मीनारों वाली इमारतों की मनःस्थिति का वर्णन है, कि वो शहरों से दूर कितनी अकेली है। ‘किया किनारे खड़ा।’\nकविता में उपभोक्ता संस्कृति ने कुछ लोगों को बहुत अमीर (रईस) बना दिया है। सामान बहुतायत में बिक रहा है निश्चित रूप से वो अमीर तो होंगे ही...। “तुम्हारी रईसी” कविता इसी सच्चाई की सूचक है।\nकस्तूरी मृग का मन जिस उपवन में लग गया है उसे वहाँ से दूर जाना है, वह व्यथित है, कविता ‘इस उपवन में जीने दो’ में उस मृग की भावना व्यक्त हुई है।\n‘जिंदगी को खेल समझ’ कविता उनपर आधारित है जो जिंदगी में बहुत कुछ पाने के बाद अब जिंदगी को हल्के में लेकर खेल रहे हैं।\nकवयित्री ने स्त्री के सौन्दर्य से प्रेरित होकर ‘हंसनी’ कविता में उसकी सुन्दर अभिव्यक्ति की है।\nजो हंसनी बनकर हिरणों के झुंड में आ गई उसे शामों की तरह जलना भी आता है।\n‘मौसम की दुहाई’ कविता में कवयित्री ने मौसम के हजार नखरे और मौसम की मादकता का वर्णन किया है।\nमेरे प्रिय पाठक गण मैं जो कुछ सोचती हूँ, देखती हूँ, उसे अपने शब्दों में अभिव्यक्त करती हूँ। शायद कभी-कभी कहीं-कहीं मेरी तरह आप भी सोचते होंगे, महसूस करते होंगे।\nकवि का नज़रिया उसके सोचने का ढंग होता है। उसी में वो जीता है। किसी को सुख देने का नज़रिया भी हो सकता है—प्रेरणादायी नज़रिया। “नज़रिया” कविता में।\nमीत से कई बातें, करने को जी चाहता है पर उसे और कई तितलियाँ अपनी ओर खींचकर ले जाती हैं तो बेबस बुझे मन से ‘गीत अनसुने’ कविता बन पड़ती है।\nइसी तरह अनेक कविताओं का खजाना है मेरी इस किताब में आपको अच्छा लगेगा पढ़कर और मुझे भी अच्छा लगेगा।\nमेरा मन ही मेरी आत्मा है जो मुझे जाने कहाँ-कहाँ ले जाते हैं और मैं उनके साथ उड़ जाती हूँ। अपने तन से दूर अपनी आत्मा बन उड़ जाती हूँ यहाँ-वहाँ जाने कहाँ-कहाँ।",
      formats: ["Paperback", "eBook"],
      genre: "confessional poetry",
      isbn: "978-93-93781-00-0",
      language: "Hindi",
      pages: "144",
      publicationDate: "2022",
      publisher: "Sports Publication",
      // Temporary layout placeholders: replace with verified reader data.
      rating: 4.5,
      reviewCount: 120,
      slug: "awara-atma",
      tagline: "Tagline placeholder",
      title: "Awara Atma",
    },
    {
      buyLinks: {
        amazon: null,
        flipkart: null,
      },
      cover: wo_hadon_ke_paar_kisi_aur_ke_sath,
      description:
        "कविता संग्रह फूलों के गुलदस्ते की तरह होता है। मेरे इस संग्रह में मेरे दिल की अनेक प्रेरणाएँ, अनुभूतियाँ और भावनाएँ हैं। खुद को व्यक्त करना और प्रकृति से साक्षात्कार करना अद्भुत होता है। सुखद होता है।\nसंग्रह का प्रारंभ महात्मा बुद्ध के बोधिसत्व स्वरूप की आराधना है। हमारे देश की विभिन्न आपदाओं, संकीर्णताओं का चित्रण भी प्रस्तुत किया है।\nजीवन की उन्मुक्तता का आभास भी है मेरी इन कविताओं में। किसी को पाने की चाह जो हदों तक अदृश्य है। ' अविरल गाथा प्रेम की ' कविता में लिखा गया एक प्रेमपत्र है। समर्पण की पराकाष्ठा इस कविता संग्रह में है।\nदुनिया में चलते हुए ज्ञात होता है कि हम किसके साथ चल रहे हैं; क्या उसका मन हमारे साथ है...? या कोसों दूर...? और हम अपने जीवन की राह में कितने अकेले हो जाते हैं। किसी के साथ होते हुए भी।\nआशा करती हूँ आपको पसंद आयेंगी। अपनी तल्खी, अपनी आस्था, अपने जन्मों की दास्ताँ कुछ इस कदर इन पंक्तियों में सजायी हैं, खिदमत में आपकी।",
      genre: "Love poetry",
      isbn: "978-81-969761-1-8",
      language: "Hindi",
      pages: 144,
      publicationDate: 2024,
      publisher: "Swakshar Prakashan",
      rating: 4.5,
      reviewCount: 120,
      slug: "wo-hadon-ke-paar-kisi-aur-ke-sath",
      title: "Wo Hadon Ke Paar Kisi Aur Ke Sath",
    },
    {
      buyLinks: {
        amazon: "https://www.amazon.in/dp/9389984998/",
        flipkart: null,
      },
      cover: zindagi_ko_zindagi_pukarti,
      description:
        "मेरा यह कविता संग्रह आपके सम्मुख प्रस्तुत है। “ज़िंदगी को ज़िंदगी पुकारती” इसमें जीवन के ढेरों आयाम दर्शाये हैं। कुछ मधुर एहसास कुछ बाहरी एहसास जो कि दुनिया के हैं। मेरी कविताओं में मैंने वो सब कहना चाहा है जो मुझे दिखा, महसूस हुआ और लिख दिया। “मिटे हैं अरमान सारे, हो गये खामोश तारे।” “तारे” कविता का सार। ऊँची उड़ानों से आहत घायल पंछी की पीड़ा “गरम आँसुओं की” कविता में दिखायी देगी। “अपनी छाया” कविता में कवयित्री ने खुद को अपनी एक परछाई मात्र समझ लिया है, जो थक गई है। “निजी उत्तरदायित्व” में कवयित्री ने मनुष्य को अपने कर्मों का जिम्मेदार ठहराते हुए बड़े सटीक और संक्षिप्त शब्दों में उसकी खीझ को प्रस्तुत किया है।\n मेरे प्रिय पाठकों आपके हृदय में उमड़ने-घुमड़ने वाली घटाओं को उद्वेलित कर देंगी मेरी यह छोटी-छोटी-सी कविताएँ। कृपया मुझे अपने विचारों से अवश्य ही अवगत करायें। आपके सामने प्रस्तुत हूँ मैं.....।",
      formats: ["Paperback", "eBook"],
      genre: "short stories",
      isbn: "978-93-89984xxxx",
      language: "Hindi",
      pages: "200",
      publicationDate: "2024",
      publisher: "Prakhar Goonj",
      rating: 4.5,
      reviewCount: 120,
      slug: "zindagi-ko-zindagi-pukarti",
      tagline: "Kavya Sanghrah",
      title: "Zindagi Ko Zindagi Pukarti",
    },
    {
      buyLinks: {
        amazon: "https://www.amazon.in/dp/9393781044/",
        flipkart: "https://dl.flipkart.com/s/gPDM2MuuuN",
      },
      cover: khwaahishon_ki_kitab,
      description:
        "मन के अनमोन भावों के खजाने से भरा यह “ख़्वाहिशों की किताब” कविता संग्रह जग के सामने प्रस्तुत कर रही हूँ। आप सबको खुद से परिचित कराना चाहती हूँ।\nमेरे प्रिय पाठकों मुझे पढ़ने वाले, सुनने वाले, मुझे जानने वाले मेरी किताब “सुलगती खामोशियाँ” मेरी पहली किताब है। कविताओं की किताब है। कविताओं की किताब, मेरी कम उम्र की भावनाओं की झलक है मेरी भाषा की सरलता धीरे-धीरे उसमें विस्तार होता गया, भावनाओं का रूप विकसित होता गया।\nसमय के साथ-साथ कविताओं में घटना, रहस्य, कहानी देशकाल की परिस्थितियों की झलक समाहित होती जाती है और कविता विकसित होती जाती है।\nमेरे इस संग्रह में मेरे ऐसे जज़्बात हैं, जिनमें ज़माने की अनेक रहस्यपूर्ण अनुभूतियों का मंजर है जैसे लहरों में डूबते हुए साथी को पाने की अनुभूति है, उस अबोध मासूम को देखना जिसने अपनी मासूमियत में जाने कितना कुछ छिपा रखा है।\nजिन्हें कल्पनाओं से ज्यादा मिल जाता है वो सुख कितना अद्भुत होता है।\nआज के दौर में एक रुपए की हस्ती है तो सही पर बड़ी मामूली। “तेरे उपवन को” कविता किसी की मजबूरी का इतना बड़ा कारण भी बन सकती है... ? कि उसे झेलने वाला भला क्या बतायेगा। जैसे किसी के कारण बन्द कमरे का कैदी।\nआज के दौर में छोटे-छोटे से एहसासों में बड़े-बड़े अरमानों का फसाना छिपा होता है, जिसे कोई कह सकता है, कोई नहीं कह सकता पर भावुक तो हो जाता है।\nनाखुदा रहनुमाओं के दामन में पहुँचकर एक मेहरबाँ का क्या हाल हो जाता है उसे अपनी वफाओं का सिला जो मिलता है वो मेरी “नाखुदा” कविता में निहित है।\nसुखों की जिद में इंसान तन्मय रहता है। सदा रहता है।\n“हँसी दास्ताँ हमारी” कविता एक विख्यात प्रेम कहानी पर आधारित है, जिसमें एक महान गायिका और एक महान संगीतकार का क्षणिक-सा दार्शनिक प्रेम भाव दर्शाया है।\nआज के ज़माने की ही बात है कि हम सबकी नींदों पर कब्जा कर लिया है कुछ आधुनिकता की देन ने, मोबाईल ने “भावों के पुजारी” कविता एक भक्ति पूर्ण कविता है। इसमें ईश्वर भी हमारे लिए हमारी तरह आस्तिक बन जाते हैं। भला ईश्वर को कोई नकार सकता है?\nएक शायर की तरह कम से कम पंक्तियों में मन में अनुभूतियों को जगाने का प्रयास किया है। लोगों के पास समय की कमी होती है अतः छोटी से छोटी कविता पढ़कर किसी के जीवन की बड़ी से बड़ी गाथा का आभास हो जाए तो अच्छा ही है।",
      formats: ["Paperback", "eBook"],
      genre: "introspective poetry",
      isbn: "978-93-93781-04-8",
      language: "Hindi",
      pages: "222",
      publicationDate: "2022",
      publisher: "Sports Publication",
      rating: 4.5,
      reviewCount: 120,
      slug: "khwaahishon-ki-kitab",
      tagline: "Kavita Sanghrah",
      title: "Khwaahishon Ki Kitab",
    },
    {
      buyLinks: {
        amazon: "https://www.amazon.in/dp/B0DCVVKCSB/",
        flipkart: null,
      },
      cover: nyay_nazarband_hai,
      description:
        "मेरा यह कविता संग्रह भावनाओं का चलचित्र है। बहुतों का दर्द, बहुतों की चाहत देखी है, अनुभव की है। उन्हीं को समर्पित। अनकही बातें कहने का अधिकार अपनाया है। कितनी ही गुज़ारिशों में हम जीते हैं। फिर उन्हीं बेताबियों में चैन ढूँढ लेते हैं। कभी हमें बहुत कुछ दिखाई देता है और कभी हम खुद तक ही सीमित होते हैं। उन्हीं समस्याओं की दास्ताँ है ये कविता संग्रह है।\nमौसम की सुहानी अनुभूति ही दिल के तारों को झनकार देती है, मुस्कान देती है। जीवन में फैली अनगिनत असमानताएँ और समस्याएँ झकझोर कर रख देती हैं...तब सुख देने वाली, मन की ज़ुबान से गायी गई ये कविताएँ ही मन को राहत देती हैं।\nदुनिया का राग हर कोई गाता है। कोई किसी की नहीं सुनता...फिर हम ढूँढते हैं सुकून...शायद कुछ पलों का सच्चा सुकून, आपको मेरी इन कविताओं में मिलेगा।\nमेरी कविता “हवेली की दीवारों से” ऐसी न जाने कितनी जगह होंगी जहाँ के गलियारों में ये मन उन्माद में डूब कर प्रेम गीत का आलाप करने लगता है।\nइसके विपरीत “युग के गलियारों से” कवि हृदय को उन देश भक्तों की आवाज़ सुनाई देती है जो झूल गए फाँसी के फंदों 'पर इस युग के गलियारों में।\n“न्याय नज़रबंद है” कविता में हमारे देश की न्याय-व्यवस्था का जटिल, सुरंगी, तरसा-तरसा कर जीने के लिए मजबूर कर देने वाली प्रणाली का प्रदर्शन है।",
      formats: ["Paperback", "eBook"],
      genre: "patriotic poetry",
      isbn: "978-93-93781-94-9",
      language: "Hindi",
      pages: "Pages placeholder",
      publicationDate: "2023",
      publisher: "Sports Publication",
      rating: 4.5,
      reviewCount: 120,
      slug: "nyay-nazarband-hai",
      tagline: "Kavya Sangrah",
      title: "Nyay Nazarband Hai",
    },
    {
      buyLinks: {
        amazon: "https://www.amazon.in/dp/B0FNRDMZGH/",
        flipkart: null,
      },
      cover: dharti_dhara_ka_chakra,
      description:
        "सुनहरी धूप के साये में माधुर्य का मिलन ठंडी बयार कविता बन जाती है। बहती धार में कश्ती को लेकर निकल जाओ डूबने का डर न सताये। कवि का मन ही ऐसा हो सकता है। कवि के पंख नहीं दिखाई देते पर उसके पंख उसे आसमान तक ले जाते हैं। उसके साथ अनेक भावनात्मक चमत्कार होते रहते हैं।\nकवि सदैव कुछ ढूँढ़ता रहता है, बीती खुशियाँ, बीती घड़ियाँ न जाने क्या-क्या। “सबको फुर्सत” कविता में कवयित्री ने फुर्सत का व्यवहारिक चित्रण किया है।\n“बेपरवाह मीत” को भी कवयित्री ढूँढ़ रही है, जिसने उसकी कोई परवाह नहीं की है। जीवन की दास्ताँ जो रोज बदलती है। सपनों की तरह सरल सहज भाषा में बखान किया है।\nकवयित्री का मन स्वर्ग पहुँचकर गर्व से परिपूर्ण है। जैसे जन्नत को उनका इंतजार था।\n“मन वैराग्य” कविता में कवयित्री हर मनुष्य की जिज्ञासा को महात्मा बुद्ध के समान महसूस करती है।\n“चुभन” कविता में नज़रों की चुभन का एक नया अंदाज प्रस्तुत किया है।\nअनेक कविताएँ मेरे मन, मेरी भावनाओं का चित्रण हैं। आपको पसन्द आएँगी, चित्त में प्रफुल्लता आयेगी। आपकी खिदमत में पेश है मेरा यह कविता संग्रह।\nविश्व में कोरोना का कहर जो तांडव दिखा रहा था उसका चित्रण भी अनेक कविताओं में प्रस्तुत किया है। भय का भयानक विस्तार है अनेक कविताओं में।\nकविता शायरी के नज़दीक होती है, कविता मन को सुकून देती है।\nकविता में खास तरीके से दिल की बात प्रस्तुत की जाती है।\nकविता में सहजता सरलता और किसी घटना का एहसास होता है।\nसीमित पंक्तियों में अथाह अनुभूतियों का प्रदर्शन हो जाता है।\nअपने जीवन में हम अनेक लोगों से मिलते हैं, अनेक भावनाओं को संजोते जाते हैं, मन को जैसे बहुत सारा खजाना मिल जाता है।\nमेरा यह कविता संग्रह भी अनेक ताने-बानों का खजाना है।",
      formats: ["Paperback", "eBook"],
      genre: "patriotic poetry",
      isbn: "9788197682315",
      language: "Hindi",
      pages: "Pages placeholder",
      publicationDate: "2025",
      publisher: "Sports Publication",
      // Temporary layout placeholders: replace with verified reader data.
      rating: 4.5,
      reviewCount: 120,
      slug: "dharti-dhara-ka-chakra",
      tagline: "Kavya Sangrah",
      title: "Dharti Dhara ka Chakra",
    },
    {
      buyLinks: {
        amazon: null,
        flipkart: null,
      },
      cover: vilupt_juguno_ki_chata_cover,
      description:
        "शब्दों की संरचना भावों के रस में डूबकर कविता की पंक्तियों में सजती जाती हैं। कविता सीमित शब्दों का व्यापार होती है, साहित्य के समाज में अपनी छटा, अपनी आस्था फैलाती हुई सबको विभोर करती जाती है। भाग-दौड़ भरी जिन्दगी के दौर में घटनाएँ, एहसास, संदेश, प्रेरणा सब कुछ दिखता जाता है, जिसे आत्मसात करके कवि अपनी कलम से सबके लिए कुछ परोसने की तैयारी में लगा रहता है।\nसमाज में जो आज व्याप्त है वह साहित्य में भी समाहित होना चाहिए, जिसे आने वाली पीढ़ियाँ पढ़े और जानें साहित्य के प्रति मेरी यही आस्था है, जो मैं दे रही हूँ। मेरे काव्य संग्रह में नये भावबोधों का समाहार है। लाचारी में डूबी जिन्दगी का मानवीकरण करते हुए उसके दैन्य रूप का वर्णन किया है...यह मेरा एक प्रयोग है। कविता की विधा में दीनता का साकार साया दिखाया गया है।\nशहरों की रातों की खामोशी तोड़ता कुत्तों का स्वर बहुत ही अधिक राहत देता है...जैसे इन शहरों में गुम-सुम से लोगों के बीच कोई सजीव स्वर वाले प्राणी भी साँस लेते हैं, वे अपनी मौजूदगी बयाँ करने में अथक सारी रात अपनी गूँज से हमारी सूनी रात को एक एहसास से भरते हैं।\nगुमाँ नहीं, अपनी कमियाँ, विडम्बना आदि अनेकों अनेक कविताएँ हर क्षण के सहते भावों की अभिव्यक्ति है।\n“बरसात की बेरहम कहानी” रात को बरसती बरसात प्रेमियों के हृदय की विरह-पीड़ा किस कदर बढ़ा देती है।\n“स्वागत से जोखिम तक” कविता उस स्वार्थ पर आधारित है जिसमें स्वागत के बाद मिलने वाले जोखिमों का भार उठाना है।\n“साल दर साल” कविता में हर पल की होती खस्ता हालत का वर्णन है। “आईना” जिसमें चेहरा आईना बन जाता है, मन की दशा को छुपा नहीं पाता है।\n“मौसम ऋतु” ग्रीष्म ऋतु के तीखे तेवर हैं, मौसम नासाज़ है। मौसम पुरुष है, ऋतु स्त्री है, दोनों के आपसी तीखे प्रहारों से लोगों का बुरा हाल है। फिर सुहाने मौसम ने ऋतु के दामन को ठंडी फुहारों से भर दिया, दोनों का शीतल-लहर-सा मिलन हो गया। इस कविता में। “संग्राम में हलाल” वर्तमान में यूक्रेन के युद्धग्रस्त क्षेत्र का चित्रण है।\n“नाबूद-ग़म” कविता में अपने ग़म कम लगते हैं। जब औरों के ग़म देखते हैं तो...। “हर हुई बेनूर” कोई भी बेहद खूबसूरत स्त्री उम्र या बीमारी में किस कदर बेनूर हो सकती है...ऐसा ही चित्रण इस कविता में है।\nदेश के, दुनिया के, मन के, समाज के अनेकों अनेक प्रामाणिक, सच्चे भावों पर आधारित मेरा यह काव्य-संग्रह है।",
      genre: "philosophical poetry",
      isbn: null,
      language: "Hindi",
      pages: 188,
      publicationDate: null,
      publisher: null,
      slug: "vilupt-juguno-ki-chata",
      title: "Vilupt Juguno Ki Chata",
    },
    {
      buyLinks: {
        amazon: null,
        flipkart: null,
      },
      cover: dard_ke_dariya_cover,
      description:
        "“जन्मों के रिश्ते” कविता में हमारा जीवन कितने रिश्तों में बंधा हुआ है, जाने कितने लोगों की सांवेदनओं का परिणाम हैं, हमारा जीवन ऐसा कवयित्री ने दर्शाया है।\nकवयित्री ने उन बेरहम परछाईयों वाले शहरों से बचने का संदेश दिया है जाहाँ आकर अंधेरे के साये में खूँखार सायों से घिर जाते हैं । हम लोग, उनसे बच के जायें कौँहा .......... ?\nइन्सानों को कवयित्री ने हाड़-माँस का पुतला भी कहा है वह भी संग्राम करके जी रहा है और उतार-चढ़ाव के साथ चल रहा है।\n“सदी की इनायत” कविता में उन लोगों को खुशनसीब बताया है जो लोग एक सदी से दूसरी सदी में आ गये।\nचाहत की असीम अवस्था को प्रकट करते हुए कवयित्री वफा का सबूत देना जरूरी मानती है।\n““फुर्सत” कविता में उन क्षणों को याद करते हुए भावना का अतिरेक हो जाता है जब लुटने के बाद सब याद आता है। होश आता है। फुर्सत मिलती है। जमाने का रंजों गम क्या कर गुजर गया।\n“जन्मों के रिश्ते” कविता में हमारा जीवन कितने रिश्तों में बंधा हुआ है, जाने कितने लोगों की संवेदनाओं का परिणाम हैं, हमारा जीवन ऐसा कवयित्री ने दर्शाया है।\nकवयित्री ने उन बेरहम परछाईयों वाले शहरों से बचने का संदेश दिया है जहाँ आकर अंधेरे के साये में खूँखार सायों से घिर जाते हैं। हम लोग, उनसे बच के जायें कहाँ .......... ?\nइन्सानों को कवयित्री ने हाड़-माँस का पुतला भी कहा है वह भी संग्राम करके जी रहा है और उतार-चढ़ाव के साथ चल रहा है।\n“सदी की इनायत” कविता में उन लोगों को खुशनसीब बताया है जो लोग एक सदी से दूसरी सदी में आ गये।\nचाहत की असीम अवस्था को प्रकट करते हुए कवयित्री वफा का सबूत देना जरूरी मानती है।\n“फुर्सत” कविता में उन क्षणों को याद करते हुए भावना का अतिरेक हो जाता है जब लुटने के बाद सब याद आता है। होश आता है। फुर्सत मिलती है। जमाने का रंज-ओ-ग़म क्या कर गुजर गया।",
      genre: "Hindi Poetry",
      isbn: "978-81-997961-9-5",
      language: "Hindi",
      pages: 220,
      publicationDate: 2026,
      publisher: "Kitab Mahal",
      slug: "dard-ke-dariya",
      title: "Dard Ke Dariya",
    },
    {
      buyLinks: {
        amazon: null,
        flipkart: null,
      },
      cover: jinse_guzarish_thi_zindagi_ki_cover,
      description:
        "कहानी ज़िन्दगी की किसी खास घटना पर आधारित होती है। कहानी में जीवन का बहुत बड़ा अंश समाया होता है। हर मनुष्य के जीवन में अलग-अलग प्रभाशाली मोड़ आते हैं। वह उनमें डूबता है तैरता है हताश होता है या फिर आगे नये पड़ाव की ओर बढ़ जाता है।\n“कैम्प लाईफ” लेखिका की कैशौर्य मन की तरंगों पर आधारित है। नीता के मन में देश प्रेम, प्रकृति-प्रेम कूट-कूट कर भरा है। फिर अगली कहानी में दो युवा प्रेमियों के प्रेम की चर्चा की है। वो दोनों यौवन की दहलीज पर हैं, एक दूसरे में घुलमिल गए हैं, कॉलेज में पढ़ते हैं, घूमते हैं, बेखबर भी हो जाते हैं कभी-कभी। दोनों सरल और शालीन हैं।\n“निष्ठुरता” में लेखिका ने एक आहत युवती की पीड़ा को दर्शाया है। वह प्रेम की मृगतृष्णा से बच जाती है पर किसी की निष्ठुरता के कारण। वह भावुक होकर जीने लगती है।\n“कुछ कहे बिना” कहानी एक ऐसी युवती की है जो अपने कैरियर की शुरुआती दिनों में है। साथ ही नौकरी भी कर रही है। नौकरी के दरम्यान ही उसे एक अच्छा दोस्त मिलता है। यह दोस्ती अभी धीरे-धीरे बढ़ रही होती है। लड़का उससे शादी भी करना चाहता है। परन्तु फिर लड़की के हालात कुछ ऐसे हो जाते हैं, कि वह बिना कुछ कहे सुने लड़के की जिन्दगी से चली जाती है, एक जागरूक, शिक्षित, समाज के लिए प्रयास करने वाली लड़की न जाने ऐसा क्या झेलती है कि एक सुन्दर सभ्य शालीन पुरुष से भी दूर अनभिज्ञ होकर चली जाती हैं।\n“सुखभरी पगडंडियाँ” मेरी अगली कहानी एक गाँव की सुन्दर कहानी है। गाँव में भी शिक्षा सभ्यता और प्रेम का आदर्श देखा जा सकता हैं। रमेश ठाकुर का घराना जिसमें मुकेश नाम का युवक पढ़ा-लिखा वकालत किया हुआ ऊँची सोच रखने वाला युवा है। 'उमा' जो कि नज़दीक ही एक गरीब परिवार की लड़की है मैट्रिक पास, बड़ी होशियार है पढ़ाई में और खेती, घर के काम में भी। मुकेश उससे बहुत प्रभावित है...बाकी आपको आगे पढ़ने से खुद कहानी में ज्ञात होगा।\nइसी तरह लेखिका की अगली कहानी में एक रोमानियत का वातावरण है। जमाने में जीने की एक यह भी राह होती है; जिसमें एक लड़की दूर से ही उन घरों को देखती है, जिनके आगे लैम्प पोस्ट लगे हैं। कतार बद्ध ये मकान बड़े आलीशान हैं, जिन्हें देखकर मन में सुखद एहसास होता है और फिर इसी कतार में एक ऐसी कोठी जिसके लैम्प पोस्ट सबसे ज्यादा सुन्दर दिखते हैं, जिनकी बनावट और रोशनी मन को लुभाती है। कहानी “लैम्प पोस्ट” में मन की उमंगों को लहराने की कोशिश है। जिन्दगी की सरलता को सहलाने की कोशिश है यह कहानी संग्रह। “अतृप्त” अगली कहानी में एक पुरुष की व्यथा, उसकी शालीनता उसके अन्दर के प्रेमी रूप का भव्य रूप दिखता है और सुधा का कुँवारा मन उसके पहलू में सँवरने लगता है। दोनों का सुन्दर मिलन है। “आँगन का जलता बल्ब” कहानी में एक युवक की दार्शनिकता का समावेश है। तेज बल्ब की रोशनी उसे बीमार के मरने की खबर देती है।\n“आँधी” कहानी में एक युवती की हृदय की उथल-पुथल का वर्णन है। वह जो चाहती है उसे वह सचमुच उसी रूप में मिलता है....? और फिर वह सही निर्णय लेकर खुद को संभाल लेना चाहती है। \nकहानी संग्रह के इस क्रम में अगली कहानी “गुज़ारिश नहीं किसी से” एक ऐसी स्त्री की कहानी है जिसका जन्म बचपन, कैशौर्य नितांत अकेलेपन में बीता परन्तु फिर भी उसके जीवन की तन्हाई समाप्त नहीं हुई शादी के बाद उसकी और ज्यादा दुर्दशा हो जाती है; जिसे झेलते-झेलते वह चली जाती है, लहरों की गहराई में।\n“चर्च का क्रॉस” एक पढ़ी लिखी युवती की कहानी है, जो टीचर है पर घरेलू जीवन में पति एवं सास-ससुर से प्रताड़ित है। अपने शालीन स्वभाव एवं प्रकृति-प्रेम तथा समाज-सेवा में कभी-कभी व्यस्त हो जाती है...इसी तरह वह जी पाती है।\nकोरोना के चलते बर्बस मिली फुर्सत के क्षणों को कुमुद बड़ी सुखानुभूति से बिता रही है।\nबस घर में रहते अपनी पढ़ाई और मित्रों से बातचीत कर लेती परन्तु फिर जैसे ही कोई कोरोना के कारण हुई मौतों की न्यूज सुनती है तो थर-थर काँप उठती है, उसे अपने बूढ़े पिता की चिन्ता सताने लगती है।\n“फिर एक युवा भटका” यह एक ऐसे युवक पर आधारित है जो किताबी पढ़ाई में तो बहुत कुशाग्र है पर व्यावहारिक जीवन में उसे उसके ही मित्र की माँ—अपने चंगुल में फंसा लेते हैं और उसका कैरियर चौपट करने में कोई कसर नहीं छोड़ते।\n“दिल औरत का” एक कला-प्रेमी, स्त्री के जीवन पर आधारित है। भरपूर जीवन को जीने वाली कला में शोहरत पाने के साथ प्रेम के कुछ पड़ावों में सफल नहीं हो पाती। परन्तु फिर भी उसे जो मिलता है, उसका साथ देने वाला उसे अपना सुख समझ लेती है।",
      genre: "Short Stories",
      isbn: "978-93-86007-36-0",
      language: "Hindi",
      pages: 94,
      publicationDate: 2021,
      publisher: "Swakshar Prakashan",
      slug: "jinse-guzarish-thi-zindagi-ki",
      title: "Jinse Guzarish Thi Zindagi Ki",
    },
  ],
  googleAnalytics: {
    measurementId: "G-LG73Z1ETSY",
  },
};
