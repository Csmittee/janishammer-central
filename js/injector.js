// ============================================
// JANISHAMMER MASTER INJECTOR
// Controls: styles, navbar, footer, colors, products
// One file to rule them all!
// ============================================

(function() {
    // ----- CONFIGURATION -----
    const BRANDS = {
        flow: {
            name: "Janis Flow",
            primary: "#D4E157",
            secondary: "#AED581",
            accent: "#33691E",
            font: "'Sora', sans-serif",
            bgImage: "https://res.cloudinary.com/.../janis_only.png",
            logo: "https://res.cloudinary.com/.../All_Janishammer_temp.png",
            tagline: "Let's flow!",
            products: ["Skateboards", "Surfskates", "Accessories"]
        },
        jade: {
            name: "Jade Coffee",
            primary: "#6F4E37",
            secondary: "#C4A484",
            accent: "#A67B5B",
            font: "'Outfit', sans-serif",
            bgImage: "https://res.cloudinary.com/.../Jade_only.png",
            logo: "https://res.cloudinary.com/.../All_Janishammer_temp.png",
            tagline: "Taste of Heaven",
            products: ["Ethiopian Blend", "Morning Roast", "Limited Reserve"]
        },
        daje: {
            name: "Daje Games",
            primary: "#000000",
            secondary: "#FFB6C1",
            accent: "#D4AF37",
            font: "'Quicksand', sans-serif",
            bgImage: "https://res.cloudinary.com/.../Daje_only.png",
            logo: "https://res.cloudinary.com/.../All_Janishammer_temp.png",
            tagline: "Happiness you can catch",
            products: ["Claw Machines", "Prizes", "Parts"]
        },
        janishammer: {
            name: "Janis Hammer",
            primary: "#E34C26",
            secondary: "#2C3E50",
            accent: "#F4D03F",
            font: "'Inter', sans-serif",
            bgImage: "https://res.cloudinary.com/.../All-logo.png",
            logo: "https://res.cloudinary.com/.../All_Janishammer_temp.png",
            tagline: "We create lifestyle",
            products: ["Brands", "Philosophy", "Contact"]
        }
    };

    // ----- DETECT BRAND -----
    function getCurrentBrand() {
        const hostname = window.location.hostname;
        if (hostname.includes('flow')) return 'flow';
        if (hostname.includes('jade')) return 'jade';
        if (hostname.includes('daje')) return 'daje';
        return 'janishammer';
    }

    const brand = getCurrentBrand();
    const config = BRANDS[brand];

    // ----- LOAD EXTERNAL ASSETS -----
    function loadAssets() {
        // Font Awesome (if not exists)
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const fa = document.createElement('link');
            fa.rel = 'stylesheet';
            fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fa);
        }
        
        // Google Fonts
        const fonts = document.createElement('link');
        fonts.rel = 'stylesheet';
        fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600&display=swap';
        document.head.appendChild(fonts);
    }

    // ----- INJECT MASTER STYLES -----
    function injectStyles() {
        // Remove old footer.js functionality - now all in one place!
        const style = document.createElement('style');
        style.id = 'janishammer-master-styles';
        style.textContent = `
            /* Your complete CSS here - from navbar to footer */
            /* (I'll add the full CSS from previous message) */
        `;
        document.head.appendChild(style);
    }

    // ----- BUILD NAVBAR -----
    function buildNavbar() {
        return `...`; // Your navbar HTML
    }

    // ----- BUILD FOOTER -----
    function buildFooter() {
        return `...`; // Your footer HTML
    }

    // ----- BUILD HERO (if missing) -----
    function buildHero() {
        if (document.querySelector('.hero')) return '';
        return `
            <section class="hero">
                <div class="hero-container">
                    <img src="${config.logo}" alt="${config.name}" class="hero-logo">
                </div>
            </section>
        `;
    }

    // ----- BUILD PRODUCTS (if missing) -----
    function buildProducts() {
        if (document.querySelector('.product-grid')) return '';
        
        const icons = ['fa-mug-hot', 'fa-coffee', 'fa-crown', 'fa-gamepad', 'fa-dumbbell'];
        return `
            <main class="content">
                <h1 class="section-title">${config.tagline}</h1>
                <div class="product-grid">
                    ${config.products.map((product, i) => `
                        <div class="product-card">
                            <div class="product-icon"><i class="fas ${icons[i % icons.length]}"></i></div>
                            <h3 class="product-title">${product}</h3>
                            <button class="product-button">Explore</button>
                        </div>
                    `).join('')}
                </div>
            </main>
        `;
    }

    // ----- INITIALIZE -----
    function init() {
        loadAssets();
        injectStyles();
        
        // Inject components in correct order
        document.body.insertAdjacentHTML('afterbegin', buildNavbar());
        document.body.insertAdjacentHTML('beforeend', buildHero());
        document.body.insertAdjacentHTML('beforeend', buildProducts());
        document.body.insertAdjacentHTML('beforeend', buildFooter());
        
        // Initialize mobile menu
        setTimeout(() => {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');
            if (hamburger && mobileMenu) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    mobileMenu.classList.toggle('active');
                });
            }
        }, 100);
    }

    // Run when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
