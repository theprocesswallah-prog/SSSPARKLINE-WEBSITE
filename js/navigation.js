/**
 * ==========================================================================
 * Navigation Interactive & Scroll Transitions Handler
 * ==========================================================================
 */

class NavigationController {
    constructor() {
        this.header = document.getElementById('global-header');
        this.mobileToggle = document.getElementById('mobile-toggle');
        this.mobileDrawer = document.getElementById('mobile-drawer');
        this.scrollThreshold = 50; // Triggers header scale transformation

        this.init();
    }

    init() {
        // Apply scroll event listeners safely
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        
        // Mobile Toggle Interactions
        if (this.mobileToggle && this.mobileDrawer) {
            this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Trigger on init to verify state
        this.handleScroll();
    }

    handleScroll() {
        if (!this.header) return;

        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Apply scroll modification classes for header downscaling and color state changes
        if (currentScroll > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            // Remove scroll styling only if mobile drawer menu is closed
            if (!this.mobileDrawer || !this.mobileDrawer.classList.contains('open')) {
                this.header.classList.remove('scrolled');
            }
        }
    }

    toggleMobileMenu() {
        this.mobileToggle.classList.toggle('active');
        this.mobileDrawer.classList.toggle('open');
        
        // Lock window scroll mechanics when drawer is initialized
        if (this.mobileDrawer.classList.contains('open')) {
            this.header.classList.add('scrolled');
            document.body.style.overflow = 'hidden';
        } else {
            this.handleScroll();
            document.body.style.overflow = '';
        }
    }
}

// Instantiate Globally for modular access
window.Navigation = new NavigationController();
