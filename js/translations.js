// Load translations from JSON files
async function loadTranslations(lang) {
    try {
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English if there's an error
        const response = await fetch('/locales/en.json');
        return await response.json();
    }
}

// Get language from URL or browser
function getLangFromUrlOrBrowser() {
    const match = window.location.pathname.match(/^\/(en_US|pt_PT|kk_KZ|de_DE|fr_FR|ru_RU)(\/|$)/);
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

// Set translations on the page
async function setTranslations(lang) {
    const translations = await loadTranslations(lang);
    const t = translations[lang] || translations['en'];
    
    // Update text content
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
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    let lang = getLangFromUrlOrBrowser();
    await setTranslations(lang);
    
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
            try {
                window.history.pushState({}, '', `/${iso}${path}`);
            } catch (e) {
                // Fallback for local file:// URLs
                console.log('Language changed to:', this.value);
            }
            setTranslations(this.value);
        });
    }
});