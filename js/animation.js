/**
 * ==========================================================================
 * Intersection Observer Animation Orchestrator
 * ==========================================================================
 */

class AnimationController {
    constructor() {
        this.animationTargets = document.querySelectorAll('.animate-on-scroll, .animate-fade-up');
        this.observerOptions = {
            root: null, // Default to browser viewport boundary
            rootMargin: '0px 0px -8% 0px', // Soft offset trigger just before elements enter view frame
            threshold: 0.1 // Minimum 10% element spatial visibility required to fire
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
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Unbind cleanly to prevent multiple animation triggers
                }
            });
        }, this.observerOptions);

        this.animationTargets.forEach(target => observer.observe(target));
    }

    fallbackImmediateReveal() {
        this.animationTargets.forEach(target => target.classList.add('active'));
    }
}

window.Animations = new AnimationController();
