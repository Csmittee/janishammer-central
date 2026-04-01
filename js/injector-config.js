// ============================================
// JANISHAMMER CONFIG v2.0
// - New era: served from assets.janishammer.com
// - No version numbers in filenames
// - All brand colors, fonts, CSS
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
        social: {
            facebook: "https://www.facebook.com/janislifestyle",
            instagram: "https://www.instagram.com/janisflowlifestyle",
            youtube: "#",
            tiktok: "#"
        },
        line: {
            qr: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1774899800/Flow_line_OA.png",
            id: "@972rpdxd",
            tawk: "https://embed.tawk.to/69cad41511c88e1c41fa3a15/1jl04otbd"
        }
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
        social: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" },
        line: {
            qr: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1774914535/jade_QR_line_OA.png",
            id: "@871hcuor"
        }
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
        social: {
            facebook: "https://www.facebook.com/dajequeencatcher",
            instagram: "https://www.instagram.com/dajequeencatcher/",
            youtube: "#",
            tiktok: "#"
        },
        line: {
            qr: "https://res.cloudinary.com/dfiomi0lb/image/upload/v1774899891/Daje_line_OA.png",
            id: "@142itevi",
            tawk: "https://embed.tawk.to/69cad67b942e0d1c35fd0f6a/1jl05bl5c"
        }
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
        social: {
            facebook: "https://www.facebook.com/iflexthailand",
            instagram: "https://www.instagram.com/i_flexthai/",
            youtube: "#",
            tiktok: "#"
        }
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
            position: static;
        }
        
        .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            min-width: 200px;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            border-top: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
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
            width: 100%;
        }
        
        .dropdown-item {
            color: #ffffff;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: color 0.3s ease;
            font-weight: 400;
        }
        
        .dropdown-item:hover {
            color: var(--secondary);
            background: rgba(255,255,255,0.1);
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
        
       /* ===== FOOTER ===== */
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
            justify-content: space-between;
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .footer-brand,
        .footer-links,
        .footer-contact,
        .footer-line {
            flex: 1;
            min-width: 180px;
            text-align: center;
        }
        
        .footer-line h4 {
            font-size: 1rem;
            margin-bottom: 0.75rem;
        }
        
        .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-links a,
        .footer-contact p {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            max-width: 100%;
            overflow-wrap: break-word;
            line-height: 1.6;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            word-break: break-word;
        }
        
        /* Fix footer social links */
        .footer-brand .social-links a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-brand .social-links a:hover {
            color: var(--secondary);
        }
        
        .footer-brand .social-links a:visited {
            color: rgba(255, 255, 255, 0.8);
        }
        
        .footer-brand .social-links a:visited:hover {
            color: var(--secondary);
        }
        
        /* LINE Widget */
        .line-qr {
            width: 100px;
            height: auto;
            margin: 0.5rem auto;
            border-radius: 12px;
            display: block;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .line-chat-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #06C755;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 40px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 0.5rem;
            transition: all 0.3s ease;
            font-size: 0.85rem;
        }
        
        .line-chat-btn:hover {
            transform: translateY(-2px);
            background: #05b04a;
            color: white;
        }
        
        /* Floating Cart Button */
        /* Floating Cart Button */
        .cart-floating {
            position: fixed;
            bottom: 6rem;
            right: 2rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
       /* Floating Cart Button - Complete */
        .cart-floating {
            position: fixed;
            bottom: 6rem;
            right: 2rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .cart-floating:hover {
            transform: scale(1.1);
        }
        
        .cart-floating i {
            font-size: 1.5rem;
            color: white;
        }
        
        .cart-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #F44336;
            color: white;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: bold;
        }
        
        /* Mobile only - fix overlap and size */
        @media screen and (max-width: 767px) {
            .cart-floating {
                bottom: 7rem;
                right: 1rem;
                width: 48px;
                height: 48px;
            }
            
            .cart-floating i {
                font-size: 1.2rem;
            }
        }
        
        @media (max-width: 768px) {
            .footer-brand,
            .footer-links,
            .footer-contact,
            .footer-line {
                flex: 1 1 100%;
                text-align: center;
            }
        }
        /* ===== MOBILE MENU ===== */
        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(15px);
            z-index: 999;
            padding: 5rem 2rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
            .mobile-menu.active { 
            display: block !important;
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
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
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

        /* ===== SOCIAL QR SECTION ===== */
        .social-qr-section {
            max-width: 900px;
            margin: 2.5rem auto;
            padding: 2rem;
            text-align: center;
            position: relative;
            z-index: 2;
        }

        .social-qr-section h2 {
            font-size: 1.6rem;
            font-weight: 700;
            color: white;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
            margin-bottom: 0.5rem;
        }

        .social-qr-section p.qr-subheading {
            font-size: 1rem;
            color: rgba(255,255,255,0.85);
            margin-bottom: 2rem;
        }

        .qr-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
        }

        .qr-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 20px;
            padding: 1.25rem 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            min-width: 160px;
        }

        .qr-item:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }

        .qr-item img {
            width: 130px;
            height: 130px;
            border-radius: 12px;
            background: white;
            padding: 6px;
            display: block;
        }

        .qr-item-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
        }

        .qr-platform {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: rgba(255,255,255,0.6);
        }

        .qr-handle {
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .qr-handle:hover {
            color: var(--secondary);
        }

        .qr-handle i {
            margin-right: 0.3rem;
        }

        @media (max-width: 768px) {
            .social-qr-section {
                padding: 1.5rem 1rem;
            }
            .qr-item {
                min-width: 140px;
                padding: 1rem;
            }
            .qr-item img {
                width: 110px;
                height: 110px;
            }
        }
    `;
    document.head.appendChild(style);
    console.log(`✅ Config v2.0 loaded for ${config.name}`);
})();
