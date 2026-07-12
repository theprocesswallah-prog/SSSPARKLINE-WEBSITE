/**
 * ==========================================================================
 * Advanced Re-triggerable Staggered Section Reveals (Intersection Observer)
 * ==========================================================================
 */

class AdvancedAnimationController {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.observerOptions = {
            root: null, // Monitors window viewport boundary
            rootMargin: '0px', // Standard layout spacing
            threshold: 0.25 // Standard threshold for high-fidelity bidirectional triggers
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const animatableElements = entry.target.querySelectorAll('.animate-fade-up');
                
                if (entry.isIntersecting) {
                    // Enter viewport: Apply active class states
                    entry.target.classList.add('section-active');
                    
                    animatableElements.forEach((el, index) => {
                        // Cancel any pending animations to prevent duplicate timer collision states
                        if (el.dataset.animationTimeout) {
                            clearTimeout(parseInt(el.dataset.animationTimeout, 10));
                        }

                        // Schedule staggered entrance frame
                        const timeoutId = setTimeout(() => {
                            // Verify the section is still active in viewport before adding classes
                            if (entry.target.classList.contains('section-active')) {
                                el.classList.add('active');
                            }
                        }, index * 80); // Tighter 80ms stagger interval for highly fluid momentum
                        
                        el.dataset.animationTimeout = timeoutId;
                    });
                } else {
                    // Exit viewport: Safely strip active classes and cancel pending stagger queues
                    entry.target.classList.remove('section-active');
                    
                    animatableElements.forEach(el => {
                        if (el.dataset.animationTimeout) {
                            clearTimeout(parseInt(el.dataset.animationTimeout, 10));
                        }
                        el.classList.remove('active');
                    });
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
