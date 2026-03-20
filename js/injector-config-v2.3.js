// ============================================
// JANISHAMMER CONFIG v2.2 +0.1
// - Fixed: Footer flex (30% columns, mobile stack)
// - Fixed: Navbar alignment (hamburger right, menu centered)
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
        logoLight: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773931919/Daje-logo-original-nobg.png",
        logoDark: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773931919/Daje-logo-original-nobg.png",
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

window.CURRENT_BRAND = (function() {
    const hostname = window.location.hostname;
    if (hostname.includes('flow')) return 'flow';
    if (hostname.includes('jade')) return 'jade';
    if (hostname.includes('daje')) return 'daje';
    if (hostname.includes('i-flex') || hostname.includes('iflex')) return 'iflex';
    return 'janishammer';
})();

(function injectStyles() {
    const brand = window.CURRENT_BRAND;
    const config = window.BRANDS[brand];
    
    const style = document.createElement('style');
    style.id = 'janishammer-styles-v2.2';
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: ${config.font};
            background-image: url('${config.bgImage}');
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            min-height: 100vh;
            padding-top: 80px;
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
        
        .hero, .content, .footer { 
            position: relative; 
            z-index: 2; 
        }
        
        :root {
            --primary: ${config.primary};
            --secondary: ${config.secondary};
            --accent: ${config.accent};
        }
        
        /* ===== FIXED WRAPPER ===== */
        .navbar-fixed-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
        }
        
        /* ===== NAVBAR ===== */
        .navbar {
            width: 100%;
            padding: 0.75rem 2rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        
        /* Fixed navbar alignment */
        .nav-container {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 1rem;
            width: 100%;
        }
        
        .nav-left {
            justify-self: start;
        }
        
        .nav-center {
            justify-self: center;
            text-align: center;
        }
        
        .nav-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0.75rem;
            min-width: 100px;
        }
        
        .nav-left img { 
            height: 40px; 
            width: auto;
            transition: transform 0.3s ease;
        }
        
        .nav-left img:hover {
            transform: scale(1.1);
        }
        
        .nav-menu { 
            display: flex; 
            list-style: none; 
            gap: 2rem; 
            justify-content: center; 
        }
        
        .nav-link {
            color: #000000;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            text-shadow: 0 1px 2px rgba(255,255,255,0.3);
            transition: color 0.3s ease;
        }
        
        .nav-link:hover { 
            color: var(--secondary); 
        }
        
        /* ===== DROPDOWN ===== */
        .nav-item {
            position: relative;
        }
        
        .dropdown {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            border-top: 1px solid rgba(0,0,0,0.1);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .nav-item:hover .dropdown {
            opacity: 1;
            visibility: visible;
        }
        
        .dropdown-content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            gap: 2rem;
            padding: 0 2rem;
        }
        
        .dropdown-item {
            color: #000000;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: color 0.3s ease;
            font-weight: 400;
        }
        
        .dropdown-item:hover {
            color: var(--secondary);
            background: rgba(0,0,0,0.05);
            border-radius: 4px;
        }
        
        .dropdown-item.current {
            color: var(--secondary);
            font-weight: 600;
        }
        
        /* ===== LANGUAGE SELECTOR ===== */
        .language-selector {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #000000;
            justify-content: flex-end;
        }
        
        .language-selector span {
            line-height: 1;
            padding: 0.25rem 0;
        }
        
        .language-selector span.active {
            background: var(--secondary);
            color: #ffffff;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
        }
        
        .hamburger {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
            margin-left: auto;
        }
        
        .hamburger span {
            width: 28px;
            height: 2px;
            background: white;
            transition: all 0.3s ease;
        }
        
        /* ===== FOOTER (flex 30% columns, mobile stack) ===== */
        .footer {
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(10px);
            color: white;
            padding: 3rem 2rem 1.5rem;
            margin-top: 4rem;
            width: 100%;
            overflow-x: hidden;
            box-sizing: border-box;
        }
        
        .footer-container {
            max-width: 1280px;
            margin: 0 auto;
            width: 100%;
            box-sizing: border-box;
        }
        
        .footer-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .footer-brand,
        .footer-links,
        .footer-contact {
            flex: 1 1 30%;
            min-width: 200px;
            word-break: break-word;
            text-align: center;
            }
        
        .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }
        
        .footer-links a,
        .footer-contact p {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            display: inline-block;
            max-width: 100%;
            overflow-wrap: break-word;
            line-height: 1.6;
            text-align: center;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            word-break: break-word;
        }
        
        /* ===== MOBILE MENU ===== */
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
        
        .mobile-menu.active { 
            opacity: 1; 
            visibility: visible; 
        }
        
        .mobile-menu-link { 
            color: white; 
            text-decoration: none; 
            font-size: 1.5rem; 
            display: block; 
            padding: 0.5rem 0; 
        }
        
        .mobile-dropdown { 
            margin-left: 1rem; 
        }
        
        .mobile-dropdown-link { 
            color: rgba(255,255,255,0.8); 
            text-decoration: none; 
            font-size: 1.2rem; 
            display: block; 
            padding: 0.25rem 0; 
        }
        
        /* ===== MOBILE RESPONSIVE ===== */
        @media screen and (max-width: 767px) {
            .nav-menu,
            .language-selector {
                display: none;
            }
            .hamburger {
                display: flex;
            }
            .nav-right {
                justify-content: flex-end;
            }
        }
        
        @media screen and (max-width: 768px) {
            .footer-content {
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 2rem;
            }
            
            .footer-brand,
            .footer-links,
            .footer-contact {
                flex: 1 1 100%;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
    console.log(`✅ Config v2.2 loaded for ${config.name}`);
})();
