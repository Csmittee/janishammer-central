// ============================================
// JANISHAMMER MASTER INJECTOR v3.0
// Handles: Navbar, Footer, Language Selector, GA, ALL Styles
// Content stays in index.html (hero, products, SEO)
// Last Updated: 2026-03-18
// ============================================

(function() {
    // ===== CONFIGURATION =====
    // Tomorrow you'll replace this with CSV import
    const BRANDS = {
    flow: {
        name: "Janis Flow",
        primary: "#D4E157",      // Lemon Zest
        secondary: "#AED581",     // Green Flow
        accent: "#33691E",        // Deep Energy
        font: "'Sora', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773775009/janis_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772671/Janis-flow-logo-s.png",
        tagline: "Lets flow!",
        heroHeading: "Lets flow with us",
        heroSubheading: "We proudly present Brand X skateboard deck from USA and Outride surfskate from Italy -- Its value grow over time!",
        products: ["Skateboards", "Surfskates", "Accessories"],
        contactEmail: "info@janishammer.com",
        domain: "flow.janishammer.com"
    },
    jade: {
        name: "Jade Coffee",
        primary: "#6F4E37",       // Coffee Bean
        secondary: "#C4A484",      // Warm Latte
        accent: "#A67B5B",         // Aged Patina
        font: "'Outfit', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774756/Jade_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774149/Jade-logo-original.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774149/Jade-logo-original.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774160/Jade-original-logo_40_x_40_px.png",
        tagline: "Taste of heaven",
        heroHeading: "We produce coffee capsule you love",
        heroSubheading: "Best select bean, roast with love. We value safe and taste pack in capsule for you",
        products: ["Ethiopian Blend", "Morning Roast", "Limited Reserve"],
        contactEmail: "info@janishammer.com",
        domain: "jade.janishammer.com"
    },
    daje: {
        name: "Daje Games",
        primary: "#000000",        // Panda Black
        secondary: "#FFB6C1",       // Playful Pink
        accent: "#D4AF37",          // Gold Crown
        font: "'Quicksand', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774844/Daje_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773773704/Daje-logo-std.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773773704/Daje-logo-std.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773773700/Daje-logo-focus.png",
        tagline: "Happiness you can catch",
        heroHeading: "We offer innovation as leader in Claw machine design and production",
        heroSubheading: "Call us to make your idea come true",
        products: ["Claw Machines", "Prizes", "Parts", "Service"],
        contactEmail: "info@janishammer.com",
        domain: "daje.janishammer.com"
    },
    iflex: {
        name: "I-Flex Pilates",
        primary: "#1A1A1A",        // Cat Black
        secondary: "#FFD700",       // Yellow Eyes
        accent: "#FFFFFF",          // Pure White
        font: "'Montserrat', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773775103/I_flex_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773768378/I-Flex_main_no_bg.svg",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773768378/I-Flex_main_no_bg.svg",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773768489/Original.png",
        tagline: "A healthy lifestyle",
        heroHeading: "5 Years tested in studio, Power by Adjust body China",
        heroSubheading: "We help you own your dream studio, whether you do it for fun or for life!",
        products: ["Reformer", "Cadillac", "Barrel", "Chair"],
        contactEmail: "info@i-flexthailand.com",
        domain: "i-flexthailand.com"
    },
    janishammer: {
        name: "Janis Hammer",
        primary: "#E34C26",        // Warm Orange
        secondary: "#2C3E50",       // Deep Strength
        accent: "#F4D03F",          // Surprise Gold
        font: "'Inter', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774928/All-logo.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773567285/Janis_icon_trans.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773567285/Janis_icon.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773567553/favicon-32x32.png",
        tagline: "We create lifestyle",
        heroHeading: "Welcome to our lifestyle!",
        heroSubheading: "Life style that create strenght, wisdom, and peace",
        products: ["Brands", "Philosophy", "Contact"],
        contactEmail: "info@janishammer.com",
        domain: "janishammer.com"
    }
};      

    // ===== DETECT CURRENT BRAND =====
    function getCurrentBrand() {
        const hostname = window.location.hostname;
        if (hostname.includes('flow')) return 'flow';
        if (hostname.includes('jade')) return 'jade';
        if (hostname.includes('daje')) return 'daje';
        if (hostname.includes('i-flex') || hostname.includes('iflex')) return 'iflex';
        return 'janishammer'; // default/root
    }

    const brand = getCurrentBrand();
    const config = BRANDS[brand];

    // ===== LOAD EXTERNAL ASSETS =====
    function loadAssets() {
        // Google Fonts
        const fonts = document.createElement('link');
        fonts.rel = 'stylesheet';
        fonts.href = `https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Sora:wght@300..700&family=Outfit:wght@300..700&family=Quicksand:wght@400;500;600&display=swap`;
        document.head.appendChild(fonts);
        
        // Font Awesome
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    // ===== INJECT ALL STYLES =====
    function injectStyles() {
        const style = document.createElement('style');
        style.id = 'janishammer-master-styles';
        style.textContent = `
            /* ----- RESET & BASE ----- */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: ${config.font};
                background-image: url('${config.bgImage}');
                background-attachment: fixed;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                min-height: 100vh;
                color: #333;
                line-height: 1.5;
                position: relative;
            }
            
            /* Background overlay for readability */
            body::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.2);
                pointer-events: none;
                z-index: 0;
            }
            
            .navbar, .hero, .content, .footer {
                position: relative;
                z-index: 2;
            }
            
            /* ----- BRAND VARIABLES ----- */
            :root {
                --primary: ${config.primary};
                --secondary: ${config.secondary};
                --accent: ${config.accent};
                --text-light: #ffffff;
                --text-dark: #1a1a1a;
                --shadow: rgba(0, 0, 0, 0.15);
            }
            
            /* ===== NAVBAR STYLES ===== */
            .navbar {
                position: sticky;
                top: 0;
                z-index: 1000;
                padding: 0.75rem 2rem;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .nav-container {
                max-width: 1280px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 120px 1fr 120px;
                align-items: center;
                gap: 1rem;
            }
            
            /* Left section - logo area (you can add logo here if needed) */
            .nav-left {
                display: flex;
                align-items: center;
            }
            
            .brand-logo {
                height: 40px;
                width: auto;
                display: none; /* Enable if you want logo in navbar */
            }
            
            /* Center navigation */
            .nav-center {
                display: flex;
                justify-content: center;
            }
            
            .nav-menu {
                display: flex;
                list-style: none;
                gap: 2rem;
                margin: 0;
                padding: 0;
            }
            
            .nav-item {
                position: relative;
            }
            
            .nav-link {
                color: white;
                text-decoration: none;
                font-weight: 500;
                padding: 0.5rem 0;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.25rem;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                font-size: 1rem;
            }
            
            .nav-link i {
                font-size: 0.75rem;
                transition: transform 0.3s ease;
            }
            
            .nav-link:hover {
                color: var(--secondary);
            }
            
            .nav-link:hover i {
                transform: rotate(180deg);
            }
            
            .nav-link.active {
                color: var(--secondary);
                font-weight: 600;
                border-bottom: 2px solid var(--secondary);
            }
            
            /* Dropdown menu */
            .dropdown {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(10px);
                min-width: 180px;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 0.75rem 0;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                border: 1px solid rgba(255,255,255,0.2);
                z-index: 1000;
            }
            
            .nav-item:hover .dropdown {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(5px);
            }
            
            .dropdown-item {
                display: block;
                padding: 0.6rem 1.5rem;
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.2s ease;
                white-space: nowrap;
                font-size: 0.95rem;
            }
            
            .dropdown-item:hover {
                background: var(--secondary);
                color: #000;
            }
            
            .dropdown-item.current {
                background: rgba(255,255,255,0.1);
                font-weight: 600;
                border-left: 3px solid var(--secondary);
            }
            
            /* Right section - language selector */
            .nav-right {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 1rem;
            }
            
            .language-selector {
                display: flex;
                gap: 0.5rem;
                color: white;
                font-size: 0.9rem;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .language-selector span {
                cursor: pointer;
                padding: 0.25rem 0.5rem;
                border-radius: 4px;
                transition: all 0.2s;
            }
            
            .language-selector span:hover {
                background: rgba(255,255,255,0.2);
            }
            
            .language-selector span.active {
                background: var(--secondary);
                color: #000;
            }
            
            .language-selector .divider {
                opacity: 0.5;
                cursor: default;
            }
            
            .language-selector .divider:hover {
                background: transparent;
            }
            
            /* Hamburger menu (mobile) */
            .hamburger {
                display: none;
                flex-direction: column;
                gap: 6px;
                cursor: pointer;
                padding: 0.5rem;
                z-index: 200;
            }
            
            .hamburger span {
                width: 28px;
                height: 2px;
                background: white;
                transition: all 0.3s ease;
                border-radius: 4px;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }
            
            /* Mobile menu */
            .mobile-menu {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.98);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                z-index: 999;
                padding: 5rem 2rem;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .mobile-menu.active {
                opacity: 1;
                visibility: visible;
            }
            
            .mobile-menu-list {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .mobile-menu-item {
                font-size: 1.5rem;
            }
            
            .mobile-menu-link {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.2s;
                display: block;
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(255,255,255,0.2);
            }
            
            .mobile-menu-link.active {
                color: var(--secondary);
                font-weight: 700;
                border-left: 4px solid var(--secondary);
                padding-left: 1rem;
            }
            
            .mobile-dropdown {
                margin-top: 0.5rem;
                margin-left: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }
            
            .mobile-dropdown-link {
                color: rgba(255,255,255,0.9);
                text-decoration: none;
                font-size: 1.2rem;
                padding: 0.25rem 0.5rem;
            }
            
            .mobile-dropdown-link.current {
                background: var(--secondary);
                color: #000;
                border-radius: 8px;
                padding-left: 1rem;
            }
            
            .mobile-language {
                margin-top: 2rem;
                display: flex;
                gap: 1rem;
                color: white;
                font-size: 1.2rem;
            }
            
            /* ===== FOOTER STYLES ===== */
            .footer {
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                color: white;
                padding: 3rem 2rem 1.5rem;
                margin-top: 4rem;
                border-top: 1px solid rgba(255,255,255,0.2);
            }
            
            .footer-container {
                max-width: 1280px;
                margin: 0 auto;
            }
            
            .footer-content {
                display: grid;
                grid-template-columns: 1.5fr 1fr 1.5fr;
                gap: 3rem;
                margin-bottom: 3rem;
            }
            
            .footer-brand h3 {
                font-size: 1.5rem;
                margin-bottom: 0.75rem;
                color: white;
                font-weight: 600;
            }
            
            .footer-brand p {
                color: rgba(255,255,255,0.8);
                font-size: 0.95rem;
                line-height: 1.6;
                margin-bottom: 1.5rem;
            }
            
            .footer-links h4, .footer-contact h4 {
                font-size: 1.1rem;
                margin-bottom: 1.25rem;
                color: white;
                font-weight: 600;
                letter-spacing: 0.5px;
            }
            
            .footer-links ul {
                list-style: none;
            }
            
            .footer-links li {
                margin-bottom: 0.6rem;
            }
            
            .footer-links a {
                color: rgba(255,255,255,0.8);
                text-decoration: none;
                transition: color 0.2s;
                font-size: 0.95rem;
            }
            
            .footer-links a:hover {
                color: var(--secondary);
            }
            
            .footer-contact p {
                margin-bottom: 0.75rem;
                color: rgba(255,255,255,0.8);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                font-size: 0.95rem;
            }
            
            .footer-contact i {
                width: 20px;
                color: var(--secondary);
            }
            
            .social-links {
                display: flex;
                gap: 1rem;
                margin-top: 1.5rem;
            }
            
            .social-links a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                background: rgba(255,255,255,0.1);
                border-radius: 50%;
                color: white;
                transition: all 0.3s ease;
                text-decoration: none;
            }
            
            .social-links a:hover {
                background: var(--secondary);
                color: #000;
                transform: translateY(-3px);
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 2rem;
                border-top: 1px solid rgba(255,255,255,0.2);
                color: rgba(255,255,255,0.6);
                font-size: 0.85rem;
            }
            
            /* ===== HELPER CLASSES FOR YOUR CONTENT ===== */
            .hero {
                min-height: 50vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3rem 2rem;
                text-align: center;
            }
            
            .hero h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
                color: white;
                text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
            }
            
            .hero p {
                font-size: 1.2rem;
                color: rgba(255,255,255,0.9);
                max-width: 600px;
                margin: 0 auto;
            }
            
            .content {
                max-width: 1280px;
                margin: 0 auto;
                padding: 3rem 2rem;
            }
            
            .section-title {
                font-size: 2.2rem;
                text-align: center;
                margin-bottom: 2rem;
                color: white;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .product-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
            }
            
            .product-card {
                background: rgba(255,255,255,0.9);
                backdrop-filter: blur(5px);
                border-radius: 24px;
                padding: 2rem;
                text-align: center;
                box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
                border: 1px solid rgba(255,255,255,0.5);
            }
            
            .product-card:hover {
                transform: translateY(-10px) scale(1.02);
                background: white;
                box-shadow: 0 25px 45px rgba(0,0,0,0.25);
            }
            
            /* ===== RESPONSIVE ===== */
            @media screen and (max-width: 991px) {
                .nav-container {
                    grid-template-columns: 100px 1fr 100px;
                }
                
                .footer-content {
                    gap: 2rem;
                }
            }
            
            @media screen and (max-width: 767px) {
                .nav-menu {
                    display: none;
                }
                
                .language-selector {
                    display: none;
                }
                
                .hamburger {
                    display: flex;
                }
                
                .mobile-menu {
                    display: block;
                }
                
                .footer-content {
                    grid-template-columns: 1fr;
                    text-align: center;
                    gap: 2.5rem;
                }
                
                .footer-contact p {
                    justify-content: center;
                }
                
                .social-links {
                    justify-content: center;
                }
                
                .hero h1 {
                    font-size: 2.2rem;
                }
            }
            
            @media screen and (max-width: 479px) {
                .nav-container {
                    grid-template-columns: 60px 1fr 60px;
                }
                
                .hero {
                    padding: 2rem 1rem;
                }
                
                .hero h1 {
                    font-size: 1.8rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
// ===== FAVICON =====
function setFavicon() {
    if (!config.favicon) return;
    
    // Remove any existing favicons
    document.querySelectorAll('link[rel*="icon"]').forEach(el => el.remove());
    
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = config.favicon;
    document.head.appendChild(favicon);
    
    // Also add apple touch icon
    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.href = config.favicon;
    document.head.appendChild(appleIcon);
}
    
    // ===== BUILD NAVBAR HTML =====
    function buildNavbar() {
        return `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-left">
                        <!-- Optional logo space -->
                    </div>
                    
                    <div class="nav-center">
                        <ul class="nav-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link active">
                                    Lifestyle <i class="fas fa-chevron-down"></i>
                                </a>
                                <div class="dropdown">
                                    <a href="https://flow.janishammer.com" class="dropdown-item ${brand === 'flow' ? 'current' : ''}">Flow</a>
                                    <a href="https://daje.janishammer.com" class="dropdown-item ${brand === 'daje' ? 'current' : ''}">Daje</a>
                                    <a href="https://i-flexthailand.com" class="dropdown-item ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                                    <a href="https://jade.janishammer.com" class="dropdown-item ${brand === 'jade' ? 'current' : ''}">Jade</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="nav-right">
                        <div class="language-selector">
                            <span class="active">EN</span>
                            <span class="divider">|</span>
                            <span>Ina</span>
                        </div>
                        <div class="hamburger" id="janishammerHamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
            
            <!-- Mobile Menu -->
            <div class="mobile-menu" id="janishammerMobileMenu">
                <ul class="mobile-menu-list">
                    <li class="mobile-menu-item">
                        <a href="#" class="mobile-menu-link active">Lifestyle</a>
                        <div class="mobile-dropdown">
                            <a href="https://flow.janishammer.com" class="mobile-dropdown-link ${brand === 'flow' ? 'current' : ''}">Flow</a>
                            <a href="https://daje.janishammer.com" class="mobile-dropdown-link ${brand === 'daje' ? 'current' : ''}">Daje</a>
                            <a href="https://i-flexthailand.com" class="mobile-dropdown-link ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                            <a href="https://jade.janishammer.com" class="mobile-dropdown-link ${brand === 'jade' ? 'current' : ''}">Jade</a>
                        </div>
                    </li>
                    <li class="mobile-menu-item">
                        <a href="#" class="mobile-menu-link">Blog</a>
                    </li>
                    <li class="mobile-menu-item">
                        <a href="#" class="mobile-menu-link">Contact Us</a>
                    </li>
                    <li class="mobile-menu-item">
                        <div class="mobile-language">
                            <span class="active">EN</span> | <span>Ina</span>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }

    // ===== BUILD FOOTER HTML =====
    function buildFooter() {
        const year = new Date().getFullYear();
        const brandName = config.name;
        const domain = config.domain;
        
        return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <h3>${brandName}</h3>
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
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-contact">
                            <h4>Contact Us</h4>
                            <p><i class="fas fa-envelope"></i> ${config.contactEmail}</p>
                            <p><i class="fas fa-globe"></i> ${domain}</p>
                            <p><i class="fas fa-map-marker-alt"></i> Bangkok, Thailand</p>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>© ${year} ${brandName} · A Janishammer Lifestyle Brand · All rights reserved</p>
                    </div>
                </div>
            </footer>
        `;
    }

    // ===== GOOGLE ANALYTICS =====
    function initGoogleAnalytics() {
        // Replace with your GA ID
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

    // ===== INITIALIZE MOBILE MENU =====
    function initMobileMenu() {
        setTimeout(() => {
            const hamburger = document.getElementById('janishammerHamburger');
            const mobileMenu = document.getElementById('janishammerMobileMenu');
            
            if (hamburger && mobileMenu) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    mobileMenu.classList.toggle('active');
                });
                
                // Close menu when clicking a link
                document.querySelectorAll('.mobile-menu-link, .mobile-dropdown-link, .mobile-language span').forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    });
                });
            }
        }, 100);
    }

    // ===== INITIALIZE EVERYTHING =====
    function init() {
        // Load external assets
        loadAssets();
        
        // Inject all styles
        injectStyles();
        
        // Inject navbar at the top
        document.body.insertAdjacentHTML('afterbegin', buildNavbar());
        
        // Inject footer at the bottom
        document.body.insertAdjacentHTML('beforeend', buildFooter());
        
        // Initialize Google Analytics
        initGoogleAnalytics();
        
        // Initialize mobile menu
        initMobileMenu();
        
        console.log(`✅ Janishammer Injector v3.0 loaded for ${config.name}`);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
