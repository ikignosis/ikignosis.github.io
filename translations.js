// Translation strings for supported languages
// Usage: translations[lang][key]
const translations = {
    en: {
        title: "Purpose Born of Knowing",
        subtitle: "Blending <b>education</b> and artificial intelligence <i>technology</i>",
        ikignosis: "Ikignosis",
        ikignosis_phonetic: "/í-kee‑GNOH‑sis/",
        providing_services: "Offering services to:",
        seed_funding: "Seed Funding",
        seed_funding_desc: "Currently seeking seed funding partners to accelerate our mission.",
        founding_supporters: "Founding Supporters:",
        sponsored_project: "Sponsored project",
        sponsored_project_desc: "Check out our open-source project on GitHub:",
        email: "janito@ikignosis.org",
        language: "🌐 Language:",
        selected: "Selected:",
    },
    pt: {
        title: "Propósito Nascido do Saber",
        subtitle: "Unindo <b>educação</b> e tecnologia de inteligência artificial <i>tecnologia</i>",
        ikignosis: "Ikignosis",
        ikignosis_phonetic: "/í-kee‑GNOH‑sis/",
        providing_services: "Prestando serviços para:",
        seed_funding: "Financiamento Semente",
        seed_funding_desc: "Buscando parceiros de financiamento semente para acelerar nossa missão.",
        founding_supporters: "Apoiadores Fundadores:",
        sponsored_project: "Projeto patrocinado",
        sponsored_project_desc: "Confira nosso projeto open-source no GitHub:",
        email: "janito@ikignosis.org",
        language: "🌐 Idioma:",
        selected: "Selecionado:",
    },
    kk: {
        title: "Білімнен туған мақсат",
        subtitle: "<b>Білім</b> мен жасанды интеллект <i>технологиясын</i> біріктіру",
        ikignosis: "Ikignosis",
        ikignosis_phonetic: "/í-kee‑GNOH‑sis/",
        providing_services: "Қызмет көрсетілетін елдер:",
        seed_funding: "Тұқымдық қаржыландыру",
        seed_funding_desc: "Миссиямызды жеделдету үшін серіктестер іздейміз.",
        founding_supporters: "Құрылтайшылар:",
        sponsored_project: "Демеушілік жоба",
        sponsored_project_desc: "GitHub-тағы ашық жобамызды қараңыз:",
        email: "janito@ikignosis.org",
        language: "🌐 Тіл:",
        selected: "Таңдалды:",
    },
    de: {
        title: "Zweck geboren aus Wissen",
        subtitle: "Verbindung von <b>Bildung</b> und künstlicher Intelligenz <i>Technologie</i>",
        ikignosis: "Ikignosis",
        ikignosis_phonetic: "/í-kee‑GNOH‑sis/",
        providing_services: "Dienstleistungen für:",
        seed_funding: "Startfinanzierung",
        seed_funding_desc: "Wir suchen derzeit Partner für die Startfinanzierung zur Beschleunigung unserer Mission.",
        founding_supporters: "Gründungsunterstützer:",
        sponsored_project: "Gesponsertes Projekt",
        sponsored_project_desc: "Schauen Sie sich unser Open-Source-Projekt auf GitHub an:",
        email: "janito@ikignosis.org",
        language: "🌐 Sprache:",
        selected: "Ausgewählt:",
    },
    fr: {
        title: "But né de la connaissance",
        subtitle: "Fusion de <b>l'éducation</b> et de la technologie d'intelligence artificielle <i>technologie</i>",
        ikignosis: "Ikignosis",
        ikignosis_phonetic: "/í-kee‑GNOH‑sis/",
        providing_services: "Services proposés aux:",
        seed_funding: "Financement initial",
        seed_funding_desc: "Recherche actuelle de partenaires de financement initial pour accélérer notre mission.",
        founding_supporters: "Fondateurs soutiens:",
        sponsored_project: "Projet parrainé",
        sponsored_project_desc: "Découvrez notre projet open-source sur GitHub:",
        email: "janito@ikignosis.org",
        language: "🌐 Langue:",
        selected: "Sélectionné:",
    },
    ru: {
        title: "Цель, рожденная знанием",
        subtitle: "Сочетание <b>образования</b> и технологий искусственного интеллекта <i>технологии</i>",
        ikignosis: "Ikignosis",
        ikignosis_phonetic: "/í-kee‑GNOH‑sis/",
        providing_services: "Предоставление услуг для:",
        seed_funding: "Сидовое финансирование",
        seed_funding_desc: "В настоящее время ищем партнеров для сидового финансирования для ускорения нашей миссии.",
        founding_supporters: "Учредительские спонсоры:",
        sponsored_project: "Спонсируемый проект",
        sponsored_project_desc: "Ознакомьтесь с нашим проектом с открытым исходным кодом на GitHub:",
        email: "janito@ikignosis.org",
        language: "🌐 Язык:",
        selected: "Выбрано:",
    }
};

function getLangFromUrlOrBrowser() {
    const match = window.location.pathname.match(/^\/(en_US|pt_PT|kk_KZ|de_DE)(\/|$)/);
    if (match) {
        return match[1].slice(0,2);
    }
    // Try browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0,2);
    if (["en","pt","kk","de","fr","ru"].includes(browserLang)) {
        return browserLang;
    }
    return 'en';
}

function setTranslations(lang) {
    const t = translations[lang] || translations['en'];
    document.getElementById('main-title').innerHTML = t.title;
    document.getElementById('subtitle').innerHTML = t.subtitle;
    document.getElementById('ikignosis').textContent = t.ikignosis;
    document.getElementById('ikignosis-phonetic').textContent = t.ikignosis_phonetic;
    document.getElementById('providing-services').textContent = t.providing_services;
    document.getElementById('seed-funding').textContent = t.seed_funding;
    document.getElementById('seed-funding-desc').textContent = t.seed_funding_desc;
    document.getElementById('founding-supporters').textContent = t.founding_supporters;
    document.getElementById('sponsored-project').textContent = t.sponsored_project;
    document.getElementById('sponsored-project-desc').textContent = t.sponsored_project_desc;
    document.getElementById('email-link').textContent = t.email;
    document.getElementById('language-label').textContent = t.language;
    // Update language selector label
    const select = document.getElementById('language-select');
    const msg = document.getElementById('lang-msg');
    // No selected info needed
}

document.addEventListener('DOMContentLoaded', function() {
    let lang = getLangFromUrlOrBrowser();
    setTranslations(lang);
    const select = document.getElementById('language-select');
    if (select) {
        select.value = lang;
        select.addEventListener('change', function() {
            let langMap = {
                'en': 'en_US',
                'pt': 'pt_PT',
                'kk': 'kk_KZ',
                'de': 'de_DE',
                'fr': 'fr_FR',
                'ru': 'ru_RU'
            };
            let iso = langMap[this.value] || this.value;
            let path = window.location.pathname.replace(/^\/[a-z]{2}(_[A-Z]{2})?\//, '/');
            // Update URL without reloading
            window.history.pushState({}, '', `/${iso}${path}`);
            setTranslations(this.value);
        });
    }
});
