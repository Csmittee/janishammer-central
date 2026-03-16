/* ========================================
   JANISHAMMER MASTER INJECTOR
   Ensures brand compliance across all sites
   Load this on EVERY page
   Version 1.0
   ======================================== */

(function() {
    'use strict';
    
    // ===== CONFIGURATION =====
    const CONFIG = {
        // CDN paths (update these with your actual GitHub raw URLs)
        cssUrl: 'https://raw.githubusercontent.com/YOUR_USERNAME/janishammer-central/main/theme/master.css',
        footerUrl: 'https://raw.githubusercontent.com/YOUR_USERNAME/janishammer-central/main/js/footer.js',
        
        // Brand domains for navigation
        domains: {
            home: 'https://janishammer.com',
            about: 'https://janishammer.com/about',
            blog: 'https://janishammer.com/blog',
            skate: 'https://skate.janishammer.com',
            coffee: 'https://coffee.janishammer.com',
            games: 'https://games.janishammer.com',
            iflex: 'https://iflex.janishammer.com'
        },
        
        // Brand colors for validation
        brandColors: {
            primary: '#e34c26',
            secondary: '#333333',
            accent: '#4a90e2',
            olive: '#808000'
        }
    };
    
    // ===== LOAD MASTER CSS =====
    function loadMasterCSS() {
        if (!document.querySelector('#janishammer-master-css')) {
            const link = document.createElement('link');
            link.id = 'janishammer-master-css';
            link.rel = 'stylesheet';
            link.href = CONFIG.cssUrl;
            document.head.appendChild(link);
            console.log('✅ Janishammer Master CSS loaded');
        }
    }
    
    // ===== ENFORCE NAVIGATION =====
    function enforceNavigation() {
        // Look for existing nav
        let nav = document.querySelector('nav, .nav, .j-nav, [class*="nav"]');
        
        // If no nav found, create one
        if (!nav) {
            nav = document.createElement('nav');
            nav.className = 'j-nav';
            document.body.insertBefore(nav, document.body.firstChild);
        }
        
        // Ensure it has brand on left
        if (!nav.querySelector('.j-nav-brand')) {
            const brand = document.createElement('a');
            brand.href = CONFIG.domains.home;
            brand.className = 'j-nav-brand';
            brand.textContent = 'Janishammer';
            nav.prepend(brand);
        }
        
        // Ensure it has links container
        let linksContainer = nav.querySelector('.j-nav-links');
        if (!linksContainer) {
            linksContainer = document.createElement('div');
            linksContainer.className = 'j-nav-links';
            nav.appendChild(linksContainer);
        }
        
        // Add required links if missing
        const requiredLinks = [
            { text: 'Home', url: CONFIG.domains.home },
            { text: 'About', url: CONFIG.domains.about },
            { text: 'Blog', url: CONFIG.domains.blog },
            { text: 'Skate', url: CONFIG.domains.skate },
            { text: 'Coffee', url: CONFIG.domains.coffee },
            { text: 'Games', url: CONFIG.domains.games },
            { text: 'I-Flex', url: CONFIG.domains.iflex }
        ];
        
        requiredLinks.forEach(link => {
            if (!linksContainer.querySelector(`a[href="${link.url}"]`)) {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.text;
                linksContainer.appendChild(a);
            }
        });
        
        // Ensure hamburger exists for mobile
        if (!nav.querySelector('.j-hamburger')) {
            const hamburger = document.createElement('button');
            hamburger.className = 'j-hamburger';
            hamburger.innerHTML = '☰';
            hamburger.onclick = toggleMobileMenu;
            nav.appendChild(hamburger);
        }
        
        // Create mobile menu if doesn't exist
        if (!document.querySelector('.j-mobile-menu')) {
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'j-mobile-menu';
            
            requiredLinks.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.text;
                a.onclick = () => {
                    mobileMenu.classList.remove('active');
                };
                mobileMenu.appendChild(a);
            });
            
            document.body.appendChild(mobileMenu);
        }
    }
    
    // ===== TOGGLE MOBILE MENU =====
    function toggleMobileMenu() {
        const menu = document.querySelector('.j-mobile-menu');
        if (menu) {
            menu.classList.toggle('active');
        }
    }
    
    // ===== ENFORCE FOOTER =====
    function enforceFooter() {
        if (!document.querySelector('footer, .footer, .j-footer')) {
            const script = document.createElement('script');
            script.src = CONFIG.footerUrl;
            document.body.appendChild(script);
        }
    }
    
    // ===== APPLY CARD STYLES =====
    function enhanceCards() {
        // Find elements that look like cards but don't have j-card class
        const cardCandidates = document.querySelectorAll(
            '.card, .product, .item, [class*="card"], [class*="product"]'
        );
        
        cardCandidates.forEach(el => {
            if (!el.classList.contains('j-card')) {
                el.classList.add('j-card');
            }
        });
    }
    
    // ===== APPLY BUTTON STYLES =====
    function enhanceButtons() {
        const buttonCandidates = document.querySelectorAll(
            'button, .btn, .button, [class*="btn"], [class*="button"], [role="button"]'
        );
        
        buttonCandidates.forEach(el => {
            if (!el.classList.contains('j-btn')) {
                el.classList.add('j-btn');
            }
        });
    }
    
    // ===== APPLY CONTAINER =====
    function ensureContainer() {
        // If body has direct children that aren't nav or script, wrap in container
        const children = document.body.children;
        const mainContent = [];
        
        for (let child of children) {
            if (child.tagName !== 'SCRIPT' && 
                child.tagName !== 'NAV' && 
                !child.classList.contains('j-nav') &&
                child.tagName !== 'FOOTER' &&
                !child.classList.contains('j-footer')) {
                mainContent.push(child);
            }
        }
        
        if (mainContent.length > 0 && !document.querySelector('.j-container')) {
            const container = document.createElement('div');
            container.className = 'j-container';
            
            // Move main content into container
            mainContent.forEach(el => {
                container.appendChild(el.cloneNode(true));
                el.remove();
            });
            
            // Insert after nav
            const nav = document.querySelector('.j-nav');
            if (nav && nav.nextSibling) {
                document.body.insertBefore(container, nav.nextSibling);
            } else {
                document.body.appendChild(container);
            }
        }
    }
    
    // ===== SCROLL EFFECTS =====
    function setupScrollEffects() {
        // Add reveal class to sections
        document.querySelectorAll('section, .hero, .section, [class*="hero"], [class*="section"]').forEach(el => {
            if (!el.classList.contains('j-reveal')) {
                el.classList.add('j-reveal');
            }
        });
        
        // Intersection Observer for scroll reveals
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.j-reveal').forEach(el => {
            observer.observe(el);
        });
    }
    
    // ===== VALIDATION TOOL =====
    window.validateJanishammer = function() {
        const issues = [];
        
        // Check if master CSS loaded
        if (!document.querySelector('#janishammer-master-css')) {
            issues.push('❌ Master CSS not loaded');
        }
        
        // Check for j-card usage
        const cards = document.querySelectorAll('.card, [class*="card"]:not(.j-card)');
        if (cards.length > 0) {
            issues.push(`⚠️ Found ${cards.length} cards without j-card class`);
        }
        
        // Check for button usage
        const buttons = document.querySelectorAll('button:not(.j-btn), .btn:not(.j-btn)');
        if (buttons.length > 0) {
            issues.push(`⚠️ Found ${buttons.length} buttons without j-btn class`);
        }
        
        // Check navigation
        if (!document.querySelector('.j-nav')) {
            issues.push('❌ Navigation missing j-nav class');
        }
        
        // Check footer
        if (!document.querySelector('footer') && !document.querySelector('.j-footer')) {
            issues.push('❌ Footer missing');
        }
        
        if (issues.length === 0) {
            console.log('✅ JANISHAMMER: Fully compliant!');
            return '✅ All good!';
        } else {
            console.log('🔍 JANISHAMMER Validation Issues:', issues);
            return issues;
        }
    };
    
    // ===== INITIALIZE =====
    window.addEventListener('load', () => {
        loadMasterCSS();
        enforceNavigation();
        enforceFooter();
        enhanceCards();
        enhanceButtons();
        ensureContainer();
        setupScrollEffects();
        
        // Auto-validate in console
        setTimeout(() => {
            console.log('🔍 Running Janishammer validation...');
            window.validateJanishammer();
        }, 1000);
    });
    
    console.log('🚀 Janishammer Master Injector loaded');
})();
