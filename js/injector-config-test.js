// ============================================
// JANISHAMMER CONFIG TEST v1.0
// TEST VERSION - Navbar fixes only
// ============================================

window.BRANDS = {
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

window.CURRENT_BRAND = 'janishammer';

(function injectStyles() {
    const config = window.BRANDS.janishammer;
    const style = document.createElement('style');
    style.id = 'janishammer-test-styles';
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
        
        /* ===== FIXED WRAPPER (NEW) ===== */
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
        
        .nav-container {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 120px 1fr 120px;
            align-items: center;
            gap: 1rem;
        }
        
        /* ===== LOGO ===== */
        .nav-left img { 
            height: 40px; 
            width: auto;
            transition: transform 0.3s ease;
        }
        
        .nav-left img:hover {
            transform: scale(1.1);
        }
        
        /* ===== NAVIGATION MENU ===== */
        .nav-menu { 
            display: flex; 
            list-style: none; 
            gap: 2rem; 
            justify-content: center; 
        }
        
       .nav-link {
            color: #000000;  /* Changed from white to black */
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            text-shadow: 0 1px 2px rgba(255,255,255,0.3); /* Lighter shadow for dark text */
            transition: color 0.3s ease;
        }
        
        .nav-link:hover { 
            color: var(--secondary); 
        }
        
        /* ===== DROPDOWN (FULL WIDTH) ===== */
        .nav-item {
            position: relative;
        }
        
        .dropdown {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            background: rgba(255, 255, 255, 0.85);  /* Light background with opacity */
            backdrop-filter: blur(10px);             /* Glass effect */
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
            color: #000000;  /* Black text */
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: color 0.3s ease;
            font-weight: 400;
        }
        
        .dropdown-item:hover {
            color: var(--secondary);  /* Keep brand color on hover */
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
            color: #000000;  /* Black text */
            justify-content: flex-end;
        }
        
        .language-selector span {
            line-height: 1;
            padding: 0.25rem 0;
        }
        
        .language-selector span.active {
            background: var(--secondary);  /* Brand color background */
            color: #ffffff;  /* White text for contrast */
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
        }
        
        /* ===== MOBILE MENU (FROM ORIGINAL) ===== */
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
        
        @media screen and (max-width: 767px) {
            .nav-menu, .language-selector { 
                display: none; 
            }
            .hamburger { 
                display: flex; 
            }
            .mobile-menu { 
                display: block; 
            }
        }
    `;
    document.head.appendChild(style);
})();
