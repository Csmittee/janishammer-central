// ============================================
// JANISHAMMER INJECTOR CORE TEST v1.0
// TEST VERSION - Fixed wrapper + dropdown
// ============================================

(function() {
    function buildNavbar() {
        const config = window.BRANDS.janishammer;
        const brand = 'janishammer';
        
        return `
            <div class="navbar-fixed-wrapper">
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-left">
                            <img src="${config.logoLight}" alt="${config.name}">
                        </div>
                        
                        <div class="nav-center">
                            <ul class="nav-menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Lifestyle <i class="fas fa-chevron-down"></i></a>
                                    <div class="dropdown">
                                        <div class="dropdown-content">
                                            <a href="https://flow.janishammer.com" class="dropdown-item ${brand === 'flow' ? 'current' : ''}">Flow</a>
                                            <a href="https://daje.janishammer.com" class="dropdown-item ${brand === 'daje' ? 'current' : ''}">Daje</a>
                                            <a href="https://i-flexthailand.com" class="dropdown-item ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                                            <a href="https://jade.janishammer.com" class="dropdown-item ${brand === 'jade' ? 'current' : ''}">Jade</a>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#" class="nav-link">Blog</a></li>
                                <li><a href="#" class="nav-link">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div class="nav-right">
                            <div class="language-selector">
                                <span class="active">EN</span> | <span>TH</span>
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
                    <li><a href="#" class="mobile-menu-link">Lifestyle</a>
                        <div class="mobile-dropdown">
                            <a href="https://flow.janishammer.com" class="mobile-dropdown-link ${brand === 'flow' ? 'current' : ''}">Flow</a>
                            <a href="https://daje.janishammer.com" class="mobile-dropdown-link ${brand === 'daje' ? 'current' : ''}">Daje</a>
                            <a href="https://i-flexthailand.com" class="mobile-dropdown-link ${brand === 'iflex' ? 'current' : ''}">I-Flex</a>
                            <a href="https://jade.janishammer.com" class="mobile-dropdown-link ${brand === 'jade' ? 'current' : ''}">Jade</a>
                        </div>
                    </li>
                    <li><a href="#" class="mobile-menu-link">Blog</a></li>
                    <li><a href="#" class="mobile-menu-link">Contact Us</a></li>
                </ul>
            </div>
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

    function init() {
        if (!window.BRANDS) {
            console.error('Janishammer: BRANDS config not loaded');
            return;
        }
        
        document.body.insertAdjacentHTML('afterbegin', buildNavbar());
        initMobileMenu();
        console.log('✅ Test injector loaded');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
