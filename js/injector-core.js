// ============================================
// JANISHAMMER CORE v2.1
// - Language baked into all navbar hrefs at render time
// - No redirects, no localStorage loops, no setTimeout patches
// - Thai persists across all brands and pages automatically
// - Single source of truth: getCurrentLang() reads URL path
// ============================================

(function() {
    // ===== LOAD EXTERNAL ASSETS =====
    function loadAssets() {
        const fonts = document.createElement('link');
        fonts.rel = 'stylesheet';
        fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Sora:wght@300..700&family=Outfit:wght@300..700&family=Quicksand:wght@400;500;600&family=Montserrat:wght@300..700&display=swap';
        document.head.appendChild(fonts);
        
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    function loadTawkTo() {
        const brand = window.CURRENT_BRAND;
        const config = window.BRANDS[brand];
        
        if (config.line && config.line.tawk) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = config.line.tawk;
            script.charset = 'UTF-8';
            script.setAttribute('crossorigin', '*');
            document.head.appendChild(script);
            
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();
            console.log(`✅ Tawk.to loaded for ${config.name}`);
        }
    }

    
    function initGoogleAnalytics() {
        const GA_ID = 'G-XXXXXXXXXX';
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_ID);
    }

    // ===== TRANSLATIONS =====
    const translations = {
        en: {
            janisHome: 'Janis home',
            lifestyle: 'Lifestyle',
            blog: 'Blog',
            contact: 'Contact Us'
        },
        th: {
            janisHome: 'หน้าแรก',
            lifestyle: 'ไลฟ์สไตล์',
            blog: 'บล็อก',
            contact: 'ติดต่อเรา'
        }
    };

    function getCurrentLang() {
        const path = window.location.pathname;
        return path.startsWith('/th/') ? 'th' : 'en';
    }

    // updateNavbarLanguage() removed — no longer needed.
    // buildNavbar() now renders all link text AND hrefs in the correct language
    // at injection time, so there is nothing to patch after the fact.
    function buildNavbar() {
        const brand = window.CURRENT_BRAND || 'janishammer';
        const config = window.BRANDS ? window.BRANDS[brand] : null;
        if (!config) return '';

        // Detect current language from URL — drives ALL link hrefs in this render.
        // When user is in Thai, every cross-brand and same-brand link already
        // points to the /th/ version, so language persists through navigation
        // with zero redirects and zero localStorage dependency.
        const lang = getCurrentLang();
        const th = lang === 'th';                 // shorthand boolean
        const p  = th ? '/th' : '';               // path prefix for same-domain links
        const s  = th ? '/th/' : '/';             // root suffix for subdomain links
        const texts = translations[lang];

        // Same-domain links (janishammer.com pages)
        const homeHref    = `https://janishammer.com${p}/`;
        const blogHref    = `https://janishammer.com${p}/blog.html`;
        const contactHref = `https://janishammer.com${p}/contact.html`;
        const iflexHref   = `https://janishammer.com${p}/iflex.html`;

        // Cross-brand subdomain links — append /th/ when in Thai
        const flowHref = `https://flow.janishammer.com${s}`;
        const dajeHref = `https://daje.janishammer.com${s}`;
        const jadeHref = `https://jade.janishammer.com${s}`;

        return `
            <div class="navbar-fixed-wrapper">
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-left">
                            <img src="${config.logoLight}" alt="${config.name}">
                        </div>

                        <div class="nav-center">
                            <ul class="nav-menu">
                                <li><a href="${homeHref}" class="nav-link">${texts.janisHome}</a></li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">${texts.lifestyle} <i class="fas fa-chevron-down"></i></a>
                                    <div class="dropdown">
                                        <div class="dropdown-content">
                                            <a href="${flowHref}" class="dropdown-item ${brand === 'flow' ? 'current' : ''}">Flow</a>
                                            <a href="${dajeHref}" class="dropdown-item ${brand === 'daje' ? 'current' : ''}">Daje</a>
                                            <a href="${iflexHref}" class="dropdown-item ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                                            <a href="${jadeHref}" class="dropdown-item ${brand === 'jade' ? 'current' : ''}">Jade</a>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="${blogHref}" class="nav-link">${texts.blog}</a></li>
                                <li><a href="${contactHref}" class="nav-link">${texts.contact}</a></li>
                            </ul>
                        </div>

                        <div class="nav-right">
                            <div class="language-selector">
                                <span id="lang-en" class="lang-option">EN</span> | <span id="lang-th" class="lang-option">TH</span>
                            </div>
                            <div class="hamburger" id="janishammerHamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="mobile-menu" id="janishammerMobileMenu">
                <ul class="mobile-menu-list">
                    <li><a href="${homeHref}" class="mobile-menu-link">${texts.janisHome}</a></li>
                    <li><a href="#" class="mobile-menu-link">${texts.lifestyle}</a>
                        <div class="mobile-dropdown">
                            <a href="${flowHref}" class="mobile-dropdown-link ${brand === 'flow' ? 'current' : ''}">Flow</a>
                            <a href="${dajeHref}" class="mobile-dropdown-link ${brand === 'daje' ? 'current' : ''}">Daje</a>
                            <a href="${iflexHref}" class="mobile-dropdown-link ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                            <a href="${jadeHref}" class="mobile-dropdown-link ${brand === 'jade' ? 'current' : ''}">Jade</a>
                        </div>
                    </li>
                    <li><a href="${blogHref}" class="mobile-menu-link">${texts.blog}</a></li>
                    <li><a href="${contactHref}" class="mobile-menu-link">${texts.contact}</a></li>
                    <li class="mobile-language-selector">
                        <div class="mobile-language-options">
                            <span id="mobile-lang-en" class="mobile-lang-option">EN</span> | <span id="mobile-lang-th" class="mobile-lang-option">TH</span>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }

    function buildFooter() {
        const brand = window.CURRENT_BRAND || 'janishammer';
        const config = window.BRANDS ? window.BRANDS[brand] : null;
        const year = new Date().getFullYear();
        
        if (!config) return '';
        
        return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <h3>${config.name}</h3>
                            <p>${config.tagline}</p>
                            <div class="social-links">
                                <a href="${config.social.facebook}"><i class="fab fa-facebook-f"></i></a>
                                <a href="${config.social.instagram}"><i class="fab fa-instagram"></i></a>
                                <a href="${config.social.youtube}"><i class="fab fa-youtube"></i></a>
                                <a href="${config.social.tiktok}"><i class="fab fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div class="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-contact">
                            <h4>Contact</h4>
                            <p><i class="fas fa-envelope"></i> ${config.contactEmail}</p>
                            <p><i class="fas fa-globe"></i> ${config.domain}</p>
                        </div>
                   ${config.line && config.line.qr ? `
                        <div class="footer-line">
                            <h4><i class="fab fa-line"></i> LINE Official Account</h4>
                            <img src="${config.line.qr}" alt="LINE QR Code" class="line-qr" loading="lazy">
                            <p>Scan to add us on LINE</p>
                            <a href="https://line.me/R/ti/p/${config.line.id}" target="_blank" rel="noopener noreferrer" class="line-chat-btn">
                                <i class="fab fa-line"></i> Chat on LINE
                            </a>
                        </div>
                        ` : ''}                    
                     </div>

                    <div class="footer-bottom">
                        <p>© ${year} ${config.name} · A Janishammer Brand</p>
                    </div>
                </div>
            </footer>
        `;
    }

    function initMobileMenu() {
        setTimeout(() => {
            const hamburger = document.getElementById('janishammerHamburger');
            const mobileMenu = document.getElementById('janishammerMobileMenu');
            
            if (hamburger && mobileMenu) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    mobileMenu.classList.toggle('active');
                });
            }
        }, 100);
    }

    function setFavicon() {
        const brand = window.CURRENT_BRAND || 'janishammer';
        const config = window.BRANDS ? window.BRANDS[brand] : null;
        
        if (!config || !config.favicon) return;
        
        document.querySelectorAll('link[rel*="icon"]').forEach(el => el.remove());
        
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = config.favicon;
        document.head.appendChild(favicon);
        
        const appleIcon = document.createElement('link');
        appleIcon.rel = 'apple-touch-icon';
        appleIcon.href = config.favicon;
        document.head.appendChild(appleIcon);
    }

    // ===== LANGUAGE SWITCHER =====
    function setupLanguageSwitcher() {
        const langEn = document.getElementById('lang-en');
        const langTh = document.getElementById('lang-th');
        const mobileLangEn = document.getElementById('mobile-lang-en');
        const mobileLangTh = document.getElementById('mobile-lang-th');
        
        function getCurrentLang() {
            return window.location.pathname.startsWith('/th/') ? 'th' : 'en';
        }
        
        function updateHighlight() {
            const lang = getCurrentLang();
            const activeClass = 'active';
            
            // Desktop
            if (lang === 'en') {
                langEn?.classList.add(activeClass);
                langTh?.classList.remove(activeClass);
            } else {
                langTh?.classList.add(activeClass);
                langEn?.classList.remove(activeClass);
            }
            
            // Mobile
            if (lang === 'en') {
                mobileLangEn?.classList.add(activeClass);
                mobileLangTh?.classList.remove(activeClass);
            } else {
                mobileLangTh?.classList.add(activeClass);
                mobileLangEn?.classList.remove(activeClass);
            }
        }
        
        function switchTo(lang) {
            // Save to localStorage (works across all subdomains)
            localStorage.setItem('janishammer_lang', lang);
            
            let currentPath = window.location.pathname;
            let newPath = currentPath;
            
            if (lang === 'th') {
                if (!currentPath.startsWith('/th/')) {
                    newPath = '/th' + (currentPath === '/' ? '' : currentPath);
                }
            } else {
                if (currentPath.startsWith('/th/')) {
                    newPath = currentPath.replace(/^\/th/, '') || '/';
                }
            }
            
            window.location.href = newPath + window.location.search + window.location.hash;
        }
        
        if (langEn && langTh) {
            updateHighlight();
            langEn.addEventListener('click', () => switchTo('en'));
            langTh.addEventListener('click', () => switchTo('th'));
        }
        
        if (mobileLangEn && mobileLangTh) {
            updateHighlight();
            mobileLangEn.addEventListener('click', () => switchTo('en'));
            mobileLangTh.addEventListener('click', () => switchTo('th'));
        }
    }
    
    // applyPersistentLanguage() intentionally removed.
    // It caused cross-domain redirect loops: switching language on one brand
    // would force-redirect all other brands to /th/ even when the user hadn't
    // chosen Thai there. The language switcher handles navigation correctly
    // by modifying the URL path on explicit user click.

    // ===== ADD LANGUAGE SELECTOR STYLES =====
    function addLanguageSelectorStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lang-option, .mobile-lang-option {
                cursor: pointer;
                transition: transform 0.2s ease, color 0.2s ease;
                display: inline-block;
            }
            .lang-option:hover, .mobile-lang-option:hover {
                transform: scale(1.1);
                color: var(--secondary);
            }
            .mobile-language-selector {
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(255,255,255,0.2);
                text-align: center;
            }
            .mobile-language-options {
                display: inline-flex;
                gap: 1rem;
                font-size: 1.2rem;
                color: white;
            }
            .mobile-lang-option.active {
                background: var(--secondary);
                color: #000;
                padding: 0.25rem 0.5rem;
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }

    function init() {
        if (!window.BRANDS) {
            console.error('Janishammer: BRANDS config not loaded.');
            return;
        }
        
        loadAssets();
        setFavicon();
        addLanguageSelectorStyles();
        document.body.insertAdjacentHTML('afterbegin', buildNavbar());
        document.body.insertAdjacentHTML('beforeend', buildFooter());
        initGoogleAnalytics();
        initMobileMenu();
        
        // Setup language switcher highlight and click handlers
        setupLanguageSwitcher();
        loadTawkTo();
        const brand = window.CURRENT_BRAND || 'janishammer';
        console.log(`✅ Core v2.1 loaded for ${window.BRANDS[brand].name}`);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
