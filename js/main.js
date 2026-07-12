/**
 * ==========================================================================
 * System Orchestration & Programmatic Interaction Manager
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initializer log confirmation
    console.log('Shiv Shiv Sparkline Platform Foundations Initialized Successfully.');
    
    // Performance optimization: prevent animation layout shifts during active resize operations
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-in-progress');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-in-progress');
        }, 150);
    });

    // Programmatic Autoplay Assertion Handler
    const video = document.querySelector('.hero-video-element');
    if (video) {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.log("Static video autoplay was restricted. Attaching passive viewport interaction hooks.");
                
                const playOnInteraction = () => {
                    video.play();
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('scroll', playOnInteraction);
                };
                
                document.addEventListener('click', playOnInteraction, { passive: true });
                document.addEventListener('scroll', playOnInteraction, { passive: true });
            });
        }
    }

    // Dynamic Slide Rotation Data (Sourced from verified company services/offerings)
    const heroSlides = [
        {
            label: "01 / ELECTRICAL TRADING",
            subtitle: "Providing reliable power cables, connectors, conductors, and insulators designed with precision and uncompromised standards."
        },
        {
            label: "02 / SOLAR SOLUTIONS",
            subtitle: "Supplying rooftop and industrial solar materials to support a modern infrastructure and smarter energy future."
        },
        {
            label: "03 / EPC PROCUREMENT",
            subtitle: "Delivering efficient material coordination and vendor support for industrial, utility, and infrastructure works."
        },
        {
            label: "04 / INDUSTRIAL SUPPLY",
            subtitle: "Serving industrial clients, contractors, and utility projects with quality products, timely delivery, and professional support."
        }
    ];

    let currentSlideIndex = 0;
    const labelEl = document.getElementById('hero-dynamic-label');
    const subtitleEl = document.getElementById('hero-dynamic-subtitle');

    if (labelEl && subtitleEl) {
        // High-fidelity Recursive Cross-Fade Animation Loop
        const rotateSlides = () => {
            // Step 1: Initiate Exit Transition (Fade Out + Slide Up over 700ms)
            labelEl.classList.add('slide-exit');
            subtitleEl.classList.add('slide-exit');

            // Step 2: Swap content strictly at opacity absolute zero (700ms limit reached)
            setTimeout(() => {
                currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
                const nextSlide = heroSlides[currentSlideIndex];

                // Perform safe DOM content replacements while completely invisible
                labelEl.textContent = nextSlide.label;
                subtitleEl.textContent = nextSlide.subtitle;

                // Remove exit styling and instantly snap components to bottom offset (+6px)
                labelEl.classList.remove('slide-exit');
                subtitleEl.classList.remove('slide-exit');
                labelEl.classList.add('slide-enter-prep');
                subtitleEl.classList.add('slide-enter-prep');

                // Force browser style reflow to register bottom layout preparation
                void labelEl.offsetWidth;
                void subtitleEl.offsetWidth;

                // Step 3: Initiate Entrance Transition (Fade In + Slide Up to 0 over 700ms)
                labelEl.classList.remove('slide-enter-prep');
                subtitleEl.classList.remove('slide-enter-prep');

                // Step 4: Keep slide resting perfectly static for 5.5 seconds before initiating next exit sequence
                setTimeout(rotateSlides, 5500);
            }, 700);
        };

        // Initialize recursive execution chain after an initial delay
        setTimeout(rotateSlides, 5500);
    }

    // ==========================================================================
    // Premium Accordion Height Animations (Core Services details)
    // ==========================================================================
    const accordions = document.querySelectorAll('details.service-details');
    accordions.forEach(accordion => {
        const summary = accordion.querySelector('summary');
        const content = accordion.querySelector('.service-expanded-content');
        
        if (summary && content) {
            summary.addEventListener('click', (e) => {
                e.preventDefault(); // Intercept browser default instant opening state
                
                if (accordion.hasAttribute('open')) {
                    // Phase A: Shrink accordion smoothly
                    const startHeight = accordion.offsetHeight;
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(4px)';
                    
                    const endHeight = summary.offsetHeight + 16; // Add top vertical padding offsets
                    
                    accordion.style.height = `${startHeight}px`;
                    void accordion.offsetHeight; // Force browser layout reflow
                    
                    accordion.style.transition = 'height 500ms cubic-bezier(0.22, 1, 0.36, 1)';
                    accordion.style.height = `${endHeight}px`;
                    
                    const shrinkEnd = (evt) => {
                        if (evt.propertyName === 'height') {
                            accordion.removeAttribute('open');
                            accordion.style.height = '';
                            accordion.style.transition = '';
                            accordion.removeEventListener('transitionend', shrinkEnd);
                        }
                    };
                    accordion.addEventListener('transitionend', shrinkEnd);
                } else {
                    // Phase B: Expand accordion smoothly
                    accordion.setAttribute('open', '');
                    const endHeight = summary.offsetHeight + content.scrollHeight + 20; // Add padding spacing offsets
                    const startHeight = summary.offsetHeight;
                    
                    accordion.style.height = `${startHeight}px`;
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(4px)';
                    void accordion.offsetHeight; // Force browser layout reflow
                    
                    accordion.style.transition = 'height 500ms cubic-bezier(0.22, 1, 0.36, 1)';
                    accordion.style.height = `${endHeight}px`;
                    
                    const expandEnd = (evt) => {
                        if (evt.propertyName === 'height') {
                            accordion.style.height = '';
                            accordion.style.transition = '';
                            content.style.transition = 'opacity 350ms ease, transform 350ms cubic-bezier(0.22, 1, 0.36, 1)';
                            content.style.opacity = '1';
                            content.style.transform = 'translateY(0)';
                            accordion.removeEventListener('transitionend', expandEnd);
                        }
                    };
                    accordion.addEventListener('transitionend', expandEnd);
                }
            });
        }
    });

    // ==========================================================================
    // Symmetrical Company Journey Timeline Scroll Drawer
    // ==========================================================================
    const timeline = document.querySelector('.timeline-container');
    const progressBar = document.getElementById('timeline-progress-bar');
    const timelineBlocks = document.querySelectorAll('.timeline-block');
    
    if (timeline && progressBar) {
        window.addEventListener('scroll', () => {
            const rect = timeline.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            const timelineTop = rect.top;
            const timelineHeight = rect.height;
            const triggerPoint = viewportHeight * 0.7; // Mid-bottom screen trigger coordinate
            
            if (timelineTop < triggerPoint) {
                const scrolledDistance = triggerPoint - timelineTop;
                const percent = Math.min(Math.max((scrolledDistance / timelineHeight) * 100, 0), 100);
                progressBar.style.height = `${percent}%`;
            } else {
                progressBar.style.height = '0%';
            }

            // Programmatic Node Activation based on scroll position progress
            timelineBlocks.forEach(block => {
                const blockRect = block.getBoundingClientRect();
                if (blockRect.top < triggerPoint) {
                    block.classList.add('active-node');
                } else {
                    block.classList.remove('active-node');
                }
            });
        }, { passive: true });
    }

    // ==========================================================================
    // Fixed Desktop Reading Progress Sidebar Tracker
    // ==========================================================================
    const globalProgressBar = document.getElementById('global-scroll-bar');
    const sidebarDotLinks = document.querySelectorAll('.sidebar-dot-link');
    const activeTrackedSections = document.querySelectorAll('main > section[id]');

    if (globalProgressBar && activeTrackedSections.length > 0) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            // Total height available for scrolling
            const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrollRange > 0) {
                const progressPercentage = (currentScroll / scrollRange) * 100;
                globalProgressBar.style.height = `${progressPercentage}%`;
            }

            // Detect current active section in view based on midline trigger coordinate
            let currentActiveId = '';
            activeTrackedSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.45) {
                    currentActiveId = section.getAttribute('id');
                }
            });

            // Map highlight state classes to sidebar indicators
            sidebarDotLinks.forEach(link => {
                if (link.getAttribute('data-target') === currentActiveId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }, { passive: true });
    }
});
