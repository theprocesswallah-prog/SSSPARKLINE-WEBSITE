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
        setInterval(() => {
            // Step 1: Trigger Cinematic Fade-Out (Fades out and shifts up over 600ms)
            labelEl.classList.add('fade-out');
            subtitleEl.classList.add('fade-out');

            // Step 2: At complete opacity 0 (600ms), snap content and position instantly
            setTimeout(() => {
                currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
                const nextSlide = heroSlides[currentSlideIndex];

                // Swap structural content
                labelEl.textContent = nextSlide.label;
                subtitleEl.textContent = nextSlide.subtitle;

                // Remove fade-out class and add the snap preparation class (moves elements to offset bottom instantly)
                labelEl.classList.remove('fade-out');
                subtitleEl.classList.remove('fade-out');
                labelEl.classList.add('fade-prep');
                subtitleEl.classList.add('fade-prep');

                // Force layout recalculation (reflow) so the browser registers the snapped bottom location
                void labelEl.offsetWidth;
                void subtitleEl.offsetWidth;

                // Step 3: Trigger Cinematic Fade-In (Fades in and slides up from 4px back to 0 over 600ms)
                labelEl.classList.remove('fade-prep');
                subtitleEl.classList.remove('fade-prep');
            }, 600); // Wait exactly 600ms (matching the fade-out CSS duration)
        }, 6000); // Changes text blocks every 6.0 seconds
    }
});
