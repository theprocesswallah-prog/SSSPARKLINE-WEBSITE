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
        // Force execution of the play thread programmatically
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.log("Static video autoplay was restricted. Attaching passive viewport interaction hooks.");
                
                // Lightweight, passive listeners to resume playback on user activity
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
});
