/**
 * ==========================================================================
 * Scroll Handling Utility Mechanics
 * ==========================================================================
 */

class ScrollController {
    constructor() {
        this.initSmoothScroll();
    }

    initSmoothScroll() {
        // Track valid local hash tags for smooth, easing scroll calculations
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (event) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    
                    // Account for structural sticky navigation height offsets
                    const headerHeight = document.getElementById('global-header')?.offsetHeight || 72;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

window.Scroll = new ScrollController();
