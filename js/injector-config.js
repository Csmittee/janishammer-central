// ============================================
// JANISHAMMER CONFIG v1.0
// EDIT THIS FILE TO CHANGE COLORS, IMAGES, BRAND SETTINGS
// ============================================

window.BRANDS = {
    flow: {
        name: "Janis Flow",
        primary: "#D4E157",
        secondary: "#AED581", 
        accent: "#33691E",
        font: "'Sora', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773775009/janis_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772671/Janis-flow-logo-s.png",
        tagline: "Lets flow!",
        contactEmail: "info@janishammer.com",
        domain: "flow.janishammer.com",
        social: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" }
    },
    jade: {
        name: "Jade Coffee",
        primary: "#6F4E37",
        secondary: "#C4A484",
        accent: "#A67B5B",
        font: "'Outfit', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774756/Jade_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774149/Jade-logo-original.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774149/Jade-logo-original.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774160/Jade-original-logo_40_x_40_px.png",
        tagline: "Taste of heaven",
        contactEmail: "info@janishammer.com",
        domain: "jade.janishammer.com",
        social: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" }
    },
    daje: {
        name: "Daje Games",
        primary: "#000000",
        secondary: "#FFB6C1",
        accent: "#D4AF37",
        font: "'Quicksand', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774844/Daje_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773773704/Daje-logo-std.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773773704/Daje-logo-std.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773773700/Daje-logo-focus.png",
        tagline: "Happiness you can catch",
        contactEmail: "info@janishammer.com",
        domain: "daje.janishammer.com",
        social: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" }
    },
    iflex: {
        name: "I-Flex Pilates",
        primary: "#1A1A1A",
        secondary: "#FFD700",
        accent: "#FFFFFF",
        font: "'Montserrat', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773775103/I_flex_only.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773768378/I-Flex_main_no_bg.svg",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773768378/I-Flex_main_no_bg.svg",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773768489/Original.png",
        tagline: "A healthy lifestyle",
        contactEmail: "info@i-flexthailand.com",
        domain: "i-flexthailand.com",
        social: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" }
    },
    janishammer: {
        name: "Janis Hammer",
        primary: "#E34C26",
        secondary: "#2C3E50",
        accent: "#F4D03F",
        font: "'Inter', sans-serif",
        bgImage: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773774928/All-logo.png",
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773567285/Janis_icon_trans.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773567285/Janis_icon.png",
        favicon: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773567553/favicon-32x32.png",
        tagline: "We create lifestyle",
        contactEmail: "info@janishammer.com",
        domain: "janishammer.com",
        social: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" }
    }
};

// ===== DETECT CURRENT BRAND =====
window.CURRENT_BRAND = (function() {
    const hostname = window.location.hostname;
    if (hostname.includes('flow')) return 'flow';
    if (hostname.includes('jade')) return 'jade';
    if (hostname.includes('daje')) return 'daje';
    if (hostname.includes('i-flex') || hostname.includes('iflex')) return 'iflex';
    return 'janishammer';
})();

// ===== INJECT STYLES (the flexible part) =====
(function injectStyles() {
    const brand = window.CURRENT_BRAND;
    const config = window.BRANDS[brand];
    
    const style = document.createElement('style');
    style.id = 'janishammer-brand-styles';
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: ${config.font};
            background-image: url('${config.bgImage}');
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            min-height: 100vh;
            position: relative;
        }
        
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
        
        .navbar, .hero, .content, .footer { position: relative; z-index: 2; }
        
        :root {
            --primary: ${config.primary};
            --secondary: ${config.secondary};
            --accent: ${config.accent};
        }
        
        /* ===== NAVBAR STYLES ===== */
        .navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 0.75rem 2rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        
        .nav-container {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 120px 1fr 120px;
            align-items: center;
            gap: 1rem;
        }
        
        .nav-left img { height: 40px; width: auto; }
        .nav-menu { display: flex; list-style: none; gap: 2rem; justify-content: center; }
        .nav-link {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .nav-link:hover { color: var(--secondary); }
        
        .dropdown {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            min-width: 180px;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 0.75rem 0;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
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
        }
        
        .dropdown-item:hover { background: var(--secondary); color: #000; }
        .dropdown-item.current { border-left: 3px solid var(--secondary); background: rgba(255,255,255,0.1); }
        
        .language-selector {
            display: flex;
            gap: 0.5rem;
            color: white;
            justify-content: flex-end;
        }
        
        .language-selector span.active {
            background: var(--secondary);
            color: #000;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
        }
        
        /* ===== MOBILE ===== */
        .hamburger {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
        }
        
        .hamburger span {
            width: 28px;
            height: 2px;
            background: white;
            transition: all 0.3s ease;
        }
        
        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,0.98);
            backdrop-filter: blur(20px);
            z-index: 999;
            padding: 5rem 2rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .mobile-menu.active { opacity: 1; visibility: visible; }
        .mobile-menu-link { color: white; text-decoration: none; font-size: 1.5rem; display: block; padding: 0.5rem 0; }
        .mobile-dropdown { margin-left: 1rem; }
        .mobile-dropdown-link { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1.2rem; display: block; padding: 0.25rem 0; }
        
        /* ===== FOOTER ===== */
        .footer {
            background: rgba(0,0,0,0.75);
            backdrop-filter: blur(10px);
            color: white;
            padding: 3rem 2rem 1.5rem;
            margin-top: 4rem;
        }
        
        .footer-container { max-width: 1280px; margin: 0 auto; }
        
        .footer-content {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1.5fr;
            gap: 3rem;
            margin-bottom: 3rem;
            text-align: center;
            justify-items: center;
        }
        
        .footer-links ul { list-style: none; padding: 0; }
        .footer-links a { color: rgba(255,255,255,0.8); text-decoration: none; }
        .footer-links a:hover { color: var(--secondary); }
        
        .footer-contact p {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            justify-content: center;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1.5rem;
        }
        
        .social-links a {
            color: white;
            background: rgba(255,255,255,0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }
        
        .social-links a:hover { background: var(--secondary); color: #000; }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        
        @media screen and (max-width: 767px) {
            .nav-menu, .language-selector { display: none; }
            .hamburger { display: flex; }
            .mobile-menu { display: block; }
            .footer-content { grid-template-columns: 1fr; }
        }
    `;
    document.head.appendChild(style);
})();
