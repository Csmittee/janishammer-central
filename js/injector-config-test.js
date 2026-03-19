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
        
        .hero, .content, .footer { position: relative; z-index: 2; }
        
        /* ===== NAVBAR ONLY ===== */
        .navbar-fixed-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
        }
        
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
    `;
    document.head.appendChild(style);
})();
