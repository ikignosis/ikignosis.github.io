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

// Get language from URL query parameter or browser
function getLangFromUrlOrBrowser() {
    // Try to get language from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && ["en_US", "pt_PT", "kk_KZ", "de_DE", "fr_FR", "ru_RU"].includes(langParam)) {
        return langParam.slice(0, 2);
    }
    
    // Try browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2);
    if (["en", "pt", "kk", "de", "fr", "ru"].includes(browserLang)) {
        return browserLang;
    }
    return 'en';
}

// Set translations on the page
async function setTranslations(lang) {
    const translations = await loadTranslations(lang);
    const t = translations[lang] || translations['en'];
    
    const safeSetText = (id, text, useInnerHTML = false) => {
        const el = document.getElementById(id);
        if (el) {
            if (useInnerHTML) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    };

    // Update text content
    safeSetText('main-title', t.title, true);
    safeSetText('subtitle', t.subtitle, true);
    safeSetText('ikignosis', t.ikignosis);
    safeSetText('ikignosis-phonetic', t.ikignosis_phonetic);
    safeSetText('providing-services', t.providing_services);
    safeSetText('seed-funding', t.seed_funding);
    safeSetText('seed-funding-desc', t.seed_funding_desc);
    safeSetText('founding-supporters', t.founding_supporters);
    safeSetText('sponsored-project', t.sponsored_project);
    safeSetText('sponsored-project-desc', t.sponsored_project_desc);
    safeSetText('email-link', t.email);
    safeSetText('language-label', t.language);
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
            // Update URL with query parameter without reloading
            try {
                const url = new URL(window.location);
                url.searchParams.set('lang', iso);
                window.history.pushState({}, '', url);
            } catch (e) {
                // Fallback for local file:// URLs
                console.log('Language changed to:', this.value);
            }
            setTranslations(this.value);
        });
    }
});