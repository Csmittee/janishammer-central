// ============================================
// JANISHAMMER CORE v2.0
// - New era: served from assets.janishammer.com
// - Mobile language selector added to hamburger menu
// - Mobile menu: "Janis home" / "หน้าแรก" matches desktop
// - Language selector hover: pointer cursor + scale effect
// - No version numbers in filenames
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

   function updateNavbarLanguage() {
    const lang = getCurrentLang();
    const texts = translations[lang];
    
    // Update desktop menu
    const janisHomeLink = document.querySelector('.nav-menu a[href="https://janishammer.com"]');
    const lifestyleLink = document.querySelector('.nav-menu .nav-item > a');
    const blogLink = document.querySelector('.nav-menu a[href="https://janishammer.com/blog.html"]');
    const contactLink = document.querySelector('.nav-menu a[href="https://janishammer.com/contact.html"]');
    
    if (janisHomeLink) janisHomeLink.textContent = texts.janisHome;
    if (lifestyleLink) lifestyleLink.innerHTML = texts.lifestyle + ' <i class="fas fa-chevron-down"></i>';
    if (blogLink) blogLink.textContent = texts.blog;
    if (contactLink) contactLink.textContent = texts.contact;
    
       // Update mobile menu — FIXED SELECTORS
    const mobileJanisHome = document.querySelector('.mobile-menu-list a[href="https://janishammer.com"]');
    const mobileLifestyle = document.querySelector('.mobile-menu-list li:nth-child(2) > a');
    const mobileBlog = document.querySelector('.mobile-menu-list a[href="https://janishammer.com/blog.html"]');
    const mobileContact = document.querySelector('.mobile-menu-list a[href="https://janishammer.com/contact.html"]');
    
    if (mobileJanisHome) mobileJanisHome.textContent = texts.janisHome;
    if (mobileLifestyle) mobileLifestyle.textContent = texts.lifestyle;
    if (mobileBlog) mobileBlog.textContent = texts.blog;
    if (mobileContact) mobileContact.textContent = texts.contact;
   
    // Force update after a short delay for mobile menu
    setTimeout(() => {
        const mobileJanisHome = document.querySelector('.mobile-menu-list a[href="https://janishammer.com"]');
        const mobileLifestyle = document.querySelector('.mobile-menu-list li:nth-child(2) > a');
        if (mobileJanisHome) mobileJanisHome.textContent = texts.janisHome;
        if (mobileLifestyle) mobileLifestyle.textContent = texts.lifestyle;
    }, 100);
   
   }
    function buildNavbar() {
        const brand = window.CURRENT_BRAND || 'janishammer';
        const config = window.BRANDS ? window.BRANDS[brand] : null;
        
        if (!config) return '';
        
        return `
            <div class="navbar-fixed-wrapper">
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-left">
                            <img src="${config.logoLight}" alt="${config.name}">
                        </div>
                        
                        <div class="nav-center">
                            <ul class="nav-menu">
                                <li><a href="https://janishammer.com" class="nav-link">Janis home</a></li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Lifestyle <i class="fas fa-chevron-down"></i></a>
                                    <div class="dropdown">
                                        <div class="dropdown-content">
                                            <a href="https://flow.janishammer.com" class="dropdown-item ${brand === 'flow' ? 'current' : ''}">Flow</a>
                                            <a href="https://daje.janishammer.com" class="dropdown-item ${brand === 'daje' ? 'current' : ''}">Daje</a>
                                            <a href="https://janishammer.com/iflex.html" class="dropdown-item ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                                            <a href="https://jade.janishammer.com" class="dropdown-item ${brand === 'jade' ? 'current' : ''}">Jade</a>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="https://janishammer.com/blog.html" class="nav-link">Blog</a></li>
                                <li><a href="https://janishammer.com/contact.html" class="nav-link">Contact Us</a></li>
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
                    <li><a href="https://janishammer.com" class="mobile-menu-link">Janis home</a></li>
                    <li><a href="#" class="mobile-menu-link">Lifestyle</a>
                        <div class="mobile-dropdown">
                            <a href="https://flow.janishammer.com" class="mobile-dropdown-link ${brand === 'flow' ? 'current' : ''}">Flow</a>
                            <a href="https://daje.janishammer.com" class="mobile-dropdown-link ${brand === 'daje' ? 'current' : ''}">Daje</a>
                            <a href="https://janishammer.com/iflex.html" class="mobile-dropdown-link ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                            <a href="https://jade.janishammer.com" class="mobile-dropdown-link ${brand === 'jade' ? 'current' : ''}">Jade</a>
                        </div>
                    </li>
                    <li><a href="https://janishammer.com/blog.html" class="mobile-menu-link">Blog</a></li>
                    <li><a href="https://janishammer.com/contact.html" class="mobile-menu-link">Contact Us</a></li>
                    <!-- Language selector in mobile menu (bottom) -->
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
        const currentPath = window.location.pathname;
        
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
            if (lang === 'en') {
                let newPath = currentPath;
                if (currentPath.startsWith('/th/')) {
                    newPath = currentPath.replace(/^\/th\//, '/');
                } else if (currentPath === '/th') {
                    newPath = '/';
                }
                window.location.href = newPath;
            } else {
                if (!currentPath.startsWith('/th/')) {
                    window.location.href = '/th' + currentPath;
                } else {
                    window.location.href = currentPath;
                }
            }
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
        
        // Update navbar language and setup switcher
        updateNavbarLanguage();
        setupLanguageSwitcher();
        loadTawkTo();
        const brand = window.CURRENT_BRAND || 'janishammer';
        console.log(`✅ Core v2.0 loaded for ${window.BRANDS[brand].name}`);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
