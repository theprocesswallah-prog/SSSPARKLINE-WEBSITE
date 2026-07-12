/**
 * ==========================================================================
 * Advanced Staggered Section Reveals (Intersection Observer)
 * ==========================================================================
 */

class AdvancedAnimationController {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.observerOptions = {
            root: null, // Relative to browser viewport boundary
            rootMargin: '0px 0px -12% 0px', // Precise offset to trigger just before entering frames
            threshold: 0.15 // Minimum 15% section visibility required to fire
        };

        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.createObserver();
        } else {
            this.fallbackImmediateReveal();
        }
    }

    createObserver() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-active');
                    
                    // Discover all animating elements within the active section
                    const animatableElements = entry.target.querySelectorAll('.animate-fade-up');
                    
                    // Trigger elements sequentially with progressive staggered delay intervals (100ms)
                    animatableElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('active');
                        }, index * 100);
                    });
                    
                    observer.unobserve(entry.target); // Unbind clean to maintain high fps rendering
                }
            });
        }, this.observerOptions);

        this.sections.forEach(section => observer.observe(section));
    }

    fallbackImmediateReveal() {
        document.querySelectorAll('.animate-fade-up').forEach(el => el.classList.add('active'));
    }
}

// Instantiate globally on compile window context
window.Animations = new AdvancedAnimationController();
