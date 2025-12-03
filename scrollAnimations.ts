// Advanced Scroll-Triggered Animations
// Uses Intersection Observer for performant scroll animations

export const initScrollAnimations = () => {
    // ========== SCROLL REVEAL ANIMATIONS ==========

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px from bottom
        threshold: 0.1, // 10% of element must be visible
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // For stagger effect, animate children sequentially
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, index * 100); // 100ms delay between each child
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach((el) => revealObserver.observe(el));

    // Observe stagger children
    const staggerParents = document.querySelectorAll('.stagger-children');
    staggerParents.forEach((el) => revealObserver.observe(el));

    // ========== PARALLAX EFFECT ==========

    let scrollY = window.scrollY;
    let ticking = false;

    const updateParallax = () => {
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
            const yPos = -(scrollY * speed);
            (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    };

    const requestParallaxUpdate = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        requestParallaxUpdate();
    });

    // ========== SCROLL PROGRESS BAR ==========

    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(progressBar);

        const updateProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

            progressBar.style.width = `${scrollPercent}%`;
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Initial call
    };

    createProgressBar();

    // ========== SMOOTH SCROLL TO ANCHOR ==========

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        });
    });

    // ========== FADE IN ON LOAD ==========

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
};

// Call this function when DOM is ready
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }
}
