(function() {
    function buildNavbar() {
        const config = window.BRANDS.janishammer;
        
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
                                    <a href="#" class="nav-link">Lifestyle</a>
                                </li>
                                <li><a href="#" class="nav-link">Blog</a></li>
                                <li><a href="#" class="nav-link">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="nav-right">
                            <div class="language-selector">
                                <span class="active">EN</span> | <span>TH</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        `;
    }

    function init() {
        document.body.insertAdjacentHTML('afterbegin', buildNavbar());
        console.log('✅ Test injector loaded');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
