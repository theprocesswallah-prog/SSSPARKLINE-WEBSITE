/**
 * ==========================================================================
 * System Orchestration & Programmatic Autoplay Manager
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
});
