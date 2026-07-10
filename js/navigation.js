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
        this.scrollThreshold = 20;

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

        // Skip translucent processing if the scroll triggers on structural pages (non-index)
        if (this.header.classList.contains('static-header')) return;

        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            // Remove state only if mobile drawer is closed to prevent header visibility flash
            if (!this.mobileDrawer || !this.mobileDrawer.classList.contains('open')) {
                this.header.classList.remove('scrolled');
            }
        }
    }

    toggleMobileMenu() {
        this.mobileToggle.classList.toggle('active');
        this.mobileDrawer.classList.toggle('open');
        
        // Toggle header scrolled styling class when drawer is open
        if (this.mobileDrawer.classList.contains('open')) {
            this.header.classList.add('scrolled');
            document.body.style.overflow = 'hidden'; // Lock scrolling
        } else {
            this.handleScroll();
            document.body.style.overflow = ''; // Unlock scrolling
        }
    }
}

// Instantiate Globally for modular access
window.Navigation = new NavigationController();
